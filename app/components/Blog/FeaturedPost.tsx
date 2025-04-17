"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  avatar: string;
  role: string;
}

interface Post {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  slug: string;
}

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section ref={sectionRef} className="pb-20 pt-10 bg-white">
      <div className="container mx-auto px-4 lg:w-11/12">
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium mb-2">
              Featured Articles
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">Latest Insights</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <FeaturedPostCard
              key={post.id}
              post={post}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeaturedPostCardProps {
  post: Post;
  index: number;
  isInView: boolean;
}

const FeaturedPostCard = ({ post, index, isInView }: FeaturedPostCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.1,
      }}
    >
      {/* Image */}
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <div className="w-full h-48 bg-gray-200 relative">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span>Image placeholder</span>
            </div>
          )}
        </div>

        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 hover:text-yellow-500 transition-colors duration-300">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>

        {/* Author and metadata */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 relative overflow-hidden mr-3">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-sm font-bold">
                    {post.author.name[0]}
                  </span>
                </div>
              )}
            </div>
            <div className="text-sm">
              <span className="font-medium">{post.author.name}</span>
            </div>
          </div>

          <div className="text-xs text-gray-500 flex items-center">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedPosts;
