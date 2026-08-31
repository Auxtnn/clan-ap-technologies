import { TrendingUp, DollarSign } from "lucide-react";

export default function RevenueChart() {
  const revenueData = [
    { month: "Jan", revenue: 45000, projects: 12 },
    { month: "Feb", revenue: 52000, projects: 15 },
    { month: "Mar", revenue: 48000, projects: 13 },
    { month: "Apr", revenue: 61000, projects: 18 },
    { month: "May", revenue: 55000, projects: 16 },
    { month: "Jun", revenue: 67000, projects: 20 },
  ];

  const maxRevenue = Math.max(...revenueData.map((d) => d.revenue));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Revenue Overview
          </h3>
          <p className="text-sm text-gray-600">
            Monthly revenue and project completion
          </p>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-medium">+23.1%</span>
        </div>
      </div>

      <div className="space-y-4">
        {revenueData.map((data, index) => (
          <div key={data.month} className="flex items-center space-x-4">
            <div className="w-8 text-sm font-medium text-gray-600">
              {data.month}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>${data.revenue.toLocaleString()}</span>
                <span>{data.projects} projects</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-5 w-5 text-yellow-600" />
          <div>
            <p className="text-sm font-medium text-yellow-800">
              Total Revenue (6 months)
            </p>
            <p className="text-lg font-bold text-yellow-900">$328,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
