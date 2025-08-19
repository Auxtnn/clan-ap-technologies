import {
  Package,
  Monitor,
  Smartphone,
  AlertTriangle,
  DollarSign,
} from "lucide-react";

interface InventoryStatsProps {
  assets: any[];
}

export default function InventoryStats({ assets }: InventoryStatsProps) {
  const totalAssets = assets.length;
  const hardwareAssets = assets.filter((a) => a.category === "Hardware").length;
  const softwareAssets = assets.filter((a) => a.category === "Software").length;
  const expiringItems = assets.filter(
    (a) =>
      a.warrantyExpiry &&
      new Date(a.warrantyExpiry) <
        new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
  ).length;
  const totalValue = assets.reduce((sum, a) => sum + a.value, 0);

  const stats = [
    {
      title: "Total Assets",
      value: totalAssets.toString(),
      change: "+3 this month",
      changeType: "positive" as const,
      icon: Package,
    },
    {
      title: "Hardware",
      value: hardwareAssets.toString(),
      change: `${((hardwareAssets / totalAssets) * 100).toFixed(0)}% of total`,
      changeType: "neutral" as const,
      icon: Monitor,
    },
    {
      title: "Software Licenses",
      value: softwareAssets.toString(),
      change: `${((softwareAssets / totalAssets) * 100).toFixed(0)}% of total`,
      changeType: "neutral" as const,
      icon: Smartphone,
    },
    {
      title: "Expiring Soon",
      value: expiringItems.toString(),
      change: "Requires attention",
      changeType:
        expiringItems > 0 ? ("negative" as const) : ("positive" as const),
      icon: AlertTriangle,
    },
    {
      title: "Total Value",
      value: `${(totalValue / 1000).toFixed(0)}K`,
      change: "+8% from last quarter",
      changeType: "positive" as const,
      icon: DollarSign,
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
