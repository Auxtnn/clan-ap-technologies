"use client";

import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  FileText,
  Download,
  Calendar,
  Filter,
  Users,
  DollarSign,
  Clock,
  Target,
  PieChart,
  Activity,
  Briefcase,
  CheckCircle,
  AlertCircle,
  Plus,
  Search,
  RefreshCw,
} from "lucide-react";

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateRange, setDateRange] = useState("last-30-days");
  const [selectedMetrics, setSelectedMetrics] = useState([
    "revenue",
    "projects",
    "team",
  ]);

  const reportCategories = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "financial", label: "Financial", icon: DollarSign },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "team", label: "Team Performance", icon: Users },
    { id: "clients", label: "Client Reports", icon: Target },
    { id: "quality", label: "Quality Metrics", icon: CheckCircle },
  ];

  const quickReports = [
    {
      id: "monthly-summary",
      title: "Monthly Business Summary",
      description: "Complete overview of business performance",
      icon: TrendingUp,
      lastGenerated: "2024-02-15",
      frequency: "Monthly",
      status: "Ready",
    },
    {
      id: "project-status",
      title: "Project Status Report",
      description: "Current status of all active projects",
      icon: Briefcase,
      lastGenerated: "2024-02-14",
      frequency: "Weekly",
      status: "Ready",
    },
    {
      id: "financial-overview",
      title: "Financial Overview",
      description: "Revenue, expenses, and profitability analysis",
      icon: DollarSign,
      lastGenerated: "2024-02-13",
      frequency: "Weekly",
      status: "Generating",
    },
    {
      id: "team-performance",
      title: "Team Performance Report",
      description: "Team productivity and utilization metrics",
      icon: Users,
      lastGenerated: "2024-02-12",
      frequency: "Bi-weekly",
      status: "Ready",
    },
    {
      id: "client-satisfaction",
      title: "Client Satisfaction Report",
      description: "Client feedback and satisfaction scores",
      icon: Target,
      lastGenerated: "2024-02-10",
      frequency: "Monthly",
      status: "Ready",
    },
    {
      id: "quality-metrics",
      title: "Quality Metrics Report",
      description: "QA performance and test coverage statistics",
      icon: CheckCircle,
      lastGenerated: "2024-02-09",
      frequency: "Weekly",
      status: "Ready",
    },
  ];

  const customReports = [
    {
      id: "custom-1",
      title: "Q1 2024 Performance Analysis",
      description: "Custom analysis for Q1 performance review",
      createdBy: "Admin User",
      createdDate: "2024-02-01",
      lastRun: "2024-02-15",
      schedule: "Manual",
    },
    {
      id: "custom-2",
      title: "Client Profitability Analysis",
      description: "Detailed profitability breakdown by client",
      createdBy: "Finance Manager",
      createdDate: "2024-01-15",
      lastRun: "2024-02-10",
      schedule: "Monthly",
    },
  ];

  const kpiMetrics = {
    revenue: {
      current: 125000,
      previous: 110000,
      change: 13.6,
      trend: "up",
    },
    projects: {
      current: 8,
      previous: 6,
      change: 33.3,
      trend: "up",
    },
    teamUtilization: {
      current: 87,
      previous: 82,
      change: 6.1,
      trend: "up",
    },
    clientSatisfaction: {
      current: 4.8,
      previous: 4.6,
      change: 4.3,
      trend: "up",
    },
  };

  const chartData = {
    revenue: [
      { month: "Sep", value: 85000 },
      { month: "Oct", value: 92000 },
      { month: "Nov", value: 98000 },
      { month: "Dec", value: 110000 },
      { month: "Jan", value: 118000 },
      { month: "Feb", value: 125000 },
    ],
    projects: [
      { status: "Completed", count: 12, color: "bg-green-500" },
      { status: "In Progress", count: 8, color: "bg-blue-500" },
      { status: "Planning", count: 3, color: "bg-yellow-500" },
      { status: "On Hold", count: 2, color: "bg-gray-500" },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready":
        return "bg-green-50 text-green-700 border-green-200";
      case "Generating":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Error":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600";
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between  gap-10 md:flex-row flex-col">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-yellow-50 rounded-lg">
            <BarChart3 className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Reports & Analytics
            </h1>
            <p className="text-gray-600 mt-1">
              Generate insights and track business performance
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="last-7-days">Last 7 days</option>
            <option value="last-30-days">Last 30 days</option>
            <option value="last-90-days">Last 90 days</option>
            <option value="this-year">This year</option>
            <option value="custom">Custom range</option>
          </select>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Create Report</span>
          </button>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(kpiMetrics.revenue.current)}
              </p>
              <div className="flex items-center space-x-1 mt-1">
                <TrendingUp
                  className={`h-4 w-4 ${getTrendColor(
                    kpiMetrics.revenue.trend
                  )}`}
                />
                <span
                  className={`text-sm ${getTrendColor(
                    kpiMetrics.revenue.trend
                  )}`}
                >
                  +{kpiMetrics.revenue.change}%
                </span>
              </div>
            </div>
            <div className="p-2 bg-green-50 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900">
                {kpiMetrics.projects.current}
              </p>
              <div className="flex items-center space-x-1 mt-1">
                <TrendingUp
                  className={`h-4 w-4 ${getTrendColor(
                    kpiMetrics.projects.trend
                  )}`}
                />
                <span
                  className={`text-sm ${getTrendColor(
                    kpiMetrics.projects.trend
                  )}`}
                >
                  +{kpiMetrics.projects.change}%
                </span>
              </div>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Team Utilization</p>
              <p className="text-2xl font-bold text-gray-900">
                {kpiMetrics.teamUtilization.current}%
              </p>
              <div className="flex items-center space-x-1 mt-1">
                <TrendingUp
                  className={`h-4 w-4 ${getTrendColor(
                    kpiMetrics.teamUtilization.trend
                  )}`}
                />
                <span
                  className={`text-sm ${getTrendColor(
                    kpiMetrics.teamUtilization.trend
                  )}`}
                >
                  +{kpiMetrics.teamUtilization.change}%
                </span>
              </div>
            </div>
            <div className="p-2 bg-yellow-50 rounded-lg">
              <Users className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
              <p className="text-2xl font-bold text-gray-900">
                {kpiMetrics.clientSatisfaction.current}
              </p>
              <div className="flex items-center space-x-1 mt-1">
                <TrendingUp
                  className={`h-4 w-4 ${getTrendColor(
                    kpiMetrics.clientSatisfaction.trend
                  )}`}
                />
                <span
                  className={`text-sm ${getTrendColor(
                    kpiMetrics.clientSatisfaction.trend
                  )}`}
                >
                  +{kpiMetrics.clientSatisfaction.change}%
                </span>
              </div>
            </div>
            <div className="p-2 bg-purple-50 rounded-lg">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Revenue Trend
            </h3>
            <button className="text-gray-400 hover:text-gray-600">
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
          <div className="h-64">
            <div className="flex items-end space-x-2 h-48">
              {chartData.revenue.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="bg-yellow-500 rounded-t w-full"
                    style={{ height: `${(data.value / 130000) * 100}%` }}
                  ></div>
                  <span className="text-xs text-gray-600 mt-2">
                    {data.month}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatCurrency(data.value / 1000)}K
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Status Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Project Status
            </h3>
            <button className="text-gray-400 hover:text-gray-600">
              <PieChart className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-4">
            {chartData.projects.map((project, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full ${project.color}`}
                  ></div>
                  <span className="text-sm text-gray-700">
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">
                    {project.count}
                  </span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${project.color}`}
                      style={{ width: `${(project.count / 25) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {reportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === category.id
                    ? "border-yellow-500 text-yellow-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Quick Reports */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Reports
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quickReports.map((report) => (
                    <div
                      key={report.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-yellow-50 rounded-lg">
                            <report.icon className="h-5 w-5 text-yellow-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {report.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {report.description}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                            report.status
                          )}`}
                        >
                          {report.status}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex justify-between">
                          <span>Frequency:</span>
                          <span>{report.frequency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last Generated:</span>
                          <span>
                            {new Date(
                              report.lastGenerated
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${
                            report.status === "Ready"
                              ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                              : "bg-gray-100 text-gray-400 cursor-not-allowed"
                          }`}
                          disabled={report.status !== "Ready"}
                        >
                          {report.status === "Generating"
                            ? "Generating..."
                            : "Generate"}
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Download className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Custom Reports
                </h3>
                <div className="space-y-4">
                  {customReports.map((report) => (
                    <div
                      key={report.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {report.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {report.description}
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span>Created by {report.createdBy}</span>
                            <span>•</span>
                            <span>
                              Last run:{" "}
                              {new Date(report.lastRun).toLocaleDateString()}
                            </span>
                            <span>•</span>
                            <span>Schedule: {report.schedule}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm">
                            Edit
                          </button>
                          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg text-sm">
                            Run Report
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Download className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Financial Reports */}
          {activeTab === "financial" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">
                    Revenue Analysis
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Revenue</span>
                      <span className="font-medium">
                        ${kpiMetrics.revenue.current.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Growth</span>
                      <span className="font-medium text-green-600">
                        +{kpiMetrics.revenue.change}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recurring Revenue</span>
                      <span className="font-medium">$85,000</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">
                    Generate Detailed Report
                  </button>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">
                    Expense Breakdown
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Salaries</span>
                      <span className="font-medium">$65,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tools & Software</span>
                      <span className="font-medium">$8,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Office & Utilities</span>
                      <span className="font-medium">$4,200</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">
                    View Expense Report
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Project Reports */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    5
                  </div>
                  <h4 className="font-medium text-gray-900">
                    Completed Projects
                  </h4>
                  <p className="text-sm text-gray-600">This quarter</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    8
                  </div>
                  <h4 className="font-medium text-gray-900">Active Projects</h4>
                  <p className="text-sm text-gray-600">Currently running</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <h4 className="font-medium text-gray-900">
                    Upcoming Projects
                  </h4>
                  <p className="text-sm text-gray-600">Starting soon</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-4">
                  Project Performance Metrics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">
                      On-Time Delivery Rate
                    </h5>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full"
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      94% (15/16 projects)
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">
                      Budget Adherence
                    </h5>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-yellow-500 h-3 rounded-full"
                        style={{ width: "87%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      87% within budget
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Performance */}
          {activeTab === "team" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900">6</h4>
                  <p className="text-sm text-gray-600">Team Members</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900">87%</h4>
                  <p className="text-sm text-gray-600">Avg Utilization</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900">92%</h4>
                  <p className="text-sm text-gray-600">Performance Score</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <Activity className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900">1,280</h4>
                  <p className="text-sm text-gray-600">Hours This Month</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-4">
                  Team Productivity Trends
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Individual and team performance metrics over time
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                  Generate Team Report
                </button>
              </div>
            </div>
          )}

          {/* Client Reports */}
          {activeTab === "clients" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">
                    Client Satisfaction
                  </h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl font-bold text-gray-900">
                      4.8
                    </span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on 24 client reviews
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">
                    Client Retention
                  </h4>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    96%
                  </div>
                  <p className="text-sm text-gray-600">
                    12-month retention rate
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-4">
                  Top Clients by Revenue
                </h4>
                <div className="space-y-3">
                  {[
                    { name: "TechCorp Solutions", revenue: 45000, projects: 3 },
                    {
                      name: "MegaCorp Industries",
                      revenue: 38000,
                      projects: 2,
                    },
                    { name: "DesignCo Agency", revenue: 28000, projects: 2 },
                  ].map((client, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {client.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {client.projects} projects
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          ${client.revenue.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600">Revenue</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quality Metrics */}
          {activeTab === "quality" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900">94.2%</h4>
                  <p className="text-sm text-gray-600">Test Pass Rate</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900">2.1</h4>
                  <p className="text-sm text-gray-600">Defect Density</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900">87%</h4>
                  <p className="text-sm text-gray-600">Code Coverage</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-4">
                  Quality Trends
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Track quality metrics across all projects
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                    Generate Quality Report
                  </button>
                  <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg">
                    Export Test Metrics
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
