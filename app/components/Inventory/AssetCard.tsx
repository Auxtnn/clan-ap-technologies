import {
  Monitor,
  Smartphone,
  HardDrive,
  Package,
  User,
  Calendar,
  DollarSign,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Clock,
  MoreHorizontal,
  Edit,
  Eye,
} from "lucide-react";

interface Asset {
  id: string;
  name: string;
  category: string;
  type: string;
  status: string;
  assignee: string | null;
  purchaseDate: string;
  warrantyExpiry: string | null;
  condition: string;
  value: number;
  location: string;
  serialNumber: string | null;
  supplier: string;
  specifications: Record<string, string>;
}

interface AssetCardProps {
  asset: Asset;
}

export default function AssetCard({ asset }: AssetCardProps) {
  const getCategoryIcon = (category: string, type: string) => {
    if (category === "Hardware") {
      switch (type) {
        case "Laptop":
        case "Monitor":
          return Monitor;
        case "Mobile Device":
          return Smartphone;
        default:
          return HardDrive;
      }
    }
    return Package;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Use":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Available":
        return "bg-green-50 text-green-700 border-green-200";
      case "Maintenance":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Retired":
        return "bg-gray-50 text-gray-700 border-gray-200";
      case "Active":
        return "bg-green-50 text-green-700 border-green-200";
      case "Expiring Soon":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "In Stock":
        return "bg-green-50 text-green-700 border-green-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Excellent":
        return "text-green-600";
      case "Good":
        return "text-yellow-600";
      case "Fair":
        return "text-orange-600";
      case "Poor":
        return "text-red-600";
      case "Active":
        return "text-green-600";
      case "New":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const IconComponent = getCategoryIcon(asset.category, asset.type);

  const isWarrantyExpiring =
    asset.warrantyExpiry &&
    new Date(asset.warrantyExpiry) <
      new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-yellow-50 rounded-lg">
            <IconComponent className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{asset.name}</h3>
            <p className="text-sm text-gray-600">{asset.type}</p>
            <p className="text-xs text-gray-500">{asset.id}</p>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal className="h-4 w-4 text-gray-400" />
        </button>
      </div>

      {/* Status and Condition */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
            asset.status
          )}`}
        >
          {asset.status}
        </span>
        <div className="text-right">
          <p className="text-xs text-gray-500">Condition</p>
          <p
            className={`text-sm font-medium ${getConditionColor(
              asset.condition
            )}`}
          >
            {asset.condition}
          </p>
        </div>
      </div>

      {/* Asset Details */}
      <div className="space-y-3 mb-4">
        {asset.assignee && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <User className="h-4 w-4" />
              <span>Assigned to</span>
            </div>
            <span className="font-medium text-gray-900">{asset.assignee}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>Location</span>
          </div>
          <span className="font-medium text-gray-900">{asset.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <DollarSign className="h-4 w-4" />
            <span>Value</span>
          </div>
          <span className="font-medium text-gray-900">
            ${asset.value.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>Purchase Date</span>
          </div>
          <span className="font-medium text-gray-900">
            {new Date(asset.purchaseDate).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Warranty Alert */}
      {isWarrantyExpiring && (
        <div className="flex items-center space-x-2 p-2 bg-orange-50 border border-orange-200 rounded-lg mb-4">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <span className="text-xs text-orange-700">
            Warranty expires{" "}
            {new Date(asset.warrantyExpiry!).toLocaleDateString()}
          </span>
        </div>
      )}

      {/* Specifications */}
      {asset.category === "Hardware" && (
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Specifications
          </p>
          <div className="space-y-1">
            {Object.entries(asset.specifications)
              .slice(0, 2)
              .map(([key, value]) => (
                <div key={key} className="flex justify-between text-xs">
                  <span className="text-gray-500 capitalize">{key}:</span>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Serial Number */}
      {asset.serialNumber && (
        <div className="mb-4">
          <p className="text-xs text-gray-500">Serial Number</p>
          <p className="text-sm font-mono text-gray-900">
            {asset.serialNumber}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500">{asset.supplier}</div>

        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Eye className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Edit className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
