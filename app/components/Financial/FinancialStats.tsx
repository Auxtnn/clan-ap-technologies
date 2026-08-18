// components/financial/FinancialStats.tsx
import {
  DollarSign,
  TrendingUp,
  FileText,
  CreditCard,
  AlertCircle,
} from "lucide-react";

export default function FinancialStats() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$67,890",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: DollarSign,
      period: "This month",
    },
    {
      title: "Outstanding Invoices",
      value: "$23,450",
      change: "8 invoices",
      changeType: "neutral" as const,
      icon: FileText,
      period: "Pending payment",
    },
    {
      title: "Monthly Expenses",
      value: "$18,230",
      change: "+3.2%",
      changeType: "negative" as const,
      icon: CreditCard,
      period: "This month",
    },
    {
      title: "Net Profit",
      value: "$49,660",
      change: "+18.7%",
      changeType: "positive" as const,
      icon: TrendingUp,
      period: "This month",
    },
    {
      title: "Overdue Payments",
      value: "$5,670",
      change: "3 invoices",
      changeType: "negative" as const,
      icon: AlertCircle,
      period: "Requires action",
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
            {stat.changeType === "negative" && (
              <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />
            )}
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {stat.value}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span
                className={`text-sm font-medium ${
                  stat.changeType === "positive"
                    ? "text-green-600"
                    : stat.changeType === "negative"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {stat.change}
              </span>
              <span className="text-xs text-gray-500">{stat.period}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
