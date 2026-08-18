"use client";

import { useState } from "react";
import {
  X,
  Package,
  Monitor,
  Smartphone,
  HardDrive,
  Plus,
  Trash2,
  Calendar,
  DollarSign,
  MapPin,
  User,
  Hash,
} from "lucide-react";

interface Specification {
  id: string;
  key: string;
  value: string;
}

interface AddAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
}

export default function AddAssetModal({
  isOpen,
  onClose,
  onSubmit,
}: AddAssetModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    type: "",
    status: "Available",
    assignee: "",
    purchaseDate: "",
    warrantyExpiry: "",
    condition: "New",
    value: "",
    location: "",
    serialNumber: "",
    supplier: "",
    notes: "",
  });

  const [specifications, setSpecifications] = useState<Specification[]>([
    { id: "1", key: "", value: "" },
  ]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const assetCategories = [
    { value: "Hardware", label: "Hardware", icon: Monitor },
    { value: "Software", label: "Software", icon: HardDrive },
    { value: "Supplies", label: "Supplies", icon: Package },
  ];

  const hardwareTypes = [
    "Laptop",
    "Desktop",
    "Monitor",
    "Mobile Device",
    "Tablet",
    "Server",
    "Router",
    "Switch",
    "Printer",
    "Scanner",
    "Keyboard",
    "Mouse",
    "Headset",
    "Other Hardware",
  ];

  const softwareTypes = [
    "Operating System",
    "Productivity Software",
    "Development Tools",
    "Security Software",
    "Design Software",
    "Database Software",
    "Cloud Service",
    "License",
    "Other Software",
  ];

  const supplyTypes = [
    "Office Supplies",
    "Printer Supplies",
    "Cables",
    "Storage Media",
    "Cleaning Supplies",
    "Furniture",
    "Other Supplies",
  ];

  const getTypeOptions = () => {
    switch (formData.category) {
      case "Hardware":
        return hardwareTypes;
      case "Software":
        return softwareTypes;
      case "Supplies":
        return supplyTypes;
      default:
        return [];
    }
  };

  const currentTypeOptions = getTypeOptions();

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSpecificationChange = (
    id: string,
    field: string,
    value: string
  ) => {
    setSpecifications((prev) =>
      prev.map((spec) => (spec.id === id ? { ...spec, [field]: value } : spec))
    );
  };

  const addSpecification = () => {
    const newSpec: Specification = {
      id: Date.now().toString(),
      key: "",
      value: "",
    };
    setSpecifications((prev) => [...prev, newSpec]);
  };

  const removeSpecification = (id: string) => {
    if (specifications.length > 1) {
      setSpecifications((prev) => prev.filter((spec) => spec.id !== id));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Asset name is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.purchaseDate)
      newErrors.purchaseDate = "Purchase date is required";
    if (!formData.value) newErrors.value = "Value is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.supplier) newErrors.supplier = "Supplier is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const assetData = {
      ...formData,
      id: `AST-${Date.now().toString().slice(-6)}`,
      value: parseFloat(formData.value as string) || 0,
      specifications: specifications
        .filter((spec) => spec.key.trim() && spec.value.trim())
        .reduce((acc, spec) => {
          acc[spec.key] = spec.value;
          return acc;
        }, {} as Record<string, string>),
      createdAt: new Date().toISOString(),
    };

    console.log("Creating asset:", assetData);
    onSubmit?.(assetData);

    // Reset form
    setFormData({
      name: "",
      category: "",
      type: "",
      status: "Available",
      assignee: "",
      purchaseDate: "",
      warrantyExpiry: "",
      condition: "New",
      value: "",
      location: "",
      serialNumber: "",
      supplier: "",
      notes: "",
    });
    setSpecifications([{ id: "1", key: "", value: "" }]);

    onClose();
  };

  const handleClose = () => {
    setFormData({
      name: "",
      category: "",
      type: "",
      status: "Available",
      assignee: "",
      purchaseDate: "",
      warrantyExpiry: "",
      condition: "New",
      value: "",
      location: "",
      serialNumber: "",
      supplier: "",
      notes: "",
    });
    setSpecifications([{ id: "1", key: "", value: "" }]);
    setErrors({});
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-blue-50 flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Add New Asset
                  </h2>
                  <p className="text-sm text-gray-600">
                    Add a new asset to your inventory system
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="space-y-8">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        1
                      </span>
                      Basic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Asset Name *
                        </label>
                        <input
                          type="text"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.name
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          placeholder="Enter asset name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category *
                        </label>
                        <select
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.category
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          value={formData.category}
                          onChange={(e) => {
                            handleInputChange("category", e.target.value);
                            handleInputChange("type", ""); // Reset type when category changes
                          }}
                        >
                          <option value="">Select category</option>
                          {assetCategories.map((category) => (
                            <option key={category.value} value={category.value}>
                              {category.label}
                            </option>
                          ))}
                        </select>
                        {errors.category && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.category}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Type *
                        </label>
                        <select
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.type
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          value={formData.type}
                          onChange={(e) =>
                            handleInputChange("type", e.target.value)
                          }
                          disabled={!formData.category}
                        >
                          <option value="">Select type</option>
                          {currentTypeOptions.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.type && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.type}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Status
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          value={formData.status}
                          onChange={(e) =>
                            handleInputChange("status", e.target.value)
                          }
                        >
                          <option value="Available">Available</option>
                          <option value="In Use">In Use</option>
                          <option value="Maintenance">Maintenance</option>
                          <option value="Retired">Retired</option>
                          <option value="In Stock">In Stock</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Condition
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          value={formData.condition}
                          onChange={(e) =>
                            handleInputChange("condition", e.target.value)
                          }
                        >
                          <option value="New">New</option>
                          <option value="Excellent">Excellent</option>
                          <option value="Good">Good</option>
                          <option value="Fair">Fair</option>
                          <option value="Poor">Poor</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Assignee
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          value={formData.assignee}
                          onChange={(e) =>
                            handleInputChange("assignee", e.target.value)
                          }
                        >
                          <option value="">Unassigned</option>
                          <option value="John Doe">John Doe</option>
                          <option value="Jane Smith">Jane Smith</option>
                          <option value="Mike Johnson">Mike Johnson</option>
                          <option value="Sarah Wilson">Sarah Wilson</option>
                          <option value="Tom Brown">Tom Brown</option>
                          <option value="Alex Chen">Alex Chen</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location *
                        </label>
                        <select
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.location
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          value={formData.location}
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                        >
                          <option value="">Select location</option>
                          <option value="Main Office">Main Office</option>
                          <option value="Branch Office">Branch Office</option>
                          <option value="Warehouse">Warehouse</option>
                          <option value="Remote">Remote</option>
                          <option value="Data Center">Data Center</option>
                          <option value="Conference Room A">
                            Conference Room A
                          </option>
                          <option value="Conference Room B">
                            Conference Room B
                          </option>
                          <option value="IT Department">IT Department</option>
                          <option value="Storage Room">Storage Room</option>
                        </select>
                        {errors.location && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Financial & Purchase Information */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-yellow-600" />
                      Financial Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Purchase Date *
                        </label>
                        <input
                          type="date"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.purchaseDate
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          value={formData.purchaseDate}
                          onChange={(e) =>
                            handleInputChange("purchaseDate", e.target.value)
                          }
                        />
                        {errors.purchaseDate && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.purchaseDate}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Warranty Expiry
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          value={formData.warrantyExpiry}
                          onChange={(e) =>
                            handleInputChange("warrantyExpiry", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Value ($) *
                        </label>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.value
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          placeholder="1500.00"
                          value={formData.value}
                          onChange={(e) =>
                            handleInputChange("value", e.target.value)
                          }
                        />
                        {errors.value && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.value}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Supplier *
                        </label>
                        <select
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.supplier
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          value={formData.supplier}
                          onChange={(e) =>
                            handleInputChange("supplier", e.target.value)
                          }
                        >
                          <option value="">Select supplier</option>
                          <option value="Dell Technologies">
                            Dell Technologies
                          </option>
                          <option value="HP Inc.">HP Inc.</option>
                          <option value="Lenovo">Lenovo</option>
                          <option value="Apple">Apple</option>
                          <option value="Microsoft">Microsoft</option>
                          <option value="Amazon">Amazon</option>
                          <option value="Best Buy">Best Buy</option>
                          <option value="CDW">CDW</option>
                          <option value="Office Depot">Office Depot</option>
                          <option value="Staples">Staples</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.supplier && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.supplier}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Serial Number
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-mono"
                          placeholder="e.g. ABC123XYZ789"
                          value={formData.serialNumber}
                          onChange={(e) =>
                            handleInputChange("serialNumber", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Specifications */}
                  {formData.category === "Hardware" && (
                    <div className="border-t border-gray-200 pt-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                          <Hash className="h-5 w-5 mr-2 text-yellow-600" />
                          Specifications
                        </h3>
                        <button
                          type="button"
                          onClick={addSpecification}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                          <span>Add Spec</span>
                        </button>
                      </div>

                      <div className="space-y-4">
                        {specifications.map((spec) => (
                          <div
                            key={spec.id}
                            className="grid grid-cols-5 gap-4 items-end p-4 border border-gray-200 rounded-lg"
                          >
                            <div className="col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Specification
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                                placeholder="e.g. RAM, Processor, Storage"
                                value={spec.key}
                                onChange={(e) =>
                                  handleSpecificationChange(
                                    spec.id,
                                    "key",
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            <div className="col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Value
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                                placeholder="e.g. 16GB, Intel i7, 512GB SSD"
                                value={spec.value}
                                onChange={(e) =>
                                  handleSpecificationChange(
                                    spec.id,
                                    "value",
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            <div className="flex items-end pb-2">
                              <button
                                type="button"
                                onClick={() => removeSpecification(spec.id)}
                                disabled={specifications.length === 1}
                                className={`p-2 rounded-lg transition-colors ${
                                  specifications.length === 1
                                    ? "text-gray-300 cursor-not-allowed"
                                    : "text-red-500 hover:bg-red-50 hover:text-red-600"
                                }`}
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Notes */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Additional Notes
                    </h3>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                      placeholder="Add any additional notes about this asset..."
                      value={formData.notes}
                      onChange={(e) =>
                        handleInputChange("notes", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium flex items-center space-x-2"
              >
                <Package className="h-4 w-4" />
                <span>Add Asset</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
