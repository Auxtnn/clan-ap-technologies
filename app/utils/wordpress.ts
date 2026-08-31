import "server-only";

const WP_BASE = "https://blog.clanap.com/wp-json/wp/v2";

export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  categories: number[];
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<
      string,
      { source_url: string; width: number; height: number }
    >;
  };
}

export interface PostSummary {
  id: number;
  slug: string;
  link: string;
  date: string;
  formattedDate: string;
  title: string;
  excerpt: string;
  categories: number[];
  mediaUrl: string | null;
  mediaAlt: string;
  mediaWidth: number;
  mediaHeight: number;
}

export interface PostsPage {
  posts: PostSummary[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
}

async function wpFetch(url: string, revalidate: number): Promise<Response> {
  const maxRetries = 3;
  let lastError: Error = new Error("Request failed");

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const res = await fetch(url, { next: { revalidate } });

      if (res.ok) return res;

      if (res.status === 404) {
        throw new Error(`NOT_FOUND:${url}`);
      }

      if (res.status === 400) {
        throw new Error(`BAD_REQUEST:${url}`);
      }

      if (res.status === 429 || res.status >= 500) {
        lastError = new Error(`HTTP ${res.status}`);
        await delay(1000 * Math.pow(2, attempt));
        continue;
      }

      throw new Error(`HTTP ${res.status}`);
    } catch (err) {
      if (
        err instanceof Error &&
        (err.message.startsWith("NOT_FOUND") ||
          err.message.startsWith("BAD_REQUEST"))
      ) {
        throw err;
      }
      lastError = err instanceof Error ? err : new Error(String(err));
      if (attempt < maxRetries - 1) {
        await delay(1000 * Math.pow(2, attempt));
      }
    }
  }

  throw lastError;
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export function decodeHtmlEntities(html: string): string {
  if (!html) return "";

  const entityMap: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
    "&nbsp;": " ",
    "&ldquo;": "\u201C",
    "&rdquo;": "\u201D",
    "&lsquo;": "\u2018",
    "&rsquo;": "\u2019",
    "&mdash;": "\u2014",
    "&ndash;": "\u2013",
    "&hellip;": "\u2026",
    "&trade;": "\u2122",
    "&reg;": "\u00AE",
    "&copy;": "\u00A9",
    "&euro;": "\u20AC",
    "&pound;": "\u00A3",
    "&yen;": "\u00A5",
    "&cent;": "\u00A2",
    "&bull;": "\u2022",
    "&deg;": "\u00B0",
    "&laquo;": "\u00AB",
    "&raquo;": "\u00BB",
    "&minus;": "\u2212",
    "&plusmn;": "\u00B1",
    "&times;": "\u00D7",
    "&divide;": "\u00F7",
  };

  return html
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    )
    .replace(/&([^;]+);/g, (match) => entityMap[match] ?? match);
}

function stripHtml(html: string): string {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function resolveMedia(
  mediaId: number
): Promise<
  Pick<PostSummary, "mediaUrl" | "mediaAlt" | "mediaWidth" | "mediaHeight">
> {
  if (!mediaId) {
    return { mediaUrl: null, mediaAlt: "", mediaWidth: 0, mediaHeight: 0 };
  }

  try {
    const res = await wpFetch(`${WP_BASE}/media/${mediaId}`, 86400);
    const media: WPMedia = await res.json();

    const large = media.media_details?.sizes?.large;
    const full = media.media_details?.sizes?.full;
    const sourceUrl =
      large?.source_url ?? full?.source_url ?? media.source_url ?? null;
    const width =
      large?.width ?? full?.width ?? media.media_details?.width ?? 1200;
    const height =
      large?.height ?? full?.height ?? media.media_details?.height ?? 630;

    return {
      mediaUrl: sourceUrl,
      mediaAlt: media.alt_text || "",
      mediaWidth: width,
      mediaHeight: height,
    };
  } catch {
    return { mediaUrl: null, mediaAlt: "", mediaWidth: 0, mediaHeight: 0 };
  }
}

function buildPostSummary(
  post: WPPost,
  media: Pick<
    PostSummary,
    "mediaUrl" | "mediaAlt" | "mediaWidth" | "mediaHeight"
  >
): PostSummary {
  const title = decodeHtmlEntities(post.title.rendered);
  const rawExcerpt = decodeHtmlEntities(
    stripHtml(post.excerpt.rendered)
  ).trim();
  const excerpt =
    rawExcerpt.length > 160 ? rawExcerpt.slice(0, 157) + "..." : rawExcerpt;

  return {
    id: post.id,
    slug: post.slug,
    link: post.link,
    date: post.date,
    formattedDate: formatDate(post.date),
    title,
    excerpt,
    categories: post.categories ?? [],
    ...media,
  };
}

export async function getPostsPage(page = 1, perPage = 9): Promise<PostsPage> {
  const res = await wpFetch(
    `${WP_BASE}/posts?page=${page}&per_page=${perPage}&_fields=id,date,modified,slug,link,title,excerpt,featured_media,categories`,
    300
  );

  const totalPosts = parseInt(res.headers.get("X-WP-Total") ?? "0", 10);
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") ?? "0", 10);
  const rawPosts: WPPost[] = await res.json();

  const posts = await Promise.all(
    rawPosts.map(async (post) => {
      const media = await resolveMedia(post.featured_media);
      return buildPostSummary(post, media);
    })
  );

  return { posts, totalPosts, totalPages, currentPage: page };
}

export async function getPostBySlug(
  slug: string
): Promise<(WPPost & { mediaUrl: string | null; mediaAlt: string }) | null> {
  let res: Response;

  try {
    res = await wpFetch(
      `${WP_BASE}/posts?slug=${encodeURIComponent(
        slug
      )}&_fields=id,date,modified,slug,link,title,excerpt,content,featured_media,categories`,
      300
    );
  } catch (err) {
    if (err instanceof Error && err.message.startsWith("NOT_FOUND"))
      return null;
    throw err;
  }

  const posts: WPPost[] = await res.json();
  if (!posts.length) return null;

  const post = posts[0];
  post.title.rendered = decodeHtmlEntities(post.title.rendered);
  post.excerpt.rendered = decodeHtmlEntities(post.excerpt.rendered);
  post.content.rendered = decodeHtmlEntities(post.content.rendered);

  const media = await resolveMedia(post.featured_media);

  return { ...post, mediaUrl: media.mediaUrl, mediaAlt: media.mediaAlt };
}

export async function searchPosts(
  query: string,
  page = 1,
  perPage = 9
): Promise<PostsPage> {
  if (!query.trim()) {
    return { posts: [], totalPosts: 0, totalPages: 0, currentPage: page };
  }

  let res: Response;

  try {
    res = await wpFetch(
      `${WP_BASE}/posts?search=${encodeURIComponent(
        query
      )}&page=${page}&per_page=${perPage}&_fields=id,date,modified,slug,link,title,excerpt,featured_media,categories`,
      60
    );
  } catch (err) {
    if (err instanceof Error && err.message.startsWith("BAD_REQUEST")) {
      return { posts: [], totalPosts: 0, totalPages: 0, currentPage: page };
    }
    throw err;
  }

  const totalPosts = parseInt(res.headers.get("X-WP-Total") ?? "0", 10);
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") ?? "0", 10);
  const rawPosts: WPPost[] = await res.json();

  const posts = await Promise.all(
    rawPosts.map(async (post) => {
      const media = await resolveMedia(post.featured_media);
      return buildPostSummary(post, media);
    })
  );

  return { posts, totalPosts, totalPages, currentPage: page };
}

export async function getRelatedPosts(
  currentPostId: number,
  perPage = 3
): Promise<PostSummary[]> {
  try {
    const res = await wpFetch(
      `${WP_BASE}/posts?per_page=${
        perPage + 1
      }&_fields=id,date,slug,link,title,excerpt,featured_media,categories`,
      300
    );
    const rawPosts: WPPost[] = await res.json();
    const filtered = rawPosts
      .filter((p) => p.id !== currentPostId)
      .slice(0, perPage);

    return Promise.all(
      filtered.map(async (post) => {
        const media = await resolveMedia(post.featured_media);
        return buildPostSummary(post, media);
      })
    );
  } catch {
    return [];
  }
}
