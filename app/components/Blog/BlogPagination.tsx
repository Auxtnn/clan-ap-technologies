"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { PostSummary } from "@/app/types";
import { BlogList } from "./BlogList";
import { useEffect, useState } from "react";
import { useBlogStore } from "@/app/store/blogstore";
import {
  enhancedFetchPosts,
  prefetchAdjacentPages,
} from "@/app/utils/enhanced-blog";

interface BlogPaginationProps {
  posts: PostSummary[];
  totalPages: number;
  initialPage: number;
}

export function BlogPagination({
  posts,
  totalPages,
  initialPage,
}: BlogPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Get state from global store
  // const isLoading = useBlogStore((state) => state.isLoading);
  const error = useBlogStore((state) => state.error);
  const setPostsData = useBlogStore((state) => state.setPostsData);

  // Initialize store with SSR data
  useEffect(() => {
    if (posts.length > 0) {
      setPostsData(posts, posts.length, totalPages, initialPage);
    }
  }, [posts, totalPages, initialPage, setPostsData]);

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const handlePageChange = async (page: number) => {
    if (page === currentPage) return;

    try {
      // Update UI immediately for better UX
      setCurrentPage(page);

      // Update URL
      const params = new URLSearchParams(searchParams);
      if (page === 1) {
        params.delete("page");
      } else {
        params.set("page", page.toString());
      }
      router.push(`${pathname}?${params.toString()}`);

      // Fetch new data from client-side if not already cached
      const { formattedPosts, totalPages: newTotalPages } =
        await enhancedFetchPosts(page, 9);

      // Prefetch adjacent pages
      prefetchAdjacentPages(page, newTotalPages, 9);
    } catch (error) {
      console.error("Error changing page:", error);
      // Error is handled by the store
    }
  };

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg text-center">
        <h2 className="text-lg font-bold mb-2">Failed to load blog posts</h2>
        <p>
          Please try again later or contact support if the problem persists.
        </p>
      </div>
    );
  }

  // if (isLoading) {
  //   return (
  //     <div className="text-center py-12">
  //       <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
  //       <p className="text-gray-500">Loading blog posts...</p>
  //     </div>
  //   );
  // }

  if (!posts.length && totalPages > 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">No posts found on this page.</p>
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(1)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
          >
            Back to first page
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      <BlogList posts={posts} />

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-1" aria-label="Pagination">
            {/* Previous page button */}
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-3 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
                aria-label="Previous page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}

            {/* Page numbers */}
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum: number;

              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    currentPage === pageNum
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  aria-current={currentPage === pageNum ? "page" : undefined}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next page button */}
            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
                aria-label="Next page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
