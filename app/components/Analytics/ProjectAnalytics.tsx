// components/analytics/ProjectAnalytics.tsx
import { FolderOpen, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export default function ProjectAnalytics() {
  const projectData = [
    { status: "Completed", count: 18, percentage: 45, color: "bg-green-500" },
    {
      status: "In Progress",
      count: 15,
      percentage: 37.5,
      color: "bg-blue-500",
    },
    { status: "Planning", count: 5, percentage: 12.5, color: "bg-yellow-500" },
    { status: "On Hold", count: 2, percentage: 5, color: "bg-red-500" },
  ];

  const deliveryMetrics = [
    { metric: "On-Time Delivery", value: "94%", trend: "+2%" },
    { metric: "Avg Project Duration", value: "6.2 weeks", trend: "-0.5 weeks" },
    { metric: "Client Satisfaction", value: "4.8/5", trend: "+0.3" },
    { metric: "Budget Accuracy", value: "96%", trend: "+1%" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Project Analytics
          </h3>
          <p className="text-sm text-gray-600">
            Project performance and delivery metrics
          </p>
        </div>
        <FolderOpen className="h-5 w-5 text-gray-400" />
      </div>

      {/* Project Status Distribution */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          Project Status Distribution
        </h4>
        <div className="space-y-3">
          {projectData.map((project, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${project.color}`} />
                <span className="text-sm text-gray-700">{project.status}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {project.count}
                </p>
                <p className="text-xs text-gray-500">{project.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Metrics */}
      <div className="pt-4 border-t border-gray-100">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Key Metrics</h4>
        <div className="grid grid-cols-2 gap-4">
          {deliveryMetrics.map((metric, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">{metric.metric}</p>
              <p className="font-semibold text-gray-900">{metric.value}</p>
              <p className="text-xs text-green-600">{metric.trend}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
