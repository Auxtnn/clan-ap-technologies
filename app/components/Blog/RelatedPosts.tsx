import Link from "next/link";
import Image from "next/image";
import { getRelatedPosts } from "@/app/utils/wordpress";

interface RelatedPostsProps {
  currentPostId: number;
}

export async function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  const posts = await getRelatedPosts(currentPostId, 3);

  if (!posts.length) return null;

  return (
    <div className="border-t pt-12 border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <Link href={`/blog/${post.slug}`} className="block group">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                {post.mediaUrl ? (
                  <Image
                    src={post.mediaUrl}
                    alt={post.mediaAlt || post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#FE5300]/10 text-[#FE5300] font-bold">
                    CLANAP
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {post.formattedDate}
                </p>
                <h3 className="text-lg font-bold mb-2 text-gray-800 hover:text-yellow-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
