"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PostSummary } from "@/app/types";
import { fetchPosts, formatPostData } from "@/app/utils/blog";
import { FeaturedMedia } from "./FeaturedMedia";

interface RelatedPostsProps {
  currentPostId: number;
  categoryIds?: number[];
  limit?: number;
}

export function RelatedPosts({
  currentPostId,
  categoryIds = [],
  limit = 3,
}: RelatedPostsProps) {
  const [relatedPosts, setRelatedPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRelatedPosts = async () => {
      try {
        setLoading(true);

        const response = await fetchPosts(1, 6);

        const { posts } = response;

        const formattedPosts = posts
          .filter((post) => post.id !== currentPostId)
          .map(formatPostData)
          .slice(0, limit);

        setRelatedPosts(formattedPosts);
      } catch (error) {
        console.error("Failed to fetch related posts:", error);
      } finally {
        setLoading(false);
      }
    };

    getRelatedPosts();
  }, [currentPostId, categoryIds, limit]);

  if (loading) {
    return (
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: limit }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow animate-pulse"
            >
              <div className="h-40 bg-gray-200 rounded-t-lg"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!relatedPosts.length) {
    return null;
  }

  return (
    <div className="mt-16 border-t pt-12 border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <FeaturedMedia
                mediaId={post.featuredMediaId}
                title={post.title}
                className="h-48 w-full"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {post.formattedDate}
                </p>
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
        ))}
      </div>
    </div>
  );
}
