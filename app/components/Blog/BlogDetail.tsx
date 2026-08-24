import Link from "next/link";
import Image from "next/image";
import { WPPost } from "@/app/utils/wordpress";
import { RelatedPosts } from "./RelatedPosts";
import parse from "html-react-parser";

interface BlogDetailProps {
  post: WPPost & { mediaUrl: string | null; mediaAlt: string };
  fromPage?: string | null;
}

export function BlogDetail({ post, fromPage }: BlogDetailProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const backHref =
    fromPage && fromPage !== "1" ? `/blog?page=${fromPage}` : "/blog";

  return (
    <div className="lg:w-11/12 mx-auto py-16">
      <div className="mb-12">
        <Link
          href={backHref}
          className="inline-flex items-center text-[#FE5300] hover:text-[#cc4200] font-medium"
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
          {post.title.rendered}
        </h1>

        <div className="text-gray-500 mb-12">{formattedDate}</div>

        {post.mediaUrl && (
          <div
            className="mb-12 relative w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src={post.mediaUrl}
              alt={post.mediaAlt || post.title.rendered}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 90vw"
              className="object-cover object-center"
            />
          </div>
        )}

        <WordPressContent content={post.content.rendered} />
      </article>

      <div className="mt-20">
        <RelatedPosts currentPostId={post.id} />
      </div>
    </div>
  );
}

function WordPressContent({ content }: { content: string }) {
  const parseOptions = {
    replace: (domNode: any) => {
      if (domNode.type !== "tag") return undefined;

      if (domNode.attribs?.contenteditable !== undefined) {
        delete domNode.attribs.contenteditable;
      }

      if (
        domNode.name === "img" &&
        domNode.attribs?.fetchpriority !== undefined
      ) {
        domNode.attribs.fetchPriority = domNode.attribs.fetchpriority;
        delete domNode.attribs.fetchpriority;
      }

      const classMap: Record<string, string> = {
        h1: "text-3xl font-bold text-gray-800 mt-12 mb-6 leading-tight",
        h2: "text-2xl font-bold text-gray-800 mt-12 mb-6 leading-tight",
        h3: "text-xl font-bold text-gray-800 mt-10 mb-5 leading-tight",
        h4: "text-lg font-bold text-gray-800 mt-8 mb-4",
        p: "text-lg text-gray-700 leading-relaxed mb-8",
        ul: "my-8 pl-8 text-lg text-gray-700 leading-relaxed list-disc",
        ol: "my-8 pl-8 text-lg text-gray-700 leading-relaxed list-decimal",
        li: "mb-3",
        blockquote:
          "pl-6 border-l-4 border-[#FE5300] italic my-10 text-gray-700 py-1",
        a: "text-[#FE5300] hover:text-[#cc4200] underline font-medium",
        img: "my-10 rounded-lg shadow-md w-full h-auto",
        code: "bg-gray-100 px-1 py-0.5 rounded text-sm font-mono",
        pre: "bg-gray-100 p-4 rounded-lg overflow-x-auto my-8 font-mono text-sm",
        strong: "font-bold text-gray-900",
        b: "font-bold text-gray-900",
        em: "italic",
        i: "italic",
        table: "w-full border-collapse my-8",
        th: "border border-gray-300 px-4 py-2 bg-gray-100 font-bold text-left",
        td: "border border-gray-300 px-4 py-2",
        hr: "my-12 border-t border-gray-200",
        figure: "my-10",
        figcaption: "text-sm text-gray-500 text-center mt-2 italic",
      };

      const cls = classMap[domNode.name];
      if (cls) {
        if (!domNode.attribs) domNode.attribs = {};
        domNode.attribs.class = [domNode.attribs.class, cls]
          .filter(Boolean)
          .join(" ");
      }

      return undefined;
    },
  };

  return (
    <div className="blog-content max-w-none">
      {parse(content, parseOptions)}
    </div>
  );
}
