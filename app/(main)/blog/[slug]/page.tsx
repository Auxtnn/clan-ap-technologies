import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/app/utils/wordpress";
import { BlogDetail } from "@/app/components/Blog/BlogDetail";

export const revalidate = 300;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ fromPage?: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found - Clanap Blog" };
  }

  const excerpt = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").trim();
  const description = excerpt.slice(0, 160);
  const imageUrl =
    post.mediaUrl ?? "https://clanap.com/images/twitter-image.jpg";

  return {
    title: `${post.title.rendered} - Clanap Blog`,
    description,
    openGraph: {
      title: post.title.rendered,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.mediaAlt || post.title.rendered,
        },
      ],
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      url: `https://clanap.com/blog/${resolvedParams.slug}`,
      authors: ["Clan-AP Technologies"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
  searchParams,
}: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) notFound();

  const resolvedSearch = await searchParams;
  const fromPage = resolvedSearch.fromPage ?? null;

  return (
    <main className="container mx-auto px-4 lg:w-11/12 py-12">
      <BlogDetail post={post} fromPage={fromPage} />
    </main>
  );
}
