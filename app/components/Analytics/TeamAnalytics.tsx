// components/analytics/TeamAnalytics.tsx
import { Users, Target, Clock, TrendingUp } from "lucide-react";

export default function TeamAnalytics() {
  const teamMetrics = [
    { metric: "Team Size", value: "12", change: "+2" },
    { metric: "Utilization", value: "87%", change: "+5%" },
    { metric: "Productivity", value: "94%", change: "+3%" },
    { metric: "Satisfaction", value: "4.6/5", change: "+0.2" },
  ];

  const departmentPerformance = [
    { department: "QA", members: 6, utilization: 89, performance: 92 },
    { department: "Development", members: 4, utilization: 93, performance: 95 },
    { department: "Design", members: 1, utilization: 75, performance: 90 },
    { department: "Operations", members: 1, utilization: 72, performance: 87 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Team Analytics
          </h3>
          <p className="text-sm text-gray-600">
            Team performance and productivity metrics
          </p>
        </div>
        <Users className="h-5 w-5 text-gray-400" />
      </div>

      {/* Team Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {teamMetrics.map((metric, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">{metric.metric}</p>
            <p className="font-semibold text-gray-900">{metric.value}</p>
            <p className="text-xs text-green-600">{metric.change}</p>
          </div>
        ))}
      </div>

      {/* Department Performance */}
      <div className="pt-4 border-t border-gray-100">
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          Department Performance
        </h4>
        <div className="space-y-3">
          {departmentPerformance.map((dept, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-700">
                  {dept.department}
                </span>
                <span className="text-gray-500">{dept.members} members</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-gray-500">Util: {dept.utilization}%</span>
                <span className="text-gray-500">Perf: {dept.performance}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-yellow-500 h-1 rounded-full"
                  style={{ width: `${dept.performance}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
