// components/team/TeamCapacity.tsx
import { BarChart3, Users, Clock } from "lucide-react";

interface TeamCapacityProps {
  teamMembers: any[];
}

export default function TeamCapacity({ teamMembers }: TeamCapacityProps) {
  const departments = [
    "Quality Assurance",
    "Development",
    "Design",
    "Operations",
  ];

  const capacityData = departments.map((dept) => {
    const deptMembers = teamMembers.filter((m) => m.department === dept);
    const totalCapacity = deptMembers.length * 100;
    const usedCapacity = deptMembers.reduce((sum, m) => sum + m.utilization, 0);
    const availableCapacity = totalCapacity - usedCapacity;

    return {
      department: dept,
      total: deptMembers.length,
      used: usedCapacity,
      available: availableCapacity,
      utilization: totalCapacity > 0 ? (usedCapacity / totalCapacity) * 100 : 0,
    };
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Team Capacity Overview
          </h3>
          <p className="text-sm text-gray-600">
            Resource utilization by department
          </p>
        </div>
        <BarChart3 className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {capacityData.map((dept, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">
                  {dept.department}
                </span>
                <span className="text-sm text-gray-500">
                  ({dept.total} members)
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-gray-900">
                  {dept.utilization.toFixed(0)}% utilized
                </span>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${dept.utilization}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Used: {dept.used.toFixed(0)}%</span>
              <span>Available: {dept.available.toFixed(0)}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs text-gray-500">Total Members</p>
            <p className="font-semibold text-gray-900">{teamMembers.length}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Avg Utilization</p>
            <p className="font-semibold text-yellow-600">
              {(
                teamMembers.reduce((sum, m) => sum + m.utilization, 0) /
                teamMembers.length
              ).toFixed(0)}
              %
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Available Capacity</p>
            <p className="font-semibold text-green-600">
              {teamMembers.filter((m) => m.availability === "Available").length}{" "}
              members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
