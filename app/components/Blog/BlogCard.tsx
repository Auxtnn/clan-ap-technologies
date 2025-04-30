"use client";

import Link from "next/link";
import { PostSummary } from "@/app/types";
import { FeaturedMedia } from "./FeaturedMedia";

interface BlogCardProps {
  post: PostSummary;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="block">
        <FeaturedMedia
          mediaId={post.featuredMediaId}
          title={post.title}
          className="h-48 w-full"
        />
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{post.formattedDate}</p>
          <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-yellow-500 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600">{post.excerpt}</p>
          <div className="mt-4 flex">
            <span className="inline-block bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
