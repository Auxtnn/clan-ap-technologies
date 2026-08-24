// components/analytics/AnalyticsOverview.tsx
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  FolderOpen,
  Target,
} from "lucide-react";

export default function AnalyticsOverview() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$328,450",
      change: "+23.5%",
      changeType: "positive" as const,
      icon: DollarSign,
      period: "vs last month",
    },
    {
      title: "Active Projects",
      value: "28",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: FolderOpen,
      period: "vs last month",
    },
    {
      title: "Client Satisfaction",
      value: "4.8/5",
      change: "+0.3",
      changeType: "positive" as const,
      icon: Target,
      period: "vs last month",
    },
    {
      title: "Team Utilization",
      value: "87%",
      change: "+5.2%",
      changeType: "positive" as const,
      icon: Users,
      period: "vs last month",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <metric.icon className="h-6 w-6 text-yellow-500" />
            </div>
            <div
              className={`flex items-center space-x-1 ${
                metric.changeType === "positive"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {metric.changeType === "positive" ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">{metric.change}</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600">{metric.title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {metric.value}
            </p>
            <p className="text-xs text-gray-500 mt-1">{metric.period}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
