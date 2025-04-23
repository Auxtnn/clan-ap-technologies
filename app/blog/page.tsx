// app/blog/page.tsx
import { fetchPosts } from "@/app/utils/blog";
import { formatPostData } from "@/app/utils/blog";
import { BlogHeader } from "@/app/components/Blog/BlogHeader";
import { BlogList } from "@/app/components/Blog/BlogList";
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
  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;
  const postsPerPage = 9;

  try {
    // Modify your fetchPosts function to include headers and total count
    const { posts, totalPosts } = await fetchPosts(currentPage, postsPerPage);
    const formattedPosts = posts.map(formatPostData);

    // Calculate total pages based on the total number of posts from the API
    const totalPages = Math.ceil(totalPosts / postsPerPage);

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
