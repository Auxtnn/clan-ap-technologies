// components/team/TeamMemberCard.tsx
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Target,
  Clock,
  User,
  MoreHorizontal,
  MessageCircle,
  Video,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  availability: string;
  utilization: number;
  currentProjects: string[];
  skills: string[];
  experience: string;
  joinDate: string;
  lastActive: string;
  performance: number;
  avatar: string | null;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-50 text-green-700 border-green-200";
      case "Busy":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "On Leave":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getAvailabilityDot = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-500";
      case "Busy":
        return "bg-yellow-500";
      case "On Leave":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return "text-green-600";
    if (performance >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-white font-semibold text-lg">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="text-xs text-gray-500">{member.department}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className={`w-3 h-3 rounded-full ${getAvailabilityDot(
              member.availability
            )}`}
          />
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Availability Status */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getAvailabilityColor(
            member.availability
          )}`}
        >
          {member.availability}
        </span>
        <div className="text-right">
          <p className="text-xs text-gray-500">Utilization</p>
          <p className="font-semibold text-gray-900">{member.utilization}%</p>
        </div>
      </div>

      {/* Performance Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
          <span>Performance Score</span>
          <span
            className={`font-medium ${getPerformanceColor(member.performance)}`}
          >
            {member.performance}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${member.performance}%` }}
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Mail className="h-4 w-4" />
          <span className="truncate">{member.email}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Phone className="h-4 w-4" />
          <span>{member.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{member.location}</span>
        </div>
      </div>

      {/* Current Projects */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">
          Current Projects
        </p>
        {member.currentProjects.length > 0 ? (
          <div className="space-y-1">
            {member.currentProjects.slice(0, 2).map((project, index) => (
              <div key={index} className="text-xs bg-gray-50 px-2 py-1 rounded">
                {project}
              </div>
            ))}
            {member.currentProjects.length > 2 && (
              <div className="text-xs text-gray-500">
                +{member.currentProjects.length - 2} more
              </div>
            )}
          </div>
        ) : (
          <p className="text-xs text-gray-500">No active projects</p>
        )}
      </div>

      {/* Skills */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Top Skills</p>
        <div className="flex flex-wrap gap-1">
          {member.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="text-xs text-gray-500">
              +{member.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Last Active */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
        <div className="flex items-center space-x-1">
          <Clock className="h-3 w-3" />
          <span>Last active</span>
        </div>
        <span>{new Date(member.lastActive).toLocaleDateString()}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Mail className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <MessageCircle className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Video className="h-4 w-4" />
          </button>
        </div>

        <a
          href="/dashboard/team/1"
          className="text-xs text-yellow-600 hover:text-yellow-700 font-medium"
        >
          View Profile →
        </a>
      </div>
    </div>
  );
}
