import { Suspense } from "react";
import { Metadata } from "next";
import { fetchSearchResults } from "@/app/utils/blog";
import { formatPostData } from "@/app/utils/blog";
import { BlogPagination } from "@/app/components/Blog/BlogPagination";
import { SearchEmptyState } from "@/app/components/Blog/SearchEmptyState";
import { ErrorBoundary } from "@/app/components/Blog/ErrorBoundary";
import { BlogHero } from "@/app/components";

interface SearchPageProps {
  searchParams: {
    q?: string;
    page?: string;
  };
}

export function generateMetadata({ searchParams }: SearchPageProps): Metadata {
  const query = searchParams?.q || "";
  return {
    title: `Search results for "${query}" - Clanap Blog`,
    description: `Browse blog posts matching your search for "${query}"`,
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `Search results for "${query}" - Clanap Blog`,
      description: `Browse blog posts matching your search for "${query}"`,
      type: "website",
    },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams?.q?.trim() || "";
  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;
  const postsPerPage = 9;

  if (!query) {
    return (
      <main className="container mx-auto px-4 py-12">
        <BlogHero />
        <SearchEmptyState />
      </main>
    );
  }

  try {
    // Fetch search results using WordPress REST API's search parameter
    const { posts, totalPosts } = await fetchSearchResults(
      query,
      currentPage,
      postsPerPage
    );
    const formattedPosts = posts.map(formatPostData);
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    return (
      <main className="container mx-auto px-4 lg:w-11/12 pt-10 pb-10">
        <BlogHero />
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Search results for "{query}"
          </h2>
          <p className="text-gray-600">
            Found {totalPosts} {totalPosts === 1 ? "result" : "results"}
          </p>
        </div>

        <ErrorBoundary
          fallback={
            <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold mb-2">Something went wrong</h2>
              <p>
                We encountered an error displaying search results. Please try
                again.
              </p>
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-yellow-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                <p className="mt-4 text-gray-600">Searching...</p>
              </div>
            }
          >
            {formattedPosts.length > 0 ? (
              <BlogPagination
                posts={formattedPosts}
                totalPages={totalPages}
                initialPage={currentPage}
              />
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-700 mb-4">
                  No results found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any posts matching "{query}". Try using
                  different keywords or checking for typos.
                </p>
                <a
                  href="/blog"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Browse all blog posts
                </a>
              </div>
            )}
          </Suspense>
        </ErrorBoundary>
      </main>
    );
  } catch (error) {
    console.error("Error searching blog posts:", error);
    return (
      <main className="container mx-auto lg:w-11/12 px-4 py-12">
        <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg text-center">
          <h2 className="text-lg font-bold mb-2">
            Failed to search blog posts
          </h2>
          <p className="mb-4">
            Our search service is currently unavailable. Please try again later.
          </p>
          <a
            href="/blog"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 rounded-lg transition-colors"
          >
            Return to blog
          </a>
        </div>
      </main>
    );
  }
}
