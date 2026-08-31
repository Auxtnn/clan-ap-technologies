import { Suspense } from "react";
import { Metadata } from "next";
import { searchPosts } from "@/app/utils/wordpress";
import { BlogHero } from "@/app/components/Blog/BlogHero";
import { BlogList } from "@/app/components/Blog/BlogList";
import { Pagination } from "@/app/components/Blog/BlogPagination";
import Link from "next/link";

interface SearchPageProps {
  searchParams: Promise<{ q?: string; page?: string }>;
}

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const params = await searchParams;
  const query = params.q ?? "";

  return {
    title: `Search: "${query}" - Clan-AP Technologies Private Limited Blog`,
    description: `Blog posts matching "${query}"`,
    robots: { index: false, follow: true },
  };
}
export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  const query = params.q?.trim() ?? "";
  const currentPage = Math.max(1, parseInt(params.page ?? "1", 10) || 1);

  if (!query) {
    return (
      <main className="container mx-auto px-4 lg:w-11/12 pb-16">
        <BlogHero />
        <SearchEmptyState />
      </main>
    );
  }

  const { posts, totalPosts, totalPages } = await searchPosts(
    query,
    currentPage,
    9
  );

  return (
    <main className="container mx-auto px-4 lg:w-11/12 pt-10 pb-16">
      <BlogHero />

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Search results for &ldquo;{query}&rdquo;
        </h2>
        <p className="text-gray-600">
          Found {totalPosts} {totalPosts === 1 ? "result" : "results"}
        </p>
      </div>

      {posts.length > 0 ? (
        <Suspense>
          <BlogList posts={posts} />
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </Suspense>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            No results found
          </h3>
          <p className="text-gray-600 mb-6">
            No posts match &ldquo;{query}&rdquo;. Try different keywords or
            check for typos.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Browse all posts
          </Link>
        </div>
      )}
    </main>
  );
}

function SearchEmptyState() {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Our Blog</h2>
      <p className="text-gray-600 mb-8 max-w-lg mx-auto">
        Enter a search term above to find posts about QA testing, software
        development, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-lg mb-2">Popular Topics</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                href="/blog/search?q=qa+testing"
                className="text-yellow-600 hover:underline"
              >
                QA Testing
              </Link>
            </li>
            <li>
              <Link
                href="/blog/search?q=automation"
                className="text-yellow-600 hover:underline"
              >
                Automation
              </Link>
            </li>
            <li>
              <Link
                href="/blog/search?q=software+development"
                className="text-yellow-600 hover:underline"
              >
                Software Development
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-lg mb-2">Recent Posts</h3>
          <p className="text-gray-600 mb-3">
            Discover our latest articles and insights.
          </p>
          <Link
            href="/blog"
            className="text-yellow-600 hover:underline font-medium"
          >
            View recent posts →
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-lg mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-3">
            Contact our team for personalized assistance.
          </p>
          <Link
            href="/contact"
            className="text-yellow-600 hover:underline font-medium"
          >
            Contact us →
          </Link>
        </div>
      </div>
    </div>
  );
}
