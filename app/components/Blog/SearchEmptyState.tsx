// components/Blog/SearchEmptyState.tsx
import React from "react";
import Link from "next/link";

export function SearchEmptyState() {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Our Blog</h2>
      <p className="text-gray-600 mb-8 max-w-lg mx-auto">
        Enter a search term in the search box above to find blog posts about QA
        testing, software development, and other topics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-lg mb-2">Popular Topics</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                href="/blog/category/qa-testing"
                className="text-yellow-600 hover:underline"
              >
                QA Testing
              </Link>
            </li>
            <li>
              <Link
                href="/blog/category/software-development"
                className="text-yellow-600 hover:underline"
              >
                Software Development
              </Link>
            </li>
            <li>
              <Link
                href="/blog/category/automation"
                className="text-yellow-600 hover:underline"
              >
                Automation
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-lg mb-2">Recent Posts</h3>
          <p className="text-gray-600 mb-3">
            Discover our latest articles and insights.
          </p>
          <Link
            href="/blog"
            className="text-yellow-600 hover:underline font-medium"
          >
            View recent posts →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-lg mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-3">
            Contact our team for personalized assistance.
          </p>
          <Link
            href="/contact"
            className="text-yellow-600 hover:underline font-medium"
          >
            Contact us →
          </Link>
        </div>
      </div>
    </div>
  );
}
