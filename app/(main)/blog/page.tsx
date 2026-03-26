import { Suspense } from "react";
import { Metadata } from "next";
import { getPostsPage } from "@/app/utils/wordpress";
import { BlogHero } from "@/app/components/Blog/BlogHero";
import { BlogList } from "@/app/components/Blog/BlogList";
import { Pagination } from "@/app/components/Blog/BlogPagination";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog - Clan-AP Technologies Private Limited",
  description:
    "Expert articles, guides, and resources on software quality assurance, testing methodologies, and industry best practices.",
  openGraph: {
    title: "Blog - Clan-AP Technologies Private Limited",
    description:
      "Expert articles on QA testing and software quality assurance.",
    type: "website",
  },
};

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Math.max(
    1,
    parseInt(resolvedSearchParams.page ?? "1", 10) || 1
  );

  const { posts, totalPages } = await getPostsPage(currentPage, 9);

  return (
    <main className="container mx-auto px-4 lg:w-11/12 pb-16">
      <BlogHero />

      <Suspense>
        <BlogList posts={posts} currentPage={currentPage} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </Suspense>
    </main>
  );
}
