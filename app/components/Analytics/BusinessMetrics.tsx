// components/analytics/BusinessMetrics.tsx
import { Target, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

export default function BusinessMetrics() {
  const goals = [
    {
      title: "Monthly Revenue Target",
      target: 75000,
      current: 67890,
      percentage: 90.5,
      status: "on-track",
      timeLeft: "5 days remaining",
    },
    {
      title: "Client Acquisition",
      target: 10,
      current: 8,
      percentage: 80,
      status: "behind",
      timeLeft: "2 new clients needed",
    },
    {
      title: "Team Utilization",
      target: 85,
      current: 87,
      percentage: 102.4,
      status: "exceeded",
      timeLeft: "Target exceeded",
    },
    {
      title: "Project Completion",
      target: 15,
      current: 18,
      percentage: 120,
      status: "exceeded",
      timeLeft: "3 projects ahead",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "exceeded":
        return "text-green-600";
      case "on-track":
        return "text-yellow-600";
      case "behind":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "exceeded":
        return CheckCircle;
      case "on-track":
        return Target;
      case "behind":
        return AlertTriangle;
      default:
        return Target;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Business Goals & KPIs
          </h3>
          <p className="text-sm text-gray-600">
            Track progress towards key business objectives
          </p>
        </div>
        <Target className="h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal, index) => {
          const StatusIcon = getStatusIcon(goal.status);
          return (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{goal.title}</h4>
                <StatusIcon
                  className={`h-4 w-4 ${getStatusColor(goal.status)}`}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    {goal.current.toLocaleString()} /{" "}
                    {goal.target.toLocaleString()}
                  </span>
                  <span
                    className={`font-medium ${getStatusColor(goal.status)}`}
                  >
                    {goal.percentage.toFixed(1)}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      goal.status === "exceeded"
                        ? "bg-green-500"
                        : goal.status === "on-track"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${Math.min(goal.percentage, 100)}%` }}
                  />
                </div>

                <p className="text-xs text-gray-500">{goal.timeLeft}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
