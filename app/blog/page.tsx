// app/blog/page.tsx
import {
  enhancedFetchPosts,
  prefetchAdjacentPages,
} from "@/app/utils/enhanced-blog";
import { Suspense } from "react";
import { BlogPagination } from "../components/Blog/BlogPagination";
import { BlogHero } from "../components";

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export const revalidate = 60; // Revalidate page every 60 seconds

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = params?.page ? parseInt(params.page) : 1;
  const postsPerPage = 9;

  try {
    const { formattedPosts, totalPosts, totalPages } = await enhancedFetchPosts(
      currentPage,
      postsPerPage
    );

    // Prefetch adjacent pages for faster navigation
    prefetchAdjacentPages(currentPage, totalPages, postsPerPage);

    return (
      <main className="container mx-auto lg:w-11/12 px-4 py-10">
        <BlogHero />
        <Suspense
          fallback={
            <div className="text-center py-12">Loading blog posts...</div>
          }
        >
          <BlogPagination
            posts={formattedPosts}
            totalPages={totalPages}
            initialPage={currentPage}
          />
        </Suspense>
      </main>
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return (
      <main className="container mx-auto px-4 py-12">
        <BlogHero />
        <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg text-center">
          <h2 className="text-lg font-bold mb-2">Failed to load blog posts</h2>
          <p>
            Please try again later or contact support if the problem persists.
          </p>
        </div>
      </main>
    );
  }
}
