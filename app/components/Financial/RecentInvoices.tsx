// components/financial/RecentInvoices.tsx
import {
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  Eye,
  Download,
  Send,
} from "lucide-react";

export default function RecentInvoices() {
  const invoices = [
    {
      id: "INV-001",
      client: "TechCorp Solutions",
      amount: 15000,
      status: "Paid",
      dueDate: "2024-02-15",
      issueDate: "2024-01-15",
      project: "E-commerce Platform",
    },
    {
      id: "INV-002",
      client: "StartupXYZ",
      amount: 8500,
      status: "Pending",
      dueDate: "2024-02-20",
      issueDate: "2024-01-20",
      project: "Mobile App QA",
    },
    {
      id: "INV-003",
      client: "DesignCo Agency",
      amount: 12000,
      status: "Overdue",
      dueDate: "2024-02-10",
      issueDate: "2024-01-10",
      project: "Website Redesign",
    },
    {
      id: "INV-004",
      client: "CloudTech Services",
      amount: 6500,
      status: "Draft",
      dueDate: "2024-02-25",
      issueDate: "2024-02-15",
      project: "API Testing",
    },
    {
      id: "INV-005",
      client: "MegaCorp Industries",
      amount: 25000,
      status: "Pending",
      dueDate: "2024-02-28",
      issueDate: "2024-01-28",
      project: "Enterprise System",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Overdue":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "Draft":
        return <FileText className="h-4 w-4 text-gray-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-50 text-green-700 border-green-200";
      case "Pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Overdue":
        return "bg-red-50 text-red-700 border-red-200";
      case "Draft":
        return "bg-gray-50 text-gray-700 border-gray-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Invoices
          </h3>
          <p className="text-sm text-gray-600">
            Track your invoicing and payment status
          </p>
        </div>
        <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                Invoice
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                Client
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                Amount
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                Status
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                Due Date
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">
                  <div>
                    <p className="font-medium text-gray-900">{invoice.id}</p>
                    <p className="text-xs text-gray-500">{invoice.project}</p>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <p className="text-sm text-gray-900">{invoice.client}</p>
                </td>
                <td className="py-3 px-4">
                  <p className="font-medium text-gray-900">
                    ${invoice.amount.toLocaleString()}
                  </p>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      invoice.status
                    )}`}
                  >
                    {getStatusIcon(invoice.status)}
                    <span>{invoice.status}</span>
                  </span>
                </td>
                <td className="py-3 px-4">
                  <p className="text-sm text-gray-900">
                    {new Date(invoice.dueDate).toLocaleDateString()}
                  </p>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                    {invoice.status === "Draft" && (
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <Send className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
