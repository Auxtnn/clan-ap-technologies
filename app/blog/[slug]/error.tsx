"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function BlogPostError({ error, reset }: ErrorComponentProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Blog post error:", error);
  }, [error]);

  return (
    <main className="container mx-auto px-4 py-30 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Failed to load blog post
      </h1>
      <p className="text-gray-600 mb-8">
        We encountered an error while loading this blog post. Please try again
        later.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={reset}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Try again
        </button>
        <Link
          href="/blog"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </main>
  );
}
