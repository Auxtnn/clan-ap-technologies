"use client";
import { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Users,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Calendar,
  Star,
  Building,
  Eye,
  Edit,
  MoreHorizontal,
} from "lucide-react";

import ClientCard from "@/app/components/Clients/ClientCard";
import ClientStats from "@/app/components/Clients/ClientStats";
import ClientFilters from "@/app/components/Dashboard/ClientFilters";
import AddClientModal from "@/app/components/modals/AddClientModal";

export default function ClientsPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  const clients = [
    {
      id: "1",
      name: "TechCorp Solutions",
      contactPerson: "John Anderson",
      email: "john.anderson@techcorp.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      industry: "Technology",
      status: "Active",
      healthScore: 95,
      totalProjects: 8,
      activeProjects: 3,
      lifetimeValue: 245000,
      lastContact: "2024-02-15",
      joinDate: "2023-01-15",
      satisfaction: 4.8,
      renewalDate: "2024-12-31",
    },
    {
      id: "2",
      name: "StartupXYZ",
      contactPerson: "Sarah Chen",
      email: "sarah@startupxyz.com",
      phone: "+1 (555) 234-5678",
      location: "Austin, TX",
      industry: "Fintech",
      status: "Active",
      healthScore: 88,
      totalProjects: 4,
      activeProjects: 2,
      lifetimeValue: 95000,
      lastContact: "2024-02-14",
      joinDate: "2023-06-20",
      satisfaction: 4.6,
      renewalDate: "2024-06-20",
    },
    {
      id: "3",
      name: "DesignCo Agency",
      contactPerson: "Michael Rodriguez",
      email: "mike@designco.com",
      phone: "+1 (555) 345-6789",
      location: "New York, NY",
      industry: "Design",
      status: "Active",
      healthScore: 76,
      totalProjects: 6,
      activeProjects: 1,
      lifetimeValue: 128000,
      lastContact: "2024-02-10",
      joinDate: "2022-11-08",
      satisfaction: 4.2,
      renewalDate: "2024-11-08",
    },
    {
      id: "4",
      name: "MegaCorp Industries",
      contactPerson: "Lisa Wang",
      email: "lisa.wang@megacorp.com",
      phone: "+1 (555) 456-7890",
      location: "Chicago, IL",
      industry: "Manufacturing",
      status: "At Risk",
      healthScore: 45,
      totalProjects: 12,
      activeProjects: 1,
      lifetimeValue: 420000,
      lastContact: "2024-01-28",
      joinDate: "2022-03-12",
      satisfaction: 3.2,
      renewalDate: "2024-03-12",
    },
    {
      id: "5",
      name: "CloudTech Services",
      contactPerson: "David Kim",
      email: "david@cloudtech.io",
      phone: "+1 (555) 567-8901",
      location: "Seattle, WA",
      industry: "Cloud Services",
      status: "Completed",
      healthScore: 92,
      totalProjects: 3,
      activeProjects: 0,
      lifetimeValue: 67000,
      lastContact: "2024-01-30",
      joinDate: "2023-08-15",
      satisfaction: 4.9,
      renewalDate: null,
    },
    {
      id: "6",
      name: "FinanceSecure Ltd",
      contactPerson: "Emma Thompson",
      email: "emma@financesecure.com",
      phone: "+1 (555) 678-9012",
      location: "Boston, MA",
      industry: "Financial Services",
      status: "Prospect",
      healthScore: 65,
      totalProjects: 0,
      activeProjects: 0,
      lifetimeValue: 0,
      lastContact: "2024-02-12",
      joinDate: "2024-02-01",
      satisfaction: null,
      renewalDate: null,
    },
  ];

  const handleAddClient = (data: any) => {
    console.log("New client data:", data);
    // Here you would typically add the client to your state/database
    // For now, we'll just log it
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between  gap-10 md:flex-row flex-col">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-600 mt-1">
            Manage your client relationships and track business opportunities
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Import Clients
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add Client</span>
          </button>
        </div>
      </div>

      {/* Client Stats */}
      <ClientStats clients={clients} />

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search clients..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-2">
          <ClientFilters />
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm">Analytics View</span>
          </button>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <div className="text-sm text-gray-500">Showing 1 to 6 of 6 clients</div>
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

      {/* Add Client Modal */}
      <AddClientModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddClient}
      />
    </div>
  );
}
