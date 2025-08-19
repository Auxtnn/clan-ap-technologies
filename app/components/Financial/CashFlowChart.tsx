// components/financial/CashFlowChart.tsx
import { TrendingUp, ArrowUpCircle, ArrowDownCircle } from "lucide-react";

export default function CashFlowChart() {
  const cashFlowData = [
    { month: "Jan", income: 58000, expenses: 42000, net: 16000 },
    { month: "Feb", income: 52000, expenses: 38000, net: 14000 },
    { month: "Mar", income: 67000, expenses: 45000, net: 22000 },
    { month: "Apr", income: 73000, expenses: 48000, net: 25000 },
    { month: "May", income: 69000, expenses: 46000, net: 23000 },
    { month: "Jun", income: 78000, expenses: 52000, net: 26000 },
  ];

  const maxValue = Math.max(
    ...cashFlowData.map((d) => Math.max(d.income, d.expenses))
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Cash Flow</h3>
          <p className="text-sm text-gray-600">Income vs Expenses over time</p>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-medium">+15.3%</span>
        </div>
      </div>

      <div className="space-y-4">
        {cashFlowData.map((data, index) => (
          <div key={data.month} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700 w-8">
                {data.month}
              </span>
              <div className="flex items-center space-x-4 text-xs">
                <div className="flex items-center space-x-1">
                  <ArrowUpCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-600">
                    ${data.income.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <ArrowDownCircle className="h-3 w-3 text-red-500" />
                  <span className="text-gray-600">
                    ${data.expenses.toLocaleString()}
                  </span>
                </div>
                <span
                  className={`font-medium ${
                    data.net > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ${data.net.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex space-x-1 h-6">
              <div
                className="bg-green-200 rounded-l"
                style={{ width: `${(data.income / maxValue) * 100}%` }}
              />
              <div
                className="bg-red-200 rounded-r"
                style={{ width: `${(data.expenses / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <p className="text-xs text-gray-500">Avg Income</p>
          <p className="font-semibold text-green-600">$66.2K</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">Avg Expenses</p>
          <p className="font-semibold text-red-600">$45.2K</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">Avg Net</p>
          <p className="font-semibold text-yellow-600">$21.0K</p>
        </div>
      </div>
    </div>
  );
}
