// components/financial/ExpenseBreakdown.tsx
import { PieChart } from "lucide-react";

export default function ExpenseBreakdown() {
  const expenses = [
    {
      category: "Salaries",
      amount: 12000,
      percentage: 65.8,
      color: "bg-yellow-500",
    },
    {
      category: "Software",
      amount: 2500,
      percentage: 13.7,
      color: "bg-blue-500",
    },
    {
      category: "Office",
      amount: 1800,
      percentage: 9.9,
      color: "bg-green-500",
    },
    {
      category: "Marketing",
      amount: 1200,
      percentage: 6.6,
      color: "bg-purple-500",
    },
    { category: "Other", amount: 730, percentage: 4.0, color: "bg-gray-500" },
  ];

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Expense Breakdown
          </h3>
          <p className="text-sm text-gray-600">Monthly expenses by category</p>
        </div>
        <PieChart className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {expenses.map((expense, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${expense.color}`} />
              <span className="text-sm text-gray-700">{expense.category}</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                ${expense.amount.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">{expense.percentage}%</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Total Expenses
          </span>
          <span className="text-lg font-bold text-gray-900">
            ${totalExpenses.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
