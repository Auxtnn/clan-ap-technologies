"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  FolderOpen,
  Users,
  DollarSign,
  UserCheck,
  Package,
  TrendingUp,
  Settings,
  Bell,
  User,
  LogOut,
  X,
  Loader2,
  Building,
  Mail,
  User2,
} from "lucide-react";
// Mock Link component for demo
const Link = ({ href, children, className, onClick }: any) => (
  <a href={href} className={className} onClick={onClick}>
    {children}
  </a>
);

interface NavigationItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

interface BusinessSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: BusinessSidebarProps) {
  const pathname = usePathname();

  // Mock user data - replace with your auth state
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john@clanap.com",
    role: "CEO",
    avatar: null,
  };

  const navigationItems: NavigationItem[] = [
    // Core Business Operations
    { icon: BarChart3, label: "Overview", href: "/dashboard" },
    { icon: FolderOpen, label: "Projects", href: "/dashboard/projects" },
    { icon: Users, label: "Clients", href: "/dashboard/clients" },
    { icon: UserCheck, label: "Team", href: "/dashboard/team" },

    // Business Resources
    { icon: Package, label: "Inventory", href: "/dashboard/inventory" },
    { icon: DollarSign, label: "Financial", href: "/dashboard/financial" },

    // Communication & Analytics
    { icon: Mail, label: "Newsletter", href: "/dashboard/newsletter" },
    { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
    { icon: TrendingUp, label: "Analytics", href: "/dashboard/analytics" },

    // System
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && window.innerWidth < 1024) {
        const sidebar = document.getElementById("mobile-sidebar");
        const target = event.target as Element;

        // Check if click is on hamburger menu button or its children
        const isMenuButton =
          target.closest('button[aria-label*="sidebar"]') ||
          target.closest(".lg\\:hidden") ||
          target.matches('svg[class*="w-6"]') ||
          target.closest("header");

        // Don't close if clicking on menu button, header, or if sidebar doesn't exist
        if (isMenuButton || !sidebar) {
          return;
        }

        // Close if clicking outside the sidebar
        if (!sidebar.contains(target as Node)) {
          onClose();
        }
      }
    };

    // Only add listener when sidebar is open, with delay to prevent immediate closing
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
    // Example: logout mutation or redirect
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        />
      )}

      {/* Desktop Sidebar - Fixed positioning for full height */}
      <div className="hidden lg:flex lg:w-20 xl:w-64 bg-white border-r border-gray-200 flex-col fixed left-0 top-0 h-full z-30 transition-all duration-300">
        {/* Logo (Desktop) */}
        <div className="flex items-center mb-4 px-3 py-6 lg:justify-center xl:justify-start border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center lg:w-10 lg:h-10 xl:w-8 xl:h-8">
              <Building className="w-5 h-5 text-white lg:w-6 lg:h-6 xl:w-5 xl:h-5" />
            </div>
            <div className="lg:hidden xl:block">
              <h1 className="text-lg font-bold text-gray-900">Clan AP</h1>
              <p className="text-xs text-gray-500">Technologies</p>
            </div>
          </div>
        </div>

        {/* Navigation Items - Scrollable */}
        <nav className="flex-1 space-y-1 px-3 lg:px-2 xl:px-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  } lg:justify-center xl:justify-start`}
                >
                  <item.icon className="w-5 h-5 mr-3 lg:mr-0 xl:mr-3 flex-shrink-0" />
                  <span className="lg:hidden xl:inline truncate">
                    {item.label}
                  </span>
                </Link>

                {/* Tooltip for collapsed state */}
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity lg:block xl:hidden z-50 whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            );
          })}
        </nav>

        {/* User Profile Section - Fixed at bottom */}
        <div className="p-4 border-t border-gray-200 lg:p-2 xl:p-4 bg-white">
          <div className="flex items-center justify-between lg:flex-col xl:flex-row relative group">
            <div className="flex items-center space-x-3 lg:space-x-0 lg:flex-col xl:space-x-3 xl:flex-row min-w-0 flex-1">
              <div className="w-10 h-10 flex-shrink-0">
                <User2 />
              </div>
              <div className="flex-1 min-w-0 text-center xl:text-left lg:mt-2 xl:mt-0">
                <p className="text-sm font-medium text-gray-900 truncate lg:hidden xl:block">
                  ADMIN NAME
                </p>
                <p className="text-xs text-gray-500 truncate lg:hidden xl:block max-w-[120px]">
                  Admin
                </p>
              </div>
            </div>
            <button
              className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1 flex-shrink-0"
              onClick={handleLogout}
              aria-label="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>

            {/* Tooltip for logout button in collapsed state */}
            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity lg:block xl:hidden z-50 whitespace-nowrap">
              Logout
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div
          id="mobile-sidebar"
          className="fixed top-0 left-0 w-80 bg-white border-r border-gray-200 flex flex-col h-full z-50 lg:hidden shadow-2xl"
          style={{ overflow: "hidden" }}
        >
          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Clan AP</h1>
                <p className="text-xs text-gray-500">Technologies</p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close sidebar"
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items - Scrollable */}
          <nav className="flex-1 space-y-1 px-4 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => onClose()}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-50 text-yellow-700 border border-yellow-200 shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile Section - Fixed at bottom */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    ADMIN NAME
                  </p>
                  <p className="text-xs text-gray-500 truncate max-w-[180px]">
                    ADMIN
                  </p>
                </div>
              </div>
              <button
                className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1 flex-shrink-0 ml-2"
                onClick={handleLogout}
                aria-label="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
