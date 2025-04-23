export default function BlogPostLoading() {
  return (
    <main className="container mx-auto px-4 pt-30 pb-12 max-w-4xl">
      <div className="h-6 bg-gray-200 rounded w-1/6 mb-8 animate-pulse" />
      <div className="h-10 bg-gray-200 rounded w-5/6 mb-4 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-8 animate-pulse" />
      <div className="h-72 w-full bg-gray-200 rounded-lg mb-8 animate-pulse" />

      <div className="space-y-4">
        <div className="h-5 bg-gray-200 rounded w-full animate-pulse" />
        <div className="h-5 bg-gray-200 rounded w-full animate-pulse" />
        <div className="h-5 bg-gray-200 rounded w-5/6 animate-pulse" />
        <div className="h-5 bg-gray-200 rounded w-4/6 animate-pulse" />
      </div>
    </main>
  );
}
