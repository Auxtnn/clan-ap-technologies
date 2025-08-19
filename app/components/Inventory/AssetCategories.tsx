import { Monitor, Package, HardDrive, Smartphone } from "lucide-react";

interface AssetCategoriesProps {
  assets: any[];
}

export default function AssetCategories({ assets }: AssetCategoriesProps) {
  const categories = [
    {
      name: "Hardware",
      icon: Monitor,
      count: assets.filter((a) => a.category === "Hardware").length,
      value: assets
        .filter((a) => a.category === "Hardware")
        .reduce((sum, a) => sum + a.value, 0),
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      name: "Software",
      icon: HardDrive,
      count: assets.filter((a) => a.category === "Software").length,
      value: assets
        .filter((a) => a.category === "Software")
        .reduce((sum, a) => sum + a.value, 0),
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      name: "Supplies",
      icon: Package,
      count: assets.filter((a) => a.category === "Supplies").length,
      value: assets
        .filter((a) => a.category === "Supplies")
        .reduce((sum, a) => sum + a.value, 0),
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      name: "Mobile Devices",
      icon: Smartphone,
      count: assets.filter((a) => a.type === "Mobile Device").length,
      value: assets
        .filter((a) => a.type === "Mobile Device")
        .reduce((sum, a) => sum + a.value, 0),
      color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Asset Categories
          </h3>
          <p className="text-sm text-gray-600">
            Overview of assets by category
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${category.color}`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <category.icon className="h-6 w-6" />
              <span className="font-medium">{category.name}</span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{category.count}</p>
              <p className="text-sm opacity-75">Assets</p>
              <p className="text-sm font-medium">
                ${category.value.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
