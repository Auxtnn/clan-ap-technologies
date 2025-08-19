// components/dashboard/AlertsPanel.tsx
import { AlertTriangle, Clock, DollarSign, Users, X } from "lucide-react";

export default function AlertsPanel() {
  const alerts = [
    {
      id: "1",
      type: "warning",
      icon: AlertTriangle,
      title: "Overdue Invoices",
      message:
        "3 invoices totaling $12,450 are overdue and require immediate attention",
      action: "Send Reminders",
      priority: "high",
    },
    {
      id: "2",
      type: "info",
      icon: Clock,
      title: "Project Deadline Approaching",
      message: "E-commerce Platform project deadline is in 3 days",
      action: "Review Progress",
      priority: "medium",
    },
    {
      id: "3",
      type: "warning",
      icon: DollarSign,
      title: "Monthly Revenue Target",
      message:
        "Current revenue is 15% below monthly target with 5 days remaining",
      action: "View Analytics",
      priority: "high",
    },
    {
      id: "4",
      type: "info",
      icon: Users,
      title: "Team Capacity",
      message: "2 team members are available for new project assignments",
      action: "Assign Projects",
      priority: "low",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Alerts & Notifications
          </h3>
          <p className="text-sm text-gray-600">
            Important items requiring your attention
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border ${
              alert.type === "warning"
                ? "bg-yellow-50 border-yellow-200"
                : "bg-blue-50 border-blue-200"
            }`}
          >
            <div className="flex items-start space-x-3">
              <alert.icon
                className={`h-5 w-5 mt-0.5 ${
                  alert.type === "warning" ? "text-yellow-600" : "text-blue-600"
                }`}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4
                    className={`font-medium ${
                      alert.type === "warning"
                        ? "text-yellow-800"
                        : "text-blue-800"
                    }`}
                  >
                    {alert.title}
                  </h4>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      alert.priority === "high"
                        ? "bg-red-100 text-red-700"
                        : alert.priority === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {alert.priority}
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    alert.type === "warning"
                      ? "text-yellow-700"
                      : "text-blue-700"
                  }`}
                >
                  {alert.message}
                </p>
                <button
                  className={`text-sm font-medium mt-2 ${
                    alert.type === "warning"
                      ? "text-yellow-800 hover:text-yellow-900"
                      : "text-blue-800 hover:text-blue-900"
                  }`}
                >
                  {alert.action} →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
