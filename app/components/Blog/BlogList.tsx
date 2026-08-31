import { PostSummary } from "@/app/utils/wordpress";
import { BlogCard } from "./BlogCard";

interface BlogListProps {
  posts: PostSummary[];
  currentPage?: number;
}

export function BlogList({ posts, currentPage }: BlogListProps) {
  if (!posts.length) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-700">No posts found</h2>
        <p className="text-gray-500 mt-2">Check back soon for new content!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} currentPage={currentPage} />
      ))}
    </div>
  );
}
