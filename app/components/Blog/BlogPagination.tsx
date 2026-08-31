"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTransition } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  if (totalPages <= 1) return null;

  function navigate(page: number) {
    if (page === currentPage) return;

    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }

  const pageNumbers = buildPageNumbers(currentPage, totalPages);

  return (
    <div className="mt-12 flex justify-center">
      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2 text-sm text-gray-600">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-yellow-500 border-r-transparent" />
            Loading...
          </div>
        </div>
      )}
      <nav className="flex items-center gap-1" aria-label="Pagination">
        <PageButton
          onClick={() => navigate(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </PageButton>

        {pageNumbers.map((item, i) =>
          item === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="px-3 py-2 text-gray-400 select-none"
            >
              ...
            </span>
          ) : (
            <PageButton
              key={item}
              onClick={() => navigate(item as number)}
              active={currentPage === item}
              aria-current={currentPage === item ? "page" : undefined}
            >
              {item}
            </PageButton>
          )
        )}

        <PageButton
          onClick={() => navigate(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </PageButton>
      </nav>
    </div>
  );
}

function PageButton({
  children,
  onClick,
  active = false,
  disabled = false,
  ...props
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  [key: string]: any;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        active
          ? "bg-yellow-500 text-white"
          : disabled
          ? "bg-gray-50 text-gray-300 cursor-not-allowed"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

function buildPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [1];

  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("...");

  pages.push(total);

  return pages;
}
