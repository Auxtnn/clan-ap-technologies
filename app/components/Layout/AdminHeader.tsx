import { Search, Bell, Menu } from "lucide-react";

interface StudentHeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export default function AdminHeader({
  onToggleSidebar,
  isSidebarOpen,
}: StudentHeaderProps) {
  return (
    <header className="bg-[#ffffff]  border-b border-[#e4e7ec] px-4 sm:px-6 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          {/* Mobile Toggle Button */}
          <button
            className={`lg:hidden p-2 hover:bg-[#f7f9fc] text-[#667185] hover:text-[#2e2e2e] border border-transparent hover:border-[#e4e7ec] ${
              isSidebarOpen ? "bg-[#ecf8ff] text-[#0684c9]" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log(
                "Menu button clicked, sidebar currently:",
                isSidebarOpen
              ); // Debug log
              onToggleSidebar();
            }}
            aria-label={
              isSidebarOpen ? "Close mobile sidebar" : "Open mobile sidebar"
            }
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#98a2b3] w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 bg-[#f7f9fc] h-full p-3 border-[#e4e7ec] text-[#667185] placeholder:text-[#98a2b3] w-full"
              />
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button className="text-[#667185] hover:text-[#2e2e2e] hover:bg-[#f7f9fc] p-2">
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="text-sm hidden sm:block">
              <p className="font-medium text-[#2e2e2e]">ADMIN NAME</p>
              <p className="text-xs text-[#98a2b3]">ADMIN</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
