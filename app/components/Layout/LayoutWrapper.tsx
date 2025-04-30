"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Footer from "./Footer";
import Header from "./Header";
import { MobileMenuProvider } from "./MobileMenuContext";

const PageLoader = dynamic(() => import("./PageLoader"), {
  ssr: false,
  loading: () => null,
});

export const ClientLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Initialize isLoading to true so the loader shows on initial render
  const [isLoading, setIsLoading] = useState(true);

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
        <MobileMenuProvider>
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
        </MobileMenuProvider>
      )}
    </>
  );
};
