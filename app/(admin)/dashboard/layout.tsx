"use client";
import React, { useState, useEffect, useRef } from "react";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/Layout/Sidebar";
import AdminHeader from "@/app/components/Layout/AdminHeader";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false); // Reset mobile state on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
        </div>
      }
    >
      <div className="flex min-h-screen ">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* Main content area with proper spacing for fixed sidebar */}
        <div className="flex-1 flex flex-col lg:ml-20 xl:ml-64 transition-all duration-300">
          <AdminHeader
            onToggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />

          <main className="flex-1 overflow-auto min-h-0">{children}</main>
        </div>
      </div>
    </Suspense>
  );
}
