// components/dashboard/RecentActivity.tsx
import {
  Clock,
  FileText,
  Users,
  DollarSign,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      type: "project",
      icon: FileText,
      message: 'Project "E-commerce Platform" updated',
      time: "2 minutes ago",
      user: "John Doe",
    },
    {
      type: "payment",
      icon: DollarSign,
      message: "Payment received from TechCorp Solutions",
      time: "15 minutes ago",
      user: "System",
    },
    {
      type: "team",
      icon: Users,
      message: "New team member Sarah Wilson added",
      time: "1 hour ago",
      user: "Admin",
    },
    {
      type: "milestone",
      icon: CheckCircle,
      message: "Milestone completed for Mobile App QA",
      time: "2 hours ago",
      user: "Jane Smith",
    },
    {
      type: "alert",
      icon: AlertTriangle,
      message: "Invoice overdue for DesignCo Agency",
      time: "3 hours ago",
      user: "System",
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "project":
        return "text-blue-600 bg-blue-50";
      case "payment":
        return "text-green-600 bg-green-50";
      case "team":
        return "text-purple-600 bg-purple-50";
      case "milestone":
        return "text-green-600 bg-green-50";
      case "alert":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <Clock className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className={`p-2 rounded-lg ${getIconColor(activity.type)}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">{activity.message}</p>
              <div className="flex items-center space-x-2 mt-1">
                <p className="text-xs text-gray-500">{activity.time}</p>
                <span className="text-xs text-gray-400">•</span>
                <p className="text-xs text-gray-500">{activity.user}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-center text-yellow-600 hover:text-yellow-700 text-sm font-medium">
        View All Activity →
      </button>
    </div>
  );
}
