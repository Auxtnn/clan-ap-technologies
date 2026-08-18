// components/dashboard/QuickActions.tsx
import { Plus, FileText, Users, Mail, Calendar, Settings } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      label: "New Project",
      icon: Plus,
      color: "bg-yellow-500 hover:bg-yellow-600",
      href: "/projects/new",
    },
    {
      label: "Create Invoice",
      icon: FileText,
      color: "bg-blue-500 hover:bg-blue-600",
      href: "/financial/invoicing/new",
    },
    {
      label: "Add Client",
      icon: Users,
      color: "bg-green-500 hover:bg-green-600",
      href: "/clients/new",
    },
    {
      label: "Send Email",
      icon: Mail,
      color: "bg-purple-500 hover:bg-purple-600",
      href: "/clients",
    },
    {
      label: "Schedule Meeting",
      icon: Calendar,
      color: "bg-indigo-500 hover:bg-indigo-600",
      href: "/calendar",
    },
    {
      label: "Settings",
      icon: Settings,
      color: "bg-gray-500 hover:bg-gray-600",
      href: "/settings",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className={`${action.color} text-white p-3 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 justify-center`}
          >
            <action.icon className="h-4 w-4" />
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
