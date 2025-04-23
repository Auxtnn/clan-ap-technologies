export default function BlogLoading() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 w-full bg-gray-200 animate-pulse" />
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-4 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-4 animate-pulse" />
              <div className="mt-4">
                <div className="h-8 bg-yellow-500 rounded-full w-24 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
