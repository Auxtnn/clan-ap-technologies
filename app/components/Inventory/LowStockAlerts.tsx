import { AlertTriangle, Package, Clock } from "lucide-react";

export default function LowStockAlerts() {
  const alerts = [
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Low Stock Alert",
      message: "Office printer paper running low (2 reams left)",
      action: "Reorder Now",
      priority: "medium",
    },
    {
      type: "warning",
      icon: Clock,
      title: "License Expiring",
      message: "Microsoft Office 365 expires in 15 days",
      action: "Renew License",
      priority: "high",
    },
    {
      type: "info",
      icon: Package,
      title: "Warranty Expiring",
      message: "3 devices have warranties expiring this quarter",
      action: "Review Warranties",
      priority: "medium",
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
