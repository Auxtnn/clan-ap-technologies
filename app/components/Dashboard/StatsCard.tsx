// components/dashboard/StatsCard.tsx
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  trend: number[];
}

export default function StatsCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  trend,
}: StatsCardProps) {
  const changeColor = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-gray-600",
  }[changeType];

  const TrendIcon = changeType === "positive" ? TrendingUp : TrendingDown;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-yellow-50 rounded-lg">
            <Icon className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className={`flex items-center space-x-1 ${changeColor}`}>
          <TrendIcon className="h-4 w-4" />
          <span className="text-sm font-medium">{change}</span>
        </div>

        {/* Mini trend chart */}
        <div className="flex items-end space-x-1">
          {trend.map((point, index) => (
            <div
              key={index}
              className="bg-yellow-200 rounded-sm"
              style={{
                height: `${(point / Math.max(...trend)) * 20 + 4}px`,
                width: "3px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
