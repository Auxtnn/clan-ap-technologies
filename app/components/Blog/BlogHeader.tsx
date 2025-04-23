import { BlogSearch } from "./BlogSearch";

export function BlogHeader() {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Clanap Blog</h1>
        <BlogSearch />
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto text-center">
        Professional insights, industry trends, and expert advice on software
        development, quality assurance, and technology innovations.
      </p>
    </div>
  );
}
