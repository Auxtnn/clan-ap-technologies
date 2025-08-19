"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Building,
  Calendar,
  DollarSign,
  Star,
  Edit,
  MoreHorizontal,
  User,
  FileText,
  Clock,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  MessageCircle,
  Plus,
  Eye,
  Download,
} from "lucide-react";

export default function ClientDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - replace with actual data from params/API
  const client = {
    id: "1",
    name: "TechCorp Solutions",
    contactPerson: "John Anderson",
    title: "CTO",
    email: "john.anderson@techcorp.com",
    phone: "+1 (555) 123-4567",
    website: "https://techcorp.com",
    location: "San Francisco, CA",
    address: "123 Tech Street, San Francisco, CA 94105",
    industry: "Technology",
    companySize: "201-500 employees",
    status: "Active",
    healthScore: 95,
    totalProjects: 8,
    activeProjects: 3,
    completedProjects: 5,
    lifetimeValue: 245000,
    averageProjectValue: 30625,
    lastContact: "2024-02-15",
    joinDate: "2023-01-15",
    satisfaction: 4.8,
    renewalDate: "2024-12-31",
    paymentTerms: "Net 30",
    preferredContact: "Email",
    timezone: "PST",
    tags: ["Enterprise", "High-Value", "Long-term"],
  };

  const projects = [
    {
      id: "1",
      name: "E-commerce Platform QA",
      status: "In Progress",
      progress: 75,
      startDate: "2024-01-15",
      endDate: "2024-03-15",
      budget: 45000,
      spent: 33750,
      type: "QA Testing",
    },
    {
      id: "2",
      name: "Mobile App Testing",
      status: "Completed",
      progress: 100,
      startDate: "2023-11-01",
      endDate: "2023-12-15",
      budget: 25000,
      spent: 24500,
      type: "QA Testing",
    },
    {
      id: "3",
      name: "Security Audit",
      status: "Planning",
      progress: 10,
      startDate: "2024-03-01",
      endDate: "2024-04-30",
      budget: 35000,
      spent: 3500,
      type: "Security Testing",
    },
  ];

  const communications = [
    {
      id: "1",
      type: "email",
      subject: "Project Update - E-commerce Platform",
      date: "2024-02-15",
      from: "john.anderson@techcorp.com",
      summary: "Discussed milestone completion and next phase requirements",
    },
    {
      id: "2",
      type: "call",
      subject: "Weekly Sync Call",
      date: "2024-02-12",
      duration: "30 mins",
      summary: "Reviewed testing progress and addressed blockers",
    },
    {
      id: "3",
      type: "meeting",
      subject: "Security Audit Kickoff",
      date: "2024-02-10",
      duration: "1 hour",
      summary: "Planned security testing approach and timeline",
    },
  ];

  const documents = [
    {
      id: "1",
      name: "Master Service Agreement",
      type: "Contract",
      date: "2023-01-15",
      size: "2.4 MB",
    },
    {
      id: "2",
      name: "Project Proposal - Security Audit",
      type: "Proposal",
      date: "2024-02-01",
      size: "1.8 MB",
    },
    {
      id: "3",
      name: "Test Report - Mobile App",
      type: "Report",
      date: "2023-12-15",
      size: "5.2 MB",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-50 text-green-700 border-green-200";
      case "At Risk":
        return "bg-red-50 text-red-700 border-red-200";
      case "Prospect":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getHealthColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a
            href="/dashboard/clients"
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </a>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              {client.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {client.name}
              </h1>
              <p className="text-gray-600">
                {client.contactPerson} • {client.title}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
              client.status
            )}`}
          >
            {client.status}
          </span>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>New Project</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MoreHorizontal className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Lifetime Value</p>
              <p className="text-xl font-bold text-gray-900">
                ${client.lifetimeValue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Projects</p>
              <p className="text-xl font-bold text-gray-900">
                {client.totalProjects}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Health Score</p>
              <p
                className={`text-xl font-bold ${getHealthColor(
                  client.healthScore
                )}`}
              >
                {client.healthScore}%
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Star className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Satisfaction</p>
              <p className="text-xl font-bold text-gray-900">
                {client.satisfaction}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: "overview", label: "Overview" },
              { id: "projects", label: "Projects" },
              { id: "communications", label: "Communications" },
              { id: "documents", label: "Documents" },
              { id: "billing", label: "Billing" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-yellow-500 text-yellow-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {client.email}
                        </p>
                        <p className="text-sm text-gray-600">Primary Email</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {client.phone}
                        </p>
                        <p className="text-sm text-gray-600">Direct Line</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {client.address}
                        </p>
                        <p className="text-sm text-gray-600">Headquarters</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {client.industry}
                        </p>
                        <p className="text-sm text-gray-600">
                          {client.companySize}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Account Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Client Since</span>
                      <span className="font-medium">
                        {new Date(client.joinDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Terms</span>
                      <span className="font-medium">{client.paymentTerms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Preferred Contact</span>
                      <span className="font-medium">
                        {client.preferredContact}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timezone</span>
                      <span className="font-medium">{client.timezone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Next Renewal</span>
                      <span className="font-medium">
                        {new Date(client.renewalDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity & Tags */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {client.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Project milestone completed
                        </p>
                        <p className="text-sm text-gray-600">
                          E-commerce Platform QA - 75% complete
                        </p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Email received
                        </p>
                        <p className="text-sm text-gray-600">
                          Project update and next phase requirements
                        </p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Proposal sent
                        </p>
                        <p className="text-sm text-gray-600">
                          Security Audit project proposal
                        </p>
                        <p className="text-xs text-gray-500">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  All Projects
                </h3>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>New Project</span>
                </button>
              </div>
              <div className="grid gap-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">
                        {project.name}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          project.status === "Completed"
                            ? "bg-green-50 text-green-700"
                            : project.status === "In Progress"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-gray-50 text-gray-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Type</p>
                        <p className="font-medium">{project.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Budget</p>
                        <p className="font-medium">
                          ${project.budget.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Progress</p>
                        <p className="font-medium">{project.progress}%</p>
                      </div>
                      <div>
                        <p className="text-gray-600">End Date</p>
                        <p className="font-medium">
                          {new Date(project.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Communications Tab */}
          {activeTab === "communications" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Communication History
                </h3>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>New Message</span>
                </button>
              </div>
              <div className="space-y-4">
                {communications.map((comm) => (
                  <div
                    key={comm.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            comm.type === "email"
                              ? "bg-blue-500"
                              : comm.type === "call"
                              ? "bg-green-500"
                              : "bg-purple-500"
                          }`}
                        ></div>
                        <h4 className="font-medium text-gray-900">
                          {comm.subject}
                        </h4>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(comm.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{comm.summary}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>Type: {comm.type}</span>
                      {comm.from && <span>From: {comm.from}</span>}
                      {comm.duration && <span>Duration: {comm.duration}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Documents
                </h3>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Upload Document</span>
                </button>
              </div>
              <div className="grid gap-4">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-gray-400" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {doc.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {doc.type} • {doc.size} •{" "}
                          {new Date(doc.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Eye className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Download className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === "billing" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Billing Information
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">
                    Financial Summary
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Invoiced</span>
                      <span className="font-medium">
                        ${client.lifetimeValue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Outstanding Balance</span>
                      <span className="font-medium">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Average Project Value
                      </span>
                      <span className="font-medium">
                        ${client.averageProjectValue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Terms</span>
                      <span className="font-medium">{client.paymentTerms}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">
                    Recent Invoices
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">INV-2024-001</p>
                        <p className="text-sm text-gray-600">
                          E-commerce Platform QA
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$15,000</p>
                        <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                          Paid
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">INV-2024-002</p>
                        <p className="text-sm text-gray-600">
                          Security Audit Phase 1
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$8,500</p>
                        <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded">
                          Pending
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
