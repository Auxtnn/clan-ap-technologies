export default function BlogPostLoading() {
  return (
    <main className="container mx-auto px-4 lg:w-11/12 pt-32 pb-12">
      <div className="lg:w-11/12 mx-auto py-16">
        <div className="h-5 bg-gray-200 rounded w-28 mb-12 animate-pulse" />
        <div className="h-10 bg-gray-200 rounded w-5/6 mb-4 animate-pulse" />
        <div className="h-10 bg-gray-200 rounded w-3/4 mb-6 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-32 mb-12 animate-pulse" />
        <div
          className="w-full bg-gray-200 rounded-lg mb-12 animate-pulse"
          style={{ aspectRatio: "16/9" }}
        />
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`h-5 bg-gray-200 rounded animate-pulse ${
                i % 3 === 2 ? "w-4/6" : "w-full"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
