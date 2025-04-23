import { PostSummary } from "@/app/types";
import { BlogCard } from "./BlogCard";

interface BlogListProps {
  posts: PostSummary[];
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export function BlogList({
  posts,
  totalPages = 1,
  currentPage = 1,
  onPageChange,
}: BlogListProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-700">No posts found</h2>
        <p className="text-gray-500 mt-2">Check back soon for new content!</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {totalPages > 1 && onPageChange && (
        <div className="flex justify-center mt-12">
          <nav className="flex space-x-2" aria-label="Pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === page
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
