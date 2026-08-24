// components/financial/FinancialAlerts.tsx
import { AlertTriangle, Clock, TrendingDown, AlertCircle } from "lucide-react";

export default function FinancialAlerts() {
  const alerts = [
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Overdue Invoices",
      message: "3 invoices totaling $12,450 are overdue",
      action: "Send Reminders",
      priority: "high",
    },
    {
      type: "info",
      icon: Clock,
      title: "Upcoming Payments",
      message: "5 invoices worth $23,890 due this week",
      action: "Review",
      priority: "medium",
    },
    {
      type: "warning",
      icon: TrendingDown,
      title: "Monthly Target",
      message: "Revenue is 15% below monthly target",
      action: "View Details",
      priority: "high",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {alerts.map((alert, index) => (
        <div
          key={index}
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
              <h4
                className={`font-medium ${
                  alert.type === "warning" ? "text-yellow-800" : "text-blue-800"
                }`}
              >
                {alert.title}
              </h4>
              <p
                className={`text-sm mt-1 ${
                  alert.type === "warning" ? "text-yellow-700" : "text-blue-700"
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
  );
}
