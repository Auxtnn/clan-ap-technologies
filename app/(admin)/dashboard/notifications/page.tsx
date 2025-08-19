"use client";

import { useState } from "react";
import {
  Bell,
  CheckCircle,
  AlertTriangle,
  Info,
  Users,
  DollarSign,
  Calendar,
  FileText,
  Clock,
  Filter,
  Search,
  MoreHorizontal,
  Check,
  X,
  Trash2,
  Settings,
  Eye,
  EyeOff,
} from "lucide-react";

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>(
    []
  );

  const notifications = [
    {
      id: "1",
      type: "project",
      icon: CheckCircle,
      iconColor: "text-green-500",
      bgColor: "bg-green-50",
      title: "Project Milestone Completed",
      message:
        "E-commerce Platform QA - Phase 2 testing has been completed successfully",
      time: "2 hours ago",
      read: false,
      priority: "medium",
      actionRequired: false,
      project: "E-commerce Platform QA",
      client: "TechCorp Solutions",
    },
    {
      id: "2",
      type: "team",
      icon: Users,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      title: "New Team Member Added",
      message:
        "Alex Chen has joined the QA team and has been assigned to Website Redesign project",
      time: "4 hours ago",
      read: false,
      priority: "low",
      actionRequired: true,
      project: "Website Redesign",
      assignee: "Alex Chen",
    },
    {
      id: "3",
      type: "invoice",
      icon: DollarSign,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-50",
      title: "Invoice Payment Received",
      message:
        "Payment of $15,000 received from TechCorp Solutions for Invoice #INV-2024-001",
      time: "6 hours ago",
      read: true,
      priority: "medium",
      actionRequired: false,
      amount: 15000,
      client: "TechCorp Solutions",
    },
    {
      id: "4",
      type: "system",
      icon: AlertTriangle,
      iconColor: "text-red-500",
      bgColor: "bg-red-50",
      title: "System Maintenance Scheduled",
      message:
        "Scheduled maintenance window on Sunday, Feb 18 from 2:00 AM to 4:00 AM PST",
      time: "8 hours ago",
      read: false,
      priority: "high",
      actionRequired: true,
      maintenanceDate: "2024-02-18",
    },
    {
      id: "5",
      type: "deadline",
      icon: Calendar,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
      title: "Project Deadline Approaching",
      message:
        "Mobile App QA project deadline is in 3 days. Current progress: 85%",
      time: "12 hours ago",
      read: true,
      priority: "high",
      actionRequired: true,
      project: "Mobile App QA",
      daysLeft: 3,
      progress: 85,
    },
    {
      id: "6",
      type: "document",
      icon: FileText,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
      title: "New Document Uploaded",
      message: "Test Report v2.1 has been uploaded to Security Audit project",
      time: "1 day ago",
      read: true,
      priority: "low",
      actionRequired: false,
      document: "Test Report v2.1",
      project: "Security Audit",
    },
    {
      id: "7",
      type: "approval",
      icon: Clock,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50",
      title: "Approval Required",
      message: "Project proposal for FinanceSecure Ltd requires your approval",
      time: "1 day ago",
      read: false,
      priority: "high",
      actionRequired: true,
      client: "FinanceSecure Ltd",
      proposalValue: 35000,
    },
    {
      id: "8",
      type: "inventory",
      icon: AlertTriangle,
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
      title: "Asset Warranty Expiring",
      message: "3 laptop warranties will expire within the next 30 days",
      time: "2 days ago",
      read: true,
      priority: "medium",
      actionRequired: true,
      assetCount: 3,
      expiryDays: 30,
    },
  ];

  const filterOptions = [
    { id: "all", label: "All", count: notifications.length },
    {
      id: "unread",
      label: "Unread",
      count: notifications.filter((n) => !n.read).length,
    },
    {
      id: "action",
      label: "Action Required",
      count: notifications.filter((n) => n.actionRequired).length,
    },
    {
      id: "project",
      label: "Projects",
      count: notifications.filter((n) => n.type === "project").length,
    },
    {
      id: "team",
      label: "Team",
      count: notifications.filter((n) => n.type === "team").length,
    },
    {
      id: "system",
      label: "System",
      count: notifications.filter((n) => n.type === "system").length,
    },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "unread") return !notification.read;
    if (activeFilter === "action") return notification.actionRequired;
    return notification.type === activeFilter;
  });

  const handleSelectNotification = (id: string) => {
    setSelectedNotifications((prev) =>
      prev.includes(id) ? prev.filter((nId) => nId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedNotifications.length === filteredNotifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(filteredNotifications.map((n) => n.id));
    }
  };

  const getTypeLabel = (type: string) => {
    const typeLabels: { [key: string]: string } = {
      project: "Project",
      team: "Team",
      invoice: "Finance",
      system: "System",
      deadline: "Deadline",
      document: "Document",
      approval: "Approval",
      inventory: "Inventory",
    };
    return typeLabels[type] || type;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-yellow-50 rounded-lg">
            <Bell className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600 mt-1">
              Stay updated with important alerts and updates
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Preferences</span>
          </button>
          {selectedNotifications.length > 0 && (
            <div className="flex items-center space-x-2">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Check className="h-4 w-4" />
                <span>Mark Read</span>
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Trash2 className="h-4 w-4" />
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Bell className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Notifications</p>
              <p className="text-2xl font-bold text-gray-900">
                {notifications.length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <EyeOff className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Unread</p>
              <p className="text-2xl font-bold text-gray-900">
                {notifications.filter((n) => !n.read).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Action Required</p>
              <p className="text-2xl font-bold text-gray-900">
                {notifications.filter((n) => n.actionRequired).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Today</p>
              <p className="text-2xl font-bold text-gray-900">
                {notifications.filter((n) => n.time.includes("hour")).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Filters and Search */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2 overflow-x-auto">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    activeFilter === option.id
                      ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span>{option.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      activeFilter === option.id
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {option.count}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search notifications..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleSelectAll}
                className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={
                    selectedNotifications.length ===
                      filteredNotifications.length &&
                    filteredNotifications.length > 0
                  }
                  onChange={() => {}}
                  className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                />
                <span className="text-sm">Select All</span>
              </button>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="divide-y divide-gray-100">
          {filteredNotifications.length === 0 ? (
            <div className="p-12 text-center">
              <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No notifications found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or check back later.
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-6 hover:bg-gray-50 transition-colors ${
                  !notification.read ? "bg-blue-50/30" : ""
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={selectedNotifications.includes(notification.id)}
                      onChange={() => handleSelectNotification(notification.id)}
                      className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                    />
                    <div className={`p-2 rounded-lg ${notification.bgColor}`}>
                      <notification.icon
                        className={`h-5 w-5 ${notification.iconColor}`}
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3
                            className={`text-sm font-medium ${
                              !notification.read
                                ? "text-gray-900"
                                : "text-gray-700"
                            }`}
                          >
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          )}
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                              notification.priority
                            )}`}
                          >
                            {notification.priority}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                            {getTypeLabel(notification.type)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {notification.message}
                        </p>

                        {/* Additional Details */}
                        {notification.project && (
                          <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                            <span>Project: {notification.project}</span>
                            {notification.client && (
                              <span>Client: {notification.client}</span>
                            )}
                            {notification.progress && (
                              <span>Progress: {notification.progress}%</span>
                            )}
                          </div>
                        )}

                        {notification.amount && (
                          <div className="text-xs text-gray-500 mb-2">
                            Amount: ${notification.amount.toLocaleString()}
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span>{notification.time}</span>
                          </div>

                          {notification.actionRequired && (
                            <div className="flex items-center space-x-2">
                              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs">
                                Take Action
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          {notification.read ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreHorizontal className="h-4 w-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {filteredNotifications.length > 0 && (
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing {filteredNotifications.length} of {notifications.length}{" "}
                notifications
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
          </div>
        )}
      </div>
    </div>
  );
}
