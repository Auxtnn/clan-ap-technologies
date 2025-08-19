// components/analytics/ClientAnalytics.tsx
import { Users, TrendingUp, DollarSign, Star } from "lucide-react";

export default function ClientAnalytics() {
  const clientMetrics = [
    { metric: "Total Clients", value: "45", change: "+5" },
    { metric: "Active Clients", value: "38", change: "+3" },
    { metric: "Client Retention", value: "92%", change: "+2%" },
    { metric: "Avg LTV", value: "$85K", change: "+12%" },
  ];

  const topClients = [
    { name: "TechCorp Solutions", value: 245000, projects: 8 },
    { name: "MegaCorp Industries", value: 420000, projects: 12 },
    { name: "DesignCo Agency", value: 128000, projects: 6 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Client Analytics
          </h3>
          <p className="text-sm text-gray-600">
            Client performance and relationship metrics
          </p>
        </div>
        <Users className="h-5 w-5 text-gray-400" />
      </div>

      {/* Client Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {clientMetrics.map((metric, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">{metric.metric}</p>
            <p className="font-semibold text-gray-900">{metric.value}</p>
            <p className="text-xs text-green-600">{metric.change}</p>
          </div>
        ))}
      </div>

      {/* Top Clients */}
      <div className="pt-4 border-t border-gray-100">
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          Top Clients by Value
        </h4>
        <div className="space-y-3">
          {topClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-50 rounded"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">
                  {client.name}
                </p>
                <p className="text-xs text-gray-500">
                  {client.projects} projects
                </p>
              </div>
              <p className="font-semibold text-gray-900">
                ${client.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
