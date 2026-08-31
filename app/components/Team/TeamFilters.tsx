// components/team/TeamFilters.tsx
import { Filter, ChevronDown } from "lucide-react";

export default function TeamFilters() {
  return (
    <div className="flex items-center space-x-2">
      <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
        <Filter className="h-4 w-4" />
        <span className="text-sm">Department</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
        <span className="text-sm">Availability</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
        <span className="text-sm">Skills</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}
