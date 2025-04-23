import Link from "next/link";

export default function BlogNotFound() {
  return (
    <main className="container mx-auto px-4 lg:w-11/12 py-30 max-h-screen text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Blog Post Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        The blog post you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/blog"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
      >
        Back to Blog
      </Link>
    </main>
  );
}
