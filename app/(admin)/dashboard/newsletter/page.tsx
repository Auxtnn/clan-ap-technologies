// app/communications/newsletter/page.tsx
"use client";

import { useState } from "react";
import {
  Mail,
  Plus,
  Send,
  Users,
  BarChart3,
  Eye,
  Edit,
  Copy,
  Calendar,
  Filter,
  Search,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Pause,
  Play,
} from "lucide-react";

interface Newsletter {
  id: string;
  title: string;
  subject: string;
  status: "draft" | "scheduled" | "sent" | "sending";
  recipients: number;
  opens: number;
  clicks: number;
  createdAt: string;
  sentAt?: string;
  scheduledAt?: string;
  template: string;
  content: string;
  tags: string[];
}

interface Subscriber {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  status: "active" | "unsubscribed" | "bounced";
  subscribedAt: string;
  tags: string[];
  source: string;
}

export default function NewsletterPage() {
  const [activeTab, setActiveTab] = useState<
    "campaigns" | "subscribers" | "templates" | "analytics"
  >("campaigns");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const newsletters: Newsletter[] = [
    {
      id: "1",
      title: "Monthly QA Insights - February 2024",
      subject: "Latest QA Trends and Best Practices",
      status: "sent",
      recipients: 1250,
      opens: 892,
      clicks: 234,
      createdAt: "2024-02-01",
      sentAt: "2024-02-05",
      template: "monthly-insights",
      content: "Monthly newsletter content...",
      tags: ["monthly", "insights", "qa"],
    },
    {
      id: "2",
      title: "New Service Launch - Mobile QA",
      subject: "Introducing Our New Mobile QA Services",
      status: "scheduled",
      recipients: 1250,
      opens: 0,
      clicks: 0,
      createdAt: "2024-02-10",
      scheduledAt: "2024-02-20T10:00:00",
      template: "service-announcement",
      content: "Service launch content...",
      tags: ["announcement", "mobile", "services"],
    },
    {
      id: "3",
      title: "Client Success Story - TechCorp",
      subject: "How We Helped TechCorp Achieve 99.9% Bug-Free Releases",
      status: "draft",
      recipients: 0,
      opens: 0,
      clicks: 0,
      createdAt: "2024-02-15",
      template: "case-study",
      content: "Case study content...",
      tags: ["case-study", "success"],
    },
  ];

  const subscribers: Subscriber[] = [
    {
      id: "1",
      email: "john@techcorp.com",
      firstName: "John",
      lastName: "Anderson",
      status: "active",
      subscribedAt: "2023-08-15",
      tags: ["client", "enterprise"],
      source: "website",
    },
    {
      id: "2",
      email: "sarah@startupxyz.com",
      firstName: "Sarah",
      lastName: "Chen",
      status: "active",
      subscribedAt: "2023-12-10",
      tags: ["client", "startup"],
      source: "referral",
    },
    {
      id: "3",
      email: "mike@designco.com",
      firstName: "Mike",
      lastName: "Rodriguez",
      status: "unsubscribed",
      subscribedAt: "2023-06-20",
      tags: ["client", "design"],
      source: "website",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-green-50 text-green-700 border-green-200";
      case "scheduled":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "sending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "draft":
        return "bg-gray-50 text-gray-700 border-gray-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <CheckCircle className="h-4 w-4" />;
      case "scheduled":
        return <Clock className="h-4 w-4" />;
      case "sending":
        return <Play className="h-4 w-4" />;
      case "draft":
        return <Edit className="h-4 w-4" />;
      default:
        return <Edit className="h-4 w-4" />;
    }
  };

  const calculateOpenRate = (opens: number, recipients: number) => {
    return recipients > 0 ? ((opens / recipients) * 100).toFixed(1) : "0";
  };

  const calculateClickRate = (clicks: number, recipients: number) => {
    return recipients > 0 ? ((clicks / recipients) * 100).toFixed(1) : "0";
  };

  const CampaignsTab = () => (
    <div className="space-y-6">
      {/* Campaigns Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Campaigns
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {newsletters.length}
              </p>
            </div>
            <Mail className="h-8 w-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Open Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {newsletters.filter((n) => n.status === "sent").length > 0
                  ? (
                      newsletters
                        .filter((n) => n.status === "sent")
                        .reduce(
                          (acc, n) =>
                            acc +
                            parseFloat(
                              calculateOpenRate(n.opens, n.recipients)
                            ),
                          0
                        ) /
                      newsletters.filter((n) => n.status === "sent").length
                    ).toFixed(1)
                  : "0"}
                %
              </p>
            </div>
            <Eye className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Subscribers
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {subscribers.filter((s) => s.status === "active").length}
              </p>
            </div>
            <Users className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
              <p className="text-xs text-green-600 mt-1">
                +100% from last month
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Campaigns List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Newsletter Campaigns
          </h3>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>New Campaign</span>
          </button>
        </div>

        <div className="space-y-4">
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {newsletter.title}
                    </h4>
                    <span
                      className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        newsletter.status
                      )}`}
                    >
                      {getStatusIcon(newsletter.status)}
                      <span>
                        {newsletter.status.charAt(0).toUpperCase() +
                          newsletter.status.slice(1)}
                      </span>
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">
                    {newsletter.subject}
                  </p>

                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>
                        {newsletter.recipients.toLocaleString()} recipients
                      </span>
                    </span>

                    {newsletter.status === "sent" && (
                      <>
                        <span className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>
                            {calculateOpenRate(
                              newsletter.opens,
                              newsletter.recipients
                            )}
                            % opens
                          </span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <BarChart3 className="h-4 w-4" />
                          <span>
                            {calculateClickRate(
                              newsletter.clicks,
                              newsletter.recipients
                            )}
                            % clicks
                          </span>
                        </span>
                      </>
                    )}

                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {newsletter.sentAt
                          ? `Sent ${new Date(
                              newsletter.sentAt
                            ).toLocaleDateString()}`
                          : newsletter.scheduledAt
                          ? `Scheduled ${new Date(
                              newsletter.scheduledAt
                            ).toLocaleDateString()}`
                          : `Created ${new Date(
                              newsletter.createdAt
                            ).toLocaleDateString()}`}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mt-3">
                    {newsletter.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Copy className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                  {newsletter.status === "draft" && (
                    <button className="p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors">
                      <Send className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SubscribersTab = () => (
    <div className="space-y-6">
      {/* Subscriber Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Active Subscribers
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {subscribers.filter((s) => s.status === "active").length}
              </p>
              <p className="text-xs text-green-600 mt-1">+12% this month</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unsubscribed</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {subscribers.filter((s) => s.status === "unsubscribed").length}
              </p>
              <p className="text-xs text-red-600 mt-1">2.3% rate</p>
            </div>
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Growth Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">8.5%</p>
              <p className="text-xs text-green-600 mt-1">Monthly average</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Subscribers List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Subscriber Management
          </h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search subscribers..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Subscriber</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Subscriber
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Tags
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Source
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Subscribed
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber) => (
                <tr
                  key={subscriber.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {subscriber.firstName} {subscriber.lastName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {subscriber.email}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                        subscriber.status === "active"
                          ? "bg-green-50 text-green-700"
                          : subscriber.status === "unsubscribed"
                          ? "bg-red-50 text-red-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {subscriber.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {subscriber.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-600 capitalize">
                      {subscriber.source}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-600">
                      {new Date(subscriber.subscribedAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Newsletter Management
          </h1>
          <p className="text-gray-600 mt-1">
            Create, manage, and analyze your email campaigns
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: "campaigns", label: "Campaigns", icon: Mail },
            { id: "subscribers", label: "Subscribers", icon: Users },
            { id: "templates", label: "Templates", icon: Edit },
            { id: "analytics", label: "Analytics", icon: BarChart3 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-yellow-500 text-yellow-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "campaigns" && <CampaignsTab />}
      {activeTab === "subscribers" && <SubscribersTab />}
      {activeTab === "templates" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <Edit className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Email Templates
          </h3>
          <p className="text-gray-600 mb-6">
            Create and manage reusable email templates
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
            Create Template
          </button>
        </div>
      )}
      {activeTab === "analytics" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Newsletter Analytics
          </h3>
          <p className="text-gray-600 mb-6">
            Detailed performance metrics and insights
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
            View Analytics
          </button>
        </div>
      )}

      {/* Create Newsletter Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Create New Newsletter
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter campaign title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter email subject line"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Template
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option value="">Select a template</option>
                  <option value="monthly-insights">Monthly Insights</option>
                  <option value="service-announcement">
                    Service Announcement
                  </option>
                  <option value="case-study">Case Study</option>
                  <option value="custom">Custom</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your newsletter content..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Send Option
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <option value="now">Send Now</option>
                    <option value="schedule">Schedule</option>
                    <option value="draft">Save as Draft</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recipients
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <option value="all">All Subscribers</option>
                    <option value="clients">Clients Only</option>
                    <option value="prospects">Prospects Only</option>
                    <option value="custom">Custom List</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Create Campaign
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
