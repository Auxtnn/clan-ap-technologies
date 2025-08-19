// components/dashboard/ProjectsOverview.tsx
import { Clock, CheckCircle, AlertTriangle, Pause } from "lucide-react";

export default function ProjectsOverview() {
  const projectStats = [
    {
      label: "In Progress",
      count: 15,
      icon: Clock,
      color: "text-blue-600 bg-blue-50",
    },
    {
      label: "Completed",
      count: 8,
      icon: CheckCircle,
      color: "text-green-600 bg-green-50",
    },
    {
      label: "On Hold",
      count: 3,
      icon: Pause,
      color: "text-yellow-600 bg-yellow-50",
    },
    {
      label: "Overdue",
      count: 2,
      icon: AlertTriangle,
      color: "text-red-600 bg-red-50",
    },
  ];

  const recentProjects = [
    {
      name: "E-commerce Platform",
      client: "TechCorp",
      status: "In Progress",
      progress: 75,
    },
    {
      name: "Mobile App QA",
      client: "StartupXYZ",
      status: "Testing",
      progress: 90,
    },
    {
      name: "Website Redesign",
      client: "DesignCo",
      status: "Planning",
      progress: 25,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Projects Overview
      </h3>

      {/* Project Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {projectStats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50"
          >
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{stat.count}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Projects */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          Recent Projects
        </h4>
        <div className="space-y-3">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">
                  {project.name}
                </p>
                <p className="text-xs text-gray-500">{project.client}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">
                  {project.progress}%
                </p>
                <div className="w-16 bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-yellow-500 h-1 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
