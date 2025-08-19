"use client";
import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Users,
  FolderOpen,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  Calendar,
  Bell,
  Mail,
  Plus,
  ArrowRight,
  MessageSquare,
  Globe,
  BarChart3,
  FileText,
  Package,
} from "lucide-react";

import StatsCard from "@/app/components/Dashboard/StatsCard";
import RevenueChart from "@/app/components/Dashboard/RevenueChart";
import ProjectsOverview from "@/app/components/Dashboard/ProjectsOverview";
import RecentActivity from "../../components/Dashboard/RecentActivity";
import TeamAvailability from "../../components/Dashboard/TeamAvailability";
import AlertsPanel from "../../components/Dashboard/AlertsPanel";

export default function DashboardPage() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  // Sample data
  const todayEvents = [
    {
      id: 1,
      title: "Project Kickoff - TechCorp",
      time: "10:00 AM",
      type: "meeting",
    },
    { id: 2, title: "QA Review Session", time: "2:00 PM", type: "review" },
    {
      id: 3,
      title: "Client Presentation",
      time: "4:00 PM",
      type: "presentation",
    },
  ];

  const recentEmails = [
    {
      id: 1,
      from: "john@techcorp.com",
      subject: "Project Update Required",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      from: "sarah@startupxyz.com",
      subject: "Meeting Confirmation",
      time: "5 hours ago",
      unread: false,
    },
    {
      id: 3,
      from: "mike@designco.com",
      subject: "Invoice Payment",
      time: "1 day ago",
      unread: false,
    },
  ];

  const newsletterStats = {
    subscribers: 1250,
    openRate: 68.5,
    lastCampaign: "Monthly QA Insights",
    performance: "+12.3%",
  };

  const businessGoals = [
    {
      title: "Annual Revenue Goal",
      current: 650000,
      target: 1000000,
      unit: "$",
    },
    { title: "Team Growth", current: 12, target: 20, unit: "people" },
    { title: "Client Satisfaction", current: 92, target: 95, unit: "%" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Today</p>
            <p className="text-lg font-semibold">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Today's Revenue"
          value="$12,450"
          change="+15.3%"
          changeType="positive"
          icon={DollarSign}
          trend={[65, 78, 82, 95, 88, 92, 100]}
        />
        <StatsCard
          title="Active Projects"
          value="28"
          change="+3"
          changeType="positive"
          icon={FolderOpen}
          trend={[20, 22, 25, 26, 28, 27, 28]}
        />
        <StatsCard
          title="Team Utilization"
          value="87%"
          change="+5.2%"
          changeType="positive"
          icon={Users}
          trend={[75, 78, 82, 85, 83, 86, 87]}
        />
        <StatsCard
          title="Client Satisfaction"
          value="4.8/5"
          change="+0.2"
          changeType="positive"
          icon={Target}
          trend={[4.4, 4.5, 4.6, 4.7, 4.6, 4.7, 4.8]}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Revenue Chart */}
        <div className="lg:col-span-4">
          <RevenueChart />
        </div>
      </div>

      {/* Secondary Content Grid - Projects, Team, Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <ProjectsOverview />
        <TeamAvailability />
        <RecentActivity />
      </div>

      {/* Third Row - Calendar, Newsletter, Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              Today's Schedule
            </h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {todayEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">
                    {event.title}
                  </p>
                  <p className="text-xs text-gray-500">{event.time}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    event.type === "meeting"
                      ? "bg-blue-100 text-blue-700"
                      : event.type === "review"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {event.type}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-center text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center">
            <Plus className="h-4 w-4 mr-1" />
            Add Event
          </button>
        </div>

        {/* Newsletter Hub */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-green-600" />
              Newsletter Hub
            </h3>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              Manage
            </button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-xs text-gray-500">Subscribers</p>
                <p className="font-bold text-gray-900">
                  {newsletterStats.subscribers.toLocaleString()}
                </p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-gray-500">Open Rate</p>
                <p className="font-bold text-gray-900">
                  {newsletterStats.openRate}%
                </p>
              </div>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm font-medium text-yellow-800">
                Last Campaign
              </p>
              <p className="text-xs text-yellow-700">
                {newsletterStats.lastCampaign}
              </p>
              <p className="text-xs text-green-600 mt-1">
                {newsletterStats.performance} performance
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowNewsletterModal(true)}
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center"
          >
            <Mail className="h-4 w-4 mr-1" />
            Send Newsletter
          </button>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-purple-600" />
              Recent Messages
            </h3>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {recentEmails.map((email) => (
              <div
                key={email.id}
                className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    email.unread ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm truncate">
                    {email.subject}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{email.from}</p>
                  <p className="text-xs text-gray-400">{email.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-center text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center justify-center">
            <Plus className="h-4 w-4 mr-1" />
            Compose
          </button>
        </div>
      </div>

      {/* Business Goals Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Target className="h-5 w-5 mr-2 text-yellow-600" />
            Business Goals Progress
          </h3>
          <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium flex items-center">
            View All Goals <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessGoals.map((goal, index) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{goal.title}</h4>
                  <span className="text-sm text-gray-500">
                    {goal.unit === "$"
                      ? `$${goal.current.toLocaleString()}`
                      : `${goal.current} ${goal.unit}`}{" "}
                    /
                    {goal.unit === "$"
                      ? ` $${goal.target.toLocaleString()}`
                      : ` ${goal.target} ${goal.unit}`}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    {progress.toFixed(1)}% Complete
                  </span>
                  <span
                    className={`font-medium ${
                      progress >= 80
                        ? "text-green-600"
                        : progress >= 60
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {progress >= 80
                      ? "On Track"
                      : progress >= 60
                      ? "Needs Attention"
                      : "Behind"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Row - Alerts */}
      <AlertsPanel />
    </div>
  );
}
