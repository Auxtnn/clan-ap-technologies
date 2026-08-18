import Link from "next/link";
import Image from "next/image";
import { PostSummary } from "@/app/utils/wordpress";

interface BlogCardProps {
  post: PostSummary;
  currentPage?: number;
}

export function BlogCard({ post, currentPage }: BlogCardProps) {
  const href =
    currentPage && currentPage > 1
      ? `/blog/${post.slug}?fromPage=${currentPage}`
      : `/blog/${post.slug}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={href} className="block group">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          {post.mediaUrl ? (
            <Image
              src={post.mediaUrl}
              alt={post.mediaAlt || post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#FE5300]/10 text-[#FE5300] font-bold">
              CLANAP
            </div>
          )}
        </div>

        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{post.formattedDate}</p>
          <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-yellow-500 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
          <div className="mt-4">
            <span className="inline-block bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
