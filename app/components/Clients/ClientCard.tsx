// components/clients/ClientCard.tsx
import {
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Star,
  Building,
  Calendar,
  Eye,
  Edit,
  MoreHorizontal,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

interface Client {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  location: string;
  industry: string;
  status: string;
  healthScore: number;
  totalProjects: number;
  activeProjects: number;
  lifetimeValue: number;
  lastContact: string;
  joinDate: string;
  satisfaction: number | null;
  renewalDate: string | null;
}

interface ClientCardProps {
  client: Client;
}

export default function ClientCard({ client }: ClientCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-50 text-green-700 border-green-200";
      case "At Risk":
        return "bg-red-50 text-red-700 border-red-200";
      case "Prospect":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Completed":
        return "bg-gray-50 text-gray-700 border-gray-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getHealthColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getHealthBgColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-semibold">
            {client.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{client.name}</h3>
            <p className="text-sm text-gray-600">{client.contactPerson}</p>
            <p className="text-xs text-gray-500">{client.industry}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className={`w-2 h-2 rounded-full ${getHealthBgColor(
              client.healthScore
            )}`}
          />
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Status and Health Score */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
            client.status
          )}`}
        >
          {client.status}
        </span>
        <div className="flex items-center space-x-1">
          <span
            className={`text-sm font-medium ${getHealthColor(
              client.healthScore
            )}`}
          >
            {client.healthScore}%
          </span>
          <span className="text-xs text-gray-500">Health</span>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Mail className="h-4 w-4" />
          <span className="truncate">{client.email}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Phone className="h-4 w-4" />
          <span>{client.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{client.location}</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">Total Projects</p>
          <p className="font-semibold text-gray-900">{client.totalProjects}</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">Active</p>
          <p className="font-semibold text-gray-900">{client.activeProjects}</p>
        </div>
      </div>

      {/* Lifetime Value */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">Lifetime Value</span>
        </div>
        <span className="font-semibold text-gray-900">
          ${client.lifetimeValue.toLocaleString()}
        </span>
      </div>

      {/* Satisfaction Rating */}
      {client.satisfaction && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Satisfaction</span>
          </div>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3 w-3 ${
                  star <= client.satisfaction!
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm font-medium ml-1">
              {client.satisfaction}
            </span>
          </div>
        </div>
      )}

      {/* Last Contact */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">Last Contact</span>
        </div>
        <span className="text-sm font-medium text-gray-900">
          {new Date(client.lastContact).toLocaleDateString()}
        </span>
      </div>

      {/* Renewal Alert */}
      {client.renewalDate &&
        new Date(client.renewalDate) <
          new Date(Date.now() + 90 * 24 * 60 * 60 * 1000) && (
          <div className="flex items-center space-x-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <span className="text-xs text-yellow-700">
              Renewal due {new Date(client.renewalDate).toLocaleDateString()}
            </span>
          </div>
        )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Mail className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Phone className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href="/dashboard/clients/1"
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
