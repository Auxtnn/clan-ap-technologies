// app/analytics/page.tsx
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Target,
  Calendar,
  Download,
  Filter,
  RefreshCw,
} from "lucide-react";

import AnalyticsOverview from "@/app/components/Analytics/AnalyticsOverview";
import RevenueAnalytics from "@/app/components/Analytics/RevenueAnalytics";
import ProjectAnalytics from "@/app/components/Analytics/ProjectAnalytics";
import ClientAnalytics from "@/app/components/Analytics/ClientAnalytics";
import TeamAnalytics from "@/app/components/Analytics/TeamAnalytics";
import BusinessMetrics from "@/app/components/Analytics/BusinessMetrics";

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between  gap-10 md:flex-row flex-col">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Business Analytics
          </h1>
          <p className="text-gray-600 mt-1">
            Comprehensive insights into your business performance and growth
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Last 30 Days</span>
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Analytics Overview */}
      <AnalyticsOverview />

      {/* Business Metrics */}
      <BusinessMetrics />

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueAnalytics />
        <ProjectAnalytics />
      </div>

      {/* Secondary Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ClientAnalytics />
        <TeamAnalytics />
      </div>
    </div>
  );
}
