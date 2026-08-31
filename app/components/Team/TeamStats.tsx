// components/team/TeamStats.tsx
import { Users, UserCheck, Clock, Target, TrendingUp } from "lucide-react";

interface TeamStatsProps {
  teamMembers: any[];
}

export default function TeamStats({ teamMembers }: TeamStatsProps) {
  const activeMembers = teamMembers.filter((m) => m.status === "Active").length;
  const availableMembers = teamMembers.filter(
    (m) => m.availability === "Available"
  ).length;
  const averageUtilization =
    teamMembers.reduce((sum, m) => sum + m.utilization, 0) / teamMembers.length;
  const averagePerformance =
    teamMembers.reduce((sum, m) => sum + m.performance, 0) / teamMembers.length;

  const stats = [
    {
      title: "Total Team Members",
      value: teamMembers.length.toString(),
      change: "+2 this month",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Active Members",
      value: activeMembers.toString(),
      change: `${((activeMembers / teamMembers.length) * 100).toFixed(
        0
      )}% active`,
      changeType: "positive" as const,
      icon: UserCheck,
    },
    {
      title: "Available Now",
      value: availableMembers.toString(),
      change: "Ready for projects",
      changeType: "positive" as const,
      icon: Clock,
    },
    {
      title: "Avg Utilization",
      value: `${averageUtilization.toFixed(0)}%`,
      change: "+5% from last month",
      changeType: "positive" as const,
      icon: Target,
    },
    {
      title: "Avg Performance",
      value: `${averagePerformance.toFixed(0)}%`,
      change: "+2% from last month",
      changeType: "positive" as const,
      icon: TrendingUp,
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
            {stat.changeType === "positive" && (
              <TrendingUp className="h-4 w-4 text-green-500" />
            )}
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
