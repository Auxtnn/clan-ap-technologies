"use client";
import { useState } from "react";

import {
  Search,
  Filter,
  Plus,
  Calendar,
  DollarSign,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Pause,
  Eye,
  Edit,
  MoreHorizontal,
} from "lucide-react";

import ProjectCard from "@/app/components/Projects/ProjectCard";
import ProjectStats from "@/app/components/Dashboard/ProjectStats";
import ProjectFilters from "@/app/components/Dashboard/ProjectFilters";
import AddProjectModal from "@/app/components/modals/AddProjectModal";

export default function ProjectsPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const projects = [
    {
      id: "1",
      name: "E-commerce Platform Development",
      client: "TechCorp Solutions",
      status: "In Progress",
      progress: 75,
      startDate: "2024-01-15",
      endDate: "2024-03-15",
      budget: 45000,
      spent: 33750,
      team: ["John Doe", "Jane Smith", "Mike Johnson"],
      priority: "High",
      health: "Good",
    },
    {
      id: "2",
      name: "Mobile App QA Testing",
      client: "StartupXYZ",
      status: "Testing",
      progress: 90,
      startDate: "2024-02-01",
      endDate: "2024-02-28",
      budget: 15000,
      spent: 13500,
      team: ["Sarah Wilson", "Tom Brown"],
      priority: "Medium",
      health: "Excellent",
    },
    {
      id: "3",
      name: "Website Redesign & QA",
      client: "DesignCo Agency",
      status: "Planning",
      progress: 25,
      startDate: "2024-02-15",
      endDate: "2024-04-30",
      budget: 28000,
      spent: 7000,
      team: ["Alex Chen", "Lisa Park"],
      priority: "Low",
      health: "Good",
    },
    {
      id: "4",
      name: "Enterprise System Testing",
      client: "MegaCorp Industries",
      status: "Overdue",
      progress: 60,
      startDate: "2023-12-01",
      endDate: "2024-01-31",
      budget: 75000,
      spent: 68000,
      team: ["David Kim", "Emma Davis", "Chris Taylor", "Anna Lee"],
      priority: "Critical",
      health: "At Risk",
    },
    {
      id: "5",
      name: "API Testing & Documentation",
      client: "CloudTech Services",
      status: "Completed",
      progress: 100,
      startDate: "2024-01-01",
      endDate: "2024-01-30",
      budget: 12000,
      spent: 11500,
      team: ["Ryan Murphy", "Grace Liu"],
      priority: "Medium",
      health: "Excellent",
    },
    {
      id: "6",
      name: "Security Audit & Testing",
      client: "FinanceSecure Ltd",
      status: "On Hold",
      progress: 40,
      startDate: "2024-01-20",
      endDate: "2024-03-20",
      budget: 35000,
      spent: 14000,
      team: ["Kevin Zhang", "Maria Rodriguez"],
      priority: "High",
      health: "Warning",
    },
  ];

  const handleAddProject = (data: any) => {
    console.log("New project data:", data);
    // Here you would typically add the team member to your state/database
    // For now, we'll just log it
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between  gap-10 md:flex-row flex-col">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">
            Manage and track all your projects in one place
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>New Project</span>
        </button>
      </div>

      {/* Project Stats */}
      <ProjectStats projects={projects} />

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-2">
          <ProjectFilters />
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Timeline View</span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <div className="text-sm text-gray-500">
          Showing 1 to 6 of 6 projects
        </div>
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
      {/* Add Team Member Modal */}
      <AddProjectModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddProject}
      />
    </div>
  );
}
