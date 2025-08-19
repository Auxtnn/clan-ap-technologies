// components/dashboard/TeamAvailability.tsx
import { User, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export default function TeamAvailability() {
  const teamMembers = [
    { name: "John Doe", status: "Available", avatar: "JD", workload: 75 },
    { name: "Jane Smith", status: "Busy", avatar: "JS", workload: 95 },
    { name: "Mike Johnson", status: "Available", avatar: "MJ", workload: 60 },
    { name: "Sarah Wilson", status: "On Leave", avatar: "SW", workload: 0 },
    { name: "Tom Brown", status: "Available", avatar: "TB", workload: 80 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "text-green-600 bg-green-50";
      case "Busy":
        return "text-yellow-600 bg-yellow-50";
      case "On Leave":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Team Availability
        </h3>
        <User className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                {member.avatar}
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">
                  {member.name}
                </p>
                <p
                  className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                    member.status
                  )}`}
                >
                  {member.status}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                {member.workload}%
              </p>
              <div className="w-16 bg-gray-200 rounded-full h-1 mt-1">
                <div
                  className="bg-yellow-500 h-1 rounded-full"
                  style={{ width: `${member.workload}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
