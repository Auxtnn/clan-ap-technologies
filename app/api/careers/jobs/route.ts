import { NextRequest, NextResponse } from "next/server";

const WP_JOBS_URL = "https://blog.clanap.com/wp-json/careers/v1/jobs";

const EMPTY_RESULT = {
  jobs: [],
  pagination: { page: 1, perPage: 6, total: 0, totalPages: 1 },
  filters: { departments: [], employmentTypes: [] },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const forwardParams = new URLSearchParams();

  for (const key of ["page", "per_page", "search", "department", "employment_type"]) {
    const value = searchParams.get(key);
    if (value) forwardParams.set(key, value);
  }

  try {
    const wpResponse = await fetch(`${WP_JOBS_URL}?${forwardParams.toString()}`, {
      next: { revalidate: 60 },
    });

    if (!wpResponse.ok) {
      return NextResponse.json(EMPTY_RESULT, { status: wpResponse.status });
    }

    const data = await wpResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching job listings:", error);
    return NextResponse.json(EMPTY_RESULT, { status: 500 });
  }
}