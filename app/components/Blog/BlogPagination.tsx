"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { PostSummary } from "@/app/types";
import { BlogList } from "./BlogList";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    // Update current page when initialPage changes (from URL)
    setCurrentPage(initialPage);
  }, [initialPage]);

  // Add effect to scroll to top when currentPage changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;

    setCurrentPage(page);
    const params = new URLSearchParams(searchParams);

    if (page === 1) {
      params.delete("page"); // Remove page parameter for page 1
    } else {
      params.set("page", page.toString());
    }

    router.push(`${pathname}?${params.toString()}`);
  };

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
              // Add proper type annotation for pageNum
              let pageNum: number;

              // Logic to show 5 pages max with current page in the middle when possible
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
