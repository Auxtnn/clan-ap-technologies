"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Footer from "./Footer";
import Header from "./Header";

// Dynamically import PageLoader with no SSR
const PageLoader = dynamic(() => import("./PageLoader"), {
  ssr: false,
  loading: () => null,
});

export const ClientLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div
          className="flex flex-col min-h-screen"
          style={{
            opacity: isLoading ? 0 : 1,
            transition: "opacity 500ms ease-in-out",
          }}
        >
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      )}
    </>
  );
};
