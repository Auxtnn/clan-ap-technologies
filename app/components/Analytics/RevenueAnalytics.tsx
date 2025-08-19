// components/analytics/RevenueAnalytics.tsx
import { DollarSign, TrendingUp } from "lucide-react";

export default function RevenueAnalytics() {
  const monthlyRevenue = [
    { month: "Jan", revenue: 45000, target: 50000 },
    { month: "Feb", revenue: 52000, target: 50000 },
    { month: "Mar", revenue: 48000, target: 55000 },
    { month: "Apr", revenue: 61000, target: 55000 },
    { month: "May", revenue: 55000, target: 60000 },
    { month: "Jun", revenue: 67000, target: 60000 },
  ];

  const maxValue = Math.max(
    ...monthlyRevenue.map((d) => Math.max(d.revenue, d.target))
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Revenue Analytics
          </h3>
          <p className="text-sm text-gray-600">Monthly revenue vs targets</p>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-medium">+23.1%</span>
        </div>
      </div>

      <div className="space-y-4">
        {monthlyRevenue.map((data, index) => (
          <div key={data.month} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700 w-8">
                {data.month}
              </span>
              <div className="flex items-center space-x-4 text-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">
                    Actual: ${data.revenue.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">
                    Target: ${data.target.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div
                  className="bg-gray-300 h-3 rounded-full"
                  style={{ width: `${(data.target / maxValue) * 100}%` }}
                />
                <div
                  className="bg-yellow-500 h-3 rounded-full absolute top-0"
                  style={{ width: `${(data.revenue / maxValue) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <p className="text-xs text-gray-500">Total Revenue</p>
          <p className="font-semibold text-gray-900">$328K</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">Avg Monthly</p>
          <p className="font-semibold text-gray-900">$54.7K</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">Growth Rate</p>
          <p className="font-semibold text-green-600">+23.1%</p>
        </div>
      </div>
    </div>
  );
}
