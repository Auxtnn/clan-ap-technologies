// app/blog/[slug]/page.tsx
import {
  enhancedFetchPostBySlug,
  enhancedFetchFeaturedMedia,
} from "@/app/utils/enhanced-blog";
import { BlogDetail } from "@/app/components/Blog/BlogDetail";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await enhancedFetchPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found - Clanap Blog",
    };
  }

  // Strip HTML tags from excerpt for meta description
  const excerpt = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").trim();

  return {
    title: `${post.title.rendered} - Clanap Blog`,
    description: excerpt.substring(0, 160),
    openGraph: {
      title: post.title.rendered,
      description: excerpt.substring(0, 160),
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      url: `https://clanap.com/blog/${params.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await enhancedFetchPostBySlug(params.slug);

    if (!post) {
      notFound();
    }

    // Fetch featured image if available
    let featuredImage = null;
    if (post.featured_media) {
      featuredImage = await enhancedFetchFeaturedMedia(post.featured_media);
    }

    return (
      <main className="container mx-auto px-4 lg:w-11/12 py-12">
        <BlogDetail post={post} featuredImage={featuredImage} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return (
      <main className="container mx-auto lg:w-11/12 px-4 pt-30 pb-10">
        <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg text-center">
          <h2 className="text-lg font-bold mb-2">Failed to load blog post</h2>
          <p>
            Please try again later or contact support if the problem persists.
          </p>
        </div>
      </main>
    );
  }
}
