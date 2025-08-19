"use client";
import { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Wifi,
  Download,
  Upload,
  Package,
} from "lucide-react";

import InventoryStats from "@/app/components/Inventory/InventoryStats";
import AssetCard from "@/app/components/Inventory/AssetCard";
import AddAssetModal from "@/app/components/modals/AddAssetModal";
import InventoryFilters from "@/app/components/Inventory/InventoryFilters";
import AssetCategories from "@/app/components/Inventory/AssetCategories";
import LowStockAlerts from "@/app/components/Inventory/LowStockAlerts";

export default function InventoryPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const assets = [
    {
      id: "AST-001",
      name: 'MacBook Pro 16" M3',
      category: "Hardware",
      type: "Laptop",
      status: "In Use",
      assignee: "John Doe",
      purchaseDate: "2024-01-15",
      warrantyExpiry: "2027-01-15",
      condition: "Excellent",
      value: 2499,
      location: "San Francisco Office",
      serialNumber: "MB2024001",
      supplier: "Apple Inc.",
      specifications: {
        processor: "M3 Pro",
        memory: "32GB",
        storage: "1TB SSD",
      },
    },
    {
      id: "AST-002",
      name: 'Dell UltraSharp 27" Monitor',
      category: "Hardware",
      type: "Monitor",
      status: "Available",
      assignee: null,
      purchaseDate: "2023-11-20",
      warrantyExpiry: "2026-11-20",
      condition: "Good",
      value: 549,
      location: "Storage Room A",
      serialNumber: "DL2023045",
      supplier: "Dell Technologies",
      specifications: {
        resolution: "2560x1440",
        panelType: "IPS",
        connectivity: "USB-C, HDMI, DP",
      },
    },
    {
      id: "LIC-001",
      name: "Adobe Creative Suite",
      category: "Software",
      type: "License",
      status: "Active",
      assignee: "Sarah Wilson",
      purchaseDate: "2024-01-01",
      warrantyExpiry: "2024-12-31",
      condition: "Active",
      value: 599,
      location: "Cloud",
      serialNumber: "ADB2024CC001",
      supplier: "Adobe Systems",
      specifications: {
        licenseType: "Annual Subscription",
        users: "1",
        features: "Full Creative Cloud",
      },
    },
    {
      id: "AST-003",
      name: "iPhone 15 Pro",
      category: "Hardware",
      type: "Mobile Device",
      status: "In Use",
      assignee: "Jane Smith",
      purchaseDate: "2023-10-15",
      warrantyExpiry: "2024-10-15",
      condition: "Good",
      value: 999,
      location: "Austin Office",
      serialNumber: "IP2023078",
      supplier: "Apple Inc.",
      specifications: {
        storage: "256GB",
        color: "Space Black",
        carrier: "Unlocked",
      },
    },
    {
      id: "SUP-001",
      name: "Office Printer Paper",
      category: "Supplies",
      type: "Office Supply",
      status: "In Stock",
      assignee: null,
      purchaseDate: "2024-02-01",
      warrantyExpiry: null,
      condition: "New",
      value: 45,
      location: "Supply Closet",
      serialNumber: null,
      supplier: "Staples",
      specifications: {
        quantity: "10 reams",
        size: "Letter (8.5x11)",
        weight: "20lb",
      },
    },
    {
      id: "LIC-002",
      name: "Microsoft Office 365",
      category: "Software",
      type: "License",
      status: "Expiring Soon",
      assignee: "Team License",
      purchaseDate: "2023-03-01",
      warrantyExpiry: "2024-03-01",
      condition: "Active",
      value: 1200,
      location: "Cloud",
      serialNumber: "MS2023O365",
      supplier: "Microsoft Corporation",
      specifications: {
        licenseType: "Business Premium",
        users: "10",
        features: "Full Office Suite + Teams",
      },
    },
  ];

  const handleAddAsset = (data: any) => {
    console.log("New asset data:", data);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between gap-10 md:flex-row flex-col">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Inventory Management
          </h1>
          <p className="text-gray-600 mt-1">
            Track and manage all your company assets, software licenses, and
            supplies
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Inventory</span>
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <Upload className="h-4 w-4" />
            <span>Import Assets</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add Asset</span>
          </button>
        </div>
      </div>

      {/* Inventory Stats */}
      <InventoryStats assets={assets} />

      {/* Low Stock Alerts */}
      <LowStockAlerts />

      {/* Asset Categories */}
      <AssetCategories assets={assets} />

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search assets..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-2">
          <InventoryFilters />
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Package className="h-4 w-4" />
            <span className="text-sm">Bulk Actions</span>
          </button>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <div className="text-sm text-gray-500">Showing 1 to 6 of 6 assets</div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 bg-yellow-500 text-white rounded text-sm">
            1
          </button>
          <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>
      <AddAssetModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddAsset}
      />
    </div>
  );
}
