"use client";
import { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Users,
  UserCheck,
  Clock,
  Target,
  Calendar,
  Mail,
  Phone,
  MapPin,
  MoreHorizontal,
} from "lucide-react";

import TeamStats from "@/app/components/Team/TeamStats";
import TeamMemberCard from "@/app/components/Team/TeamMemberCard";
import TeamCapacity from "@/app/components/Team/TeamCapacity";
import TeamFilters from "@/app/components/Team/TeamFilters";
import AddTeamModal from "@/app/components/modals/AddTeamModal";

export default function TeamPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  const teamMembers = [
    {
      id: "1",
      name: "John Doe",
      role: "Senior QA Engineer",
      department: "Quality Assurance",
      email: "john.doe@company.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      status: "Active",
      availability: "Available",
      utilization: 85,
      currentProjects: ["E-commerce Platform", "Mobile App QA"],
      skills: [
        "Manual Testing",
        "Automation",
        "API Testing",
        "Performance Testing",
      ],
      experience: "5 years",
      joinDate: "2021-03-15",
      lastActive: "2024-02-15T10:30:00",
      performance: 92,
      avatar: null,
    },
    {
      id: "2",
      name: "Jane Smith",
      role: "Lead Developer",
      department: "Development",
      email: "jane.smith@company.com",
      phone: "+1 (555) 234-5678",
      location: "Austin, TX",
      status: "Active",
      availability: "Busy",
      utilization: 95,
      currentProjects: ["Enterprise System", "API Development"],
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      experience: "7 years",
      joinDate: "2020-01-10",
      lastActive: "2024-02-15T14:45:00",
      performance: 96,
      avatar: null,
    },
    {
      id: "3",
      name: "Mike Johnson",
      role: "QA Automation Engineer",
      department: "Quality Assurance",
      email: "mike.johnson@company.com",
      phone: "+1 (555) 345-6789",
      location: "New York, NY",
      status: "Active",
      availability: "Available",
      utilization: 78,
      currentProjects: ["Website Redesign"],
      skills: ["Selenium", "Cypress", "Jest", "CI/CD"],
      experience: "4 years",
      joinDate: "2022-06-20",
      lastActive: "2024-02-15T09:15:00",
      performance: 88,
      avatar: null,
    },
    {
      id: "4",
      name: "Sarah Wilson",
      role: "UX/UI Designer",
      department: "Design",
      email: "sarah.wilson@company.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      status: "Active",
      availability: "On Leave",
      utilization: 0,
      currentProjects: [],
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      experience: "6 years",
      joinDate: "2021-09-12",
      lastActive: "2024-02-10T16:00:00",
      performance: 90,
      avatar: null,
    },
    {
      id: "5",
      name: "Tom Brown",
      role: "DevOps Engineer",
      department: "Operations",
      email: "tom.brown@company.com",
      phone: "+1 (555) 567-8901",
      location: "Denver, CO",
      status: "Active",
      availability: "Available",
      utilization: 72,
      currentProjects: ["Cloud Migration", "Security Audit"],
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
      experience: "5 years",
      joinDate: "2021-11-05",
      lastActive: "2024-02-15T11:20:00",
      performance: 87,
      avatar: null,
    },
    {
      id: "6",
      name: "Alex Chen",
      role: "Junior Developer",
      department: "Development",
      email: "alex.chen@company.com",
      phone: "+1 (555) 678-9012",
      location: "Los Angeles, CA",
      status: "Active",
      availability: "Available",
      utilization: 68,
      currentProjects: ["Website Redesign"],
      skills: ["JavaScript", "React", "HTML/CSS", "Git"],
      experience: "2 years",
      joinDate: "2023-04-18",
      lastActive: "2024-02-15T13:30:00",
      performance: 82,
      avatar: null,
    },
  ];

  const handleAddTeamMember = (data: any) => {
    console.log("New team member data:", data);
    // Here you would typically add the team member to your state/database
    // For now, we'll just log it
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between  gap-10 md:flex-row flex-col">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
          <p className="text-gray-600 mt-1">
            Manage your team members, track performance, and optimize resource
            allocation
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Export Team Report
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add Team Member</span>
          </button>
        </div>
      </div>

      {/* Team Stats */}
      <TeamStats teamMembers={teamMembers} />

      {/* Team Capacity Overview */}
      <TeamCapacity teamMembers={teamMembers} />

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search team members..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-2">
          <TeamFilters />
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Schedule View</span>
          </button>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <div className="text-sm text-gray-500">
          Showing 1 to 6 of 6 team members
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
      <AddTeamModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddTeamMember}
      />
    </div>
  );
}
