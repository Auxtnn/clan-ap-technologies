import type { Metadata } from "next";
import {
  BlogHero,
  PostGrid,
  FeaturedPosts,
  CategoryFilter,
} from "../components";
import { mockFeaturedPosts, mockPosts, categories } from "../constant";
export const metadata: Metadata = {
  title: "QA Testing Blog - ClanAP Technologies",
  description:
    "Insights, trends, and best practices in quality assurance and software testing from our team of QA experts.",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <BlogHero />
      <FeaturedPosts posts={mockFeaturedPosts} />
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:w-11/12">
          <CategoryFilter categories={categories} />
          <PostGrid posts={mockPosts} />
        </div>
      </div>
    </main>
  );
}
