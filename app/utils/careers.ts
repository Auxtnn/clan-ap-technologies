import "server-only";

const WP_BASE = "https://blog.clanap.com/wp-json/wp/v2";

export interface WPJobListing {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  meta: {
    department?: string;
    location?: string;
    employment_type?: string;
    remote?: boolean;
  };
}

export interface JobSummary {
  id: number;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  remote: boolean;
  excerpt: string;
  contentHtml: string;
  postedDate: string;
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function wpFetch(url: string, revalidate: number): Promise<Response> {
  const maxRetries = 3;
  let lastError: Error = new Error("Request failed");

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const res = await fetch(url, { next: { revalidate } });

      if (res.ok) return res;

      if (res.status === 429 || res.status >= 500) {
        lastError = new Error(`HTTP ${res.status}`);
        await delay(1000 * Math.pow(2, attempt));
        continue;
      }

      throw new Error(`HTTP ${res.status}`);
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      if (attempt < maxRetries - 1) {
        await delay(1000 * Math.pow(2, attempt));
      }
    }
  }

  throw lastError;
}

function stripHtml(html: string): string {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

function decodeHtmlEntities(html: string): string {
  if (!html) return "";

  const entityMap: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&nbsp;": " ",
    "&rsquo;": "\u2019",
    "&lsquo;": "\u2018",
    "&rdquo;": "\u201D",
    "&ldquo;": "\u201C",
    "&mdash;": "\u2014",
    "&ndash;": "\u2013",
  };

  return html
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&([^;]+);/g, (match) => entityMap[match] ?? match);
}

function buildJobSummary(job: WPJobListing): JobSummary {
  const rawExcerpt = decodeHtmlEntities(stripHtml(job.excerpt.rendered)).trim();

  return {
    id: job.id,
    slug: job.slug,
    title: decodeHtmlEntities(job.title.rendered),
    department: job.meta?.department || "General",
    location: job.meta?.location || "Remote",
    employmentType: job.meta?.employment_type || "Full-time",
    remote: Boolean(job.meta?.remote),
    excerpt: rawExcerpt,
    contentHtml: decodeHtmlEntities(job.content.rendered),
    postedDate: job.date,
  };
}

export async function getJobListings(): Promise<JobSummary[]> {
  try {
    const res = await wpFetch(
      `${WP_BASE}/job_listing?per_page=50&_fields=id,slug,date,title,excerpt,content,meta`,
      120
    );
    const jobs: WPJobListing[] = await res.json();
    return jobs.map(buildJobSummary);
  } catch (error) {
    console.error("Error fetching job listings:", error);
    return [];
  }
}


export interface JobSummary {
  id: number;
  title: string;
  department: string;
  employmentType: string;
  location: string;
  remote: boolean;
  excerpt: string;
  contentHtml: string;
}

export interface JobsPagination {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface JobsFilters {
  departments: string[];
  employmentTypes: string[];
}

export interface JobsPageResult {
  jobs: JobSummary[];
  pagination: JobsPagination;
  filters: JobsFilters;
}

const WP_JOBS_URL = "https://blog.clanap.com/wp-json/careers/v1/jobs";

function emptyResult(): JobsPageResult {
  return {
    jobs: [],
    pagination: { page: 1, perPage: 6, total: 0, totalPages: 1 },
    filters: { departments: [], employmentTypes: [] },
  };
}

export async function getJobsPage(params: {
  page?: number;
  perPage?: number;
  search?: string;
  department?: string;
  employmentType?: string;
} = {}): Promise<JobsPageResult> {
  const searchParams = new URLSearchParams();
  if (params.page) searchParams.set("page", String(params.page));
  if (params.perPage) searchParams.set("per_page", String(params.perPage));
  if (params.search) searchParams.set("search", params.search);
  if (params.department) searchParams.set("department", params.department);
  if (params.employmentType) searchParams.set("employment_type", params.employmentType);

  try {
    const res = await fetch(`${WP_JOBS_URL}?${searchParams.toString()}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return emptyResult();
    return await res.json();
  } catch (error) {
    console.error("Error fetching job listings:", error);
    return emptyResult();
  }
}