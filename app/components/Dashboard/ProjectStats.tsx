// components/projects/ProjectStats.tsx
import {
  FolderOpen,
  Clock,
  CheckCircle,
  AlertTriangle,
  Pause,
} from "lucide-react";

interface ProjectStatsProps {
  projects: any[];
}

export default function ProjectStats({ projects }: ProjectStatsProps) {
  const totalProjects = projects.length;
  const inProgress = projects.filter((p) => p.status === "In Progress").length;
  const completed = projects.filter((p) => p.status === "Completed").length;
  const overdue = projects.filter((p) => p.status === "Overdue").length;
  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);

  const stats = [
    {
      title: "Total Projects",
      value: totalProjects.toString(),
      change: "+3 this month",
      changeType: "positive" as const,
      icon: FolderOpen,
    },
    {
      title: "In Progress",
      value: inProgress.toString(),
      change: `${((inProgress / totalProjects) * 100).toFixed(0)}% of total`,
      changeType: "neutral" as const,
      icon: Clock,
    },
    {
      title: "Completed",
      value: completed.toString(),
      change: `${((completed / totalProjects) * 100).toFixed(0)}% success rate`,
      changeType: "positive" as const,
      icon: CheckCircle,
    },
    {
      title: "Overdue",
      value: overdue.toString(),
      change: overdue > 0 ? "Needs attention" : "All on track",
      changeType: overdue > 0 ? ("negative" as const) : ("positive" as const),
      icon: AlertTriangle,
    },
    {
      title: "Total Budget",
      value: `$${(totalBudget / 1000).toFixed(0)}K`,
      change: "+12% from last month",
      changeType: "positive" as const,
      icon: FolderOpen,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <stat.icon className="h-6 w-6 text-yellow-500" />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {stat.value}
            </p>
            <span
              className={`text-sm ${
                stat.changeType === "positive"
                  ? "text-green-600"
                  : stat.changeType === "negative"
                  ? "text-red-600"
                  : "text-gray-600"
              }`}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
