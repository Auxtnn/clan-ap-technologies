// components/clients/ClientStats.tsx
import { Users, TrendingUp, DollarSign, Star } from "lucide-react";

interface ClientStatsProps {
  clients: any[];
}

export default function ClientStats({ clients }: ClientStatsProps) {
  const activeClients = clients.filter((c) => c.status === "Active").length;
  const totalLifetimeValue = clients.reduce(
    (sum, c) => sum + c.lifetimeValue,
    0
  );
  const averageSatisfaction =
    clients
      .filter((c) => c.satisfaction)
      .reduce((sum, c) => sum + c.satisfaction!, 0) /
    clients.filter((c) => c.satisfaction).length;
  const atRiskClients = clients.filter((c) => c.status === "At Risk").length;

  const stats = [
    {
      title: "Active Clients",
      value: activeClients.toString(),
      change: "+2 this month",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Total Lifetime Value",
      value: `${(totalLifetimeValue / 1000).toFixed(0)}K`,
      change: "+15.3%",
      changeType: "positive" as const,
      icon: DollarSign,
    },
    {
      title: "Avg Satisfaction",
      value: averageSatisfaction.toFixed(1),
      change: "+0.2",
      changeType: "positive" as const,
      icon: Star,
    },
    {
      title: "At Risk",
      value: atRiskClients.toString(),
      change: atRiskClients > 0 ? "Needs attention" : "All healthy",
      changeType:
        atRiskClients > 0 ? ("negative" as const) : ("positive" as const),
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-50 rounded-lg">
                <stat.icon className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`text-sm ${
                stat.changeType === "positive"
                  ? "text-green-600"
                  : "text-red-600"
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
