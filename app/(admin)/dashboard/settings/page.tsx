"use client";

import { useState } from "react";
import {
  Building,
  User,
  Shield,
  Bell,
  Palette,
  Database,
  Users,
  Settings as SettingsIcon,
  Save,
  Eye,
  EyeOff,
  Upload,
  Download,
  Trash2,
  Plus,
  Edit,
  Check,
  X,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("company");
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    projectUpdates: true,
    teamNotifications: true,
    systemAlerts: true,
    weeklyReports: false,
  });

  const tabs = [
    { id: "company", label: "Company Profile", icon: Building },
    { id: "account", label: "Account Settings", icon: User },
    { id: "users", label: "User Management", icon: Users },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "integrations", label: "Integrations", icon: SettingsIcon },
    { id: "backup", label: "Backup & Data", icon: Database },
  ];

  const companyData = {
    name: "Clan AP Technologies",
    industry: "Technology",
    size: "11-50 employees",
    website: "https://clanap.com",
    phone: "+1 (555) 123-4567",
    email: "info@clanap.com",
    address: "123 Tech Street, San Francisco, CA 94105",
    country: "United States",
    timezone: "Pacific Standard Time (PST)",
    currency: "USD",
    fiscalYear: "January - December",
    logo: null,
  };

  const userRoles = [
    { id: "1", name: "Admin", permissions: ["All permissions"], users: 1 },
    {
      id: "2",
      name: "Project Manager",
      permissions: ["Projects", "Team", "Clients"],
      users: 2,
    },
    {
      id: "3",
      name: "QA Engineer",
      permissions: ["Projects", "Test Cases"],
      users: 4,
    },
    { id: "4", name: "Viewer", permissions: ["Read only"], users: 3 },
  ];

  const integrations = [
    {
      name: "Slack",
      description: "Team communication and notifications",
      status: "Connected",
      icon: "💬",
    },
    {
      name: "Google Calendar",
      description: "Calendar sync and meeting scheduling",
      status: "Connected",
      icon: "📅",
    },
    {
      name: "JIRA",
      description: "Issue tracking and project management",
      status: "Disconnected",
      icon: "🔧",
    },
    {
      name: "GitHub",
      description: "Code repository integration",
      status: "Disconnected",
      icon: "🐙",
    },
  ];

  const handleNotificationChange = (key: string) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">
          Manage your account, company, and system preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:w-64">
          <nav className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Company Profile Tab */}
            {activeTab === "company" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6  gap-10 md:flex-row flex-col">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Company Profile
                    </h2>
                    <p className="text-sm text-gray-600">
                      Update your company information and branding
                    </p>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Save Changes</span>
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        defaultValue={companyData.name}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        <option value="Technology">Technology</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Finance">Finance</option>
                        <option value="Education">Education</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Size
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        defaultValue={companyData.website}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        defaultValue={companyData.phone}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        defaultValue={companyData.email}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      defaultValue={companyData.address}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        <option value="PST">Pacific Standard Time (PST)</option>
                        <option value="EST">Eastern Standard Time (EST)</option>
                        <option value="CST">Central Standard Time (CST)</option>
                        <option value="MST">
                          Mountain Standard Time (MST)
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Currency
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        <option value="USD">USD - US Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="GBP">GBP - British Pound</option>
                        <option value="CAD">CAD - Canadian Dollar</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Logo
                    </label>
                    <div className="border border-gray-200 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-600 mb-2">
                        Upload your company logo
                      </p>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm">
                        Choose File
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Account Settings Tab */}
            {activeTab === "account" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Account Settings
                    </h2>
                    <p className="text-sm text-gray-600">
                      Manage your personal account preferences
                    </p>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Save Changes</span>
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        defaultValue="Admin"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        defaultValue="User"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        defaultValue="admin@clanap.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        defaultValue="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Change Password
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Preferences
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Email Notifications
                          </p>
                          <p className="text-sm text-gray-600">
                            Receive email updates about your projects
                          </p>
                        </div>
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.email
                              ? "bg-yellow-500"
                              : "bg-gray-200"
                          }`}
                          onClick={() => handleNotificationChange("email")}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.email
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* User Management Tab */}
            {activeTab === "users" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      User Management
                    </h2>
                    <p className="text-sm text-gray-600">
                      Manage user roles and permissions
                    </p>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Add User</span>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      User Roles
                    </h3>
                    <div className="grid gap-4">
                      {userRoles.map((role) => (
                        <div
                          key={role.id}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {role.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {role.permissions.join(", ")}
                              </p>
                              <p className="text-xs text-gray-500">
                                {role.users} users assigned
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Edit className="h-4 w-4 text-gray-600" />
                              </button>
                              <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Trash2 className="h-4 w-4 text-red-600" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Invite New User
                    </h3>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                          type="email"
                          placeholder="Email address"
                          className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                          <option value="">Select Role</option>
                          {userRoles.map((role) => (
                            <option key={role.id} value={role.id}>
                              {role.name}
                            </option>
                          ))}
                        </select>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                          Send Invite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Security Settings
                    </h2>
                    <p className="text-sm text-gray-600">
                      Manage security and access control
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Two-Factor Authentication
                    </h3>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Enable 2FA
                          </p>
                          <p className="text-sm text-gray-600">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                          Setup 2FA
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Password Policy
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Minimum Password Length
                          </p>
                          <p className="text-sm text-gray-600">
                            Require passwords to be at least 8 characters
                          </p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-yellow-500">
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Require Special Characters
                          </p>
                          <p className="text-sm text-gray-600">
                            Passwords must contain special characters
                          </p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Password Expiration
                          </p>
                          <p className="text-sm text-gray-600">
                            Force password change every 90 days
                          </p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Session Management
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Auto Logout
                          </p>
                          <p className="text-sm text-gray-600">
                            Automatically logout after 30 minutes of inactivity
                          </p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-yellow-500">
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Notification Preferences
                    </h2>
                    <p className="text-sm text-gray-600">
                      Choose how you want to be notified
                    </p>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Save Preferences</span>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Notification Channels
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Email Notifications
                          </p>
                          <p className="text-sm text-gray-600">
                            Receive notifications via email
                          </p>
                        </div>
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.email
                              ? "bg-yellow-500"
                              : "bg-gray-200"
                          }`}
                          onClick={() => handleNotificationChange("email")}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.email
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Push Notifications
                          </p>
                          <p className="text-sm text-gray-600">
                            Receive browser push notifications
                          </p>
                        </div>
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.push ? "bg-yellow-500" : "bg-gray-200"
                          }`}
                          onClick={() => handleNotificationChange("push")}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.push
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            SMS Notifications
                          </p>
                          <p className="text-sm text-gray-600">
                            Receive critical alerts via SMS
                          </p>
                        </div>
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.sms ? "bg-yellow-500" : "bg-gray-200"
                          }`}
                          onClick={() => handleNotificationChange("sms")}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.sms
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Notification Types
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Project Updates
                          </p>
                          <p className="text-sm text-gray-600">
                            Notifications about project progress and milestones
                          </p>
                        </div>
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.projectUpdates
                              ? "bg-yellow-500"
                              : "bg-gray-200"
                          }`}
                          onClick={() =>
                            handleNotificationChange("projectUpdates")
                          }
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.projectUpdates
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Team Notifications
                          </p>
                          <p className="text-sm text-gray-600">
                            Updates about team members and assignments
                          </p>
                        </div>
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.teamNotifications
                              ? "bg-yellow-500"
                              : "bg-gray-200"
                          }`}
                          onClick={() =>
                            handleNotificationChange("teamNotifications")
                          }
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.teamNotifications
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            System Alerts
                          </p>
                          <p className="text-sm text-gray-600">
                            Important system notifications and maintenance
                          </p>
                        </div>
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.systemAlerts
                              ? "bg-yellow-500"
                              : "bg-gray-200"
                          }`}
                          onClick={() =>
                            handleNotificationChange("systemAlerts")
                          }
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.systemAlerts
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Weekly Reports
                          </p>
                          <p className="text-sm text-gray-600">
                            Weekly summary of activities and progress
                          </p>
                        </div>
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.weeklyReports
                              ? "bg-yellow-500"
                              : "bg-gray-200"
                          }`}
                          onClick={() =>
                            handleNotificationChange("weeklyReports")
                          }
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.weeklyReports
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Tab */}
            {activeTab === "appearance" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Appearance
                    </h2>
                    <p className="text-sm text-gray-600">
                      Customize the look and feel of your dashboard
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Theme
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border border-yellow-500 rounded-lg p-4 bg-yellow-50">
                        <div className="w-full h-16 bg-yellow-500 rounded mb-3"></div>
                        <p className="text-sm font-medium text-center">
                          Yellow (Current)
                        </p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer">
                        <div className="w-full h-16 bg-blue-500 rounded mb-3"></div>
                        <p className="text-sm font-medium text-center">Blue</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 hover:border-green-500 cursor-pointer">
                        <div className="w-full h-16 bg-green-500 rounded mb-3"></div>
                        <p className="text-sm font-medium text-center">Green</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Display Options
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Dark Mode</p>
                          <p className="text-sm text-gray-600">
                            Switch to dark theme
                          </p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            Compact View
                          </p>
                          <p className="text-sm text-gray-600">
                            Show more content in less space
                          </p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Integrations Tab */}
            {activeTab === "integrations" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Integrations
                    </h2>
                    <p className="text-sm text-gray-600">
                      Connect with third-party services
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {integrations.map((integration, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">{integration.icon}</div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {integration.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {integration.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              integration.status === "Connected"
                                ? "bg-green-50 text-green-700"
                                : "bg-gray-50 text-gray-700"
                            }`}
                          >
                            {integration.status}
                          </span>
                          <button
                            className={`px-4 py-2 rounded-lg text-sm font-medium ${
                              integration.status === "Connected"
                                ? "bg-red-500 hover:bg-red-600 text-white"
                                : "bg-yellow-500 hover:bg-yellow-600 text-white"
                            }`}
                          >
                            {integration.status === "Connected"
                              ? "Disconnect"
                              : "Connect"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Backup & Data Tab */}
            {activeTab === "backup" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Backup & Data
                    </h2>
                    <p className="text-sm text-gray-600">
                      Manage your data backups and exports
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Data Export
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Export All Data
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Download a complete backup of all your data
                        </p>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Export Data</span>
                        </button>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Import Data
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Import data from a backup file
                        </p>
                        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                          <Upload className="h-4 w-4" />
                          <span>Import Data</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Automatic Backups
                    </h3>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-medium text-gray-900">
                            Enable Automatic Backups
                          </p>
                          <p className="text-sm text-gray-600">
                            Automatically backup your data daily
                          </p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-yellow-500">
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                        </button>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>Last backup: February 15, 2024 at 3:00 AM</p>
                        <p>Next backup: February 16, 2024 at 3:00 AM</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Data Retention
                    </h3>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Backup Retention Period
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                            <option value="30">30 days</option>
                            <option value="60">60 days</option>
                            <option value="90">90 days</option>
                            <option value="365">1 year</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Data Deletion Policy
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                            <option value="soft">
                              Soft Delete (30 days recovery)
                            </option>
                            <option value="hard">
                              Hard Delete (Immediate)
                            </option>
                          </select>
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
    </div>
  );
}
