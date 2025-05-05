import { WordPressPost } from "@/app/types";
import Link from "next/link";
import { FeaturedMedia } from "./FeaturedMedia";
import { RelatedPosts } from "./RelatedPosts";
import parse from "html-react-parser";

interface BlogDetailProps {
  post: WordPressPost;
  featuredImage?: any;
}

export function BlogDetail({ post }: BlogDetailProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="lg:w-11/12 mx-auto py-16">
      {/* Back to blog link */}
      <div className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      <article>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
          {post.title.rendered}
        </h1>

        {/* Date */}
        <div className="text-gray-500 mb-12">{formattedDate}</div>

        {/* Featured Image */}
        <div className="mb-12">
          <FeaturedMedia
            mediaId={post.featured_media}
            title={post.title.rendered}
            className="w-full rounded-lg"
            priority={true}
          />
        </div>

        {/* Enhanced WordPress Content */}
        <EnhancedWordPressContent content={post.content.rendered} />
      </article>

      {/* Related Posts */}
      <div className="mt-20">
        <RelatedPosts currentPostId={post.id} categoryIds={post.categories} />
      </div>
    </div>
  );
}

function EnhancedWordPressContent({ content }: { content: string }) {
  const parseOptions = {
    replace: (domNode: any) => {
      if (domNode.type === "tag") {
        // Fix contentEditable attribute
        if (domNode.attribs && "contenteditable" in domNode.attribs) {
          delete domNode.attribs.contenteditable;
        }

        // Fix fetchpriority to fetchPriority
        if (
          domNode.name === "img" &&
          domNode.attribs &&
          "fetchpriority" in domNode.attribs
        ) {
          const value = domNode.attribs.fetchpriority;
          delete domNode.attribs.fetchpriority;
          domNode.attribs.fetchPriority = value;
        }

        let className = "";

        // Enhanced typography and spacing for different elements
        switch (domNode.name) {
          case "h1":
            className =
              "text-3xl font-bold text-gray-800 mt-12 mb-6 leading-tight";
            break;
          case "h2":
            className =
              "text-2xl font-bold text-gray-800 mt-12 mb-6 leading-tight";
            break;
          case "h3":
            className =
              "text-xl font-bold text-gray-800 mt-10 mb-5 leading-tight";
            break;
          case "h4":
            className = "text-lg font-bold text-gray-800 mt-8 mb-4";
            break;
          case "p":
            className = "text-lg text-gray-700 leading-relaxed mb-8";
            break;
          case "ul":
          case "ol":
            className = "my-8 pl-8 text-lg text-gray-700 leading-relaxed";
            break;
          case "li":
            className = "mb-3";
            break;
          case "blockquote":
            className =
              "pl-6 border-l-4 border-yellow-400 italic my-10 text-gray-700 py-1";
            break;
          case "a":
            className =
              "text-yellow-600 hover:text-yellow-700 underline font-medium";
            break;
          case "img":
            className = "my-10 rounded-lg shadow-md w-full h-auto";
            break;
          case "code":
            className = "bg-gray-100 p-1 rounded text-sm font-mono";
            break;
          case "pre":
            className =
              "bg-gray-100 p-4 rounded-lg overflow-x-auto my-8 font-mono text-sm";
            break;
          case "strong":
          case "b":
            className = "font-bold text-gray-900";
            break;
          case "em":
          case "i":
            className = "italic";
            break;
          case "table":
            className = "w-full border-collapse my-8";
            break;
          case "th":
            className =
              "border border-gray-300 px-4 py-2 bg-gray-100 font-bold text-left";
            break;
          case "td":
            className = "border border-gray-300 px-4 py-2";
            break;
          case "hr":
            className = "my-12 border-t border-gray-200";
            break;
          case "figure":
            className = "my-10";
            break;
          case "figcaption":
            className = "text-sm text-gray-500 text-center mt-2 italic";
            break;
        }

        if (className) {
          if (!domNode.attribs) domNode.attribs = {};
          domNode.attribs.class =
            (domNode.attribs.class || "") + " " + className;
        }
      }
      return undefined;
    },
  };

  return <div className="blog-content">{parse(content, parseOptions)}</div>;
}
