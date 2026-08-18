// components/projects/ProjectCard.tsx
import {
  Calendar,
  DollarSign,
  Users,
  MoreHorizontal,
  Eye,
  Edit,
  Clock,
  CheckCircle,
  AlertTriangle,
  Pause,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  client: string;
  status: string;
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  team: string[];
  priority: string;
  health: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Overdue":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "On Hold":
        return <Pause className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Completed":
        return "bg-green-50 text-green-700 border-green-200";
      case "Overdue":
        return "bg-red-50 text-red-700 border-red-200";
      case "On Hold":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Testing":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Planning":
        return "bg-gray-50 text-gray-700 border-gray-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case "Excellent":
        return "bg-green-500";
      case "Good":
        return "bg-yellow-500";
      case "Warning":
        return "bg-orange-500";
      case "At Risk":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-500";
      case "High":
        return "bg-orange-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
          <p className="text-sm text-gray-600">{project.client}</p>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className={`w-2 h-2 rounded-full ${getHealthColor(project.health)}`}
            title={`Health: ${project.health}`}
          />
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Status and Priority */}
      <div className="flex items-center space-x-2 mb-4">
        <span
          className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
            project.status
          )}`}
        >
          {getStatusIcon(project.status)}
          <span>{project.status}</span>
        </span>
        <span
          className={`w-2 h-2 rounded-full ${getPriorityColor(
            project.priority
          )}`}
          title={`Priority: ${project.priority}`}
        />
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>Due Date</span>
          </div>
          <span className="font-medium">
            {new Date(project.endDate).toLocaleDateString()}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <DollarSign className="h-4 w-4" />
            <span>Budget</span>
          </div>
          <span className="font-medium">
            ${project.budget.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Users className="h-4 w-4" />
            <span>Team</span>
          </div>
          <span className="font-medium">{project.team.length} members</span>
        </div>
      </div>

      {/* Team Avatars */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.team.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium"
              title={member}
            >
              {member
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          ))}
          {project.team.length > 3 && (
            <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium">
              +{project.team.length - 3}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <a
            href="/dashboard/projects/1"
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Eye className="h-4 w-4" />
          </a>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Edit className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
