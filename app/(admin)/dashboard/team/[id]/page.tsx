"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  Edit,
  MoreHorizontal,
  Clock,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Users,
  MessageCircle,
  Video,
  Settings,
  Plus,
  Star,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function TeamMemberDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - replace with actual data from params/API
  const member = {
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
    performance: 92,
    experience: "5 years",
    joinDate: "2021-03-15",
    lastActive: "2024-02-15T14:30:00",
    manager: "Sarah Wilson",
    directReports: 2,
    salary: 95000,
    employeeId: "EMP-001",
    emergencyContact: {
      name: "Jane Doe",
      relationship: "Spouse",
      phone: "+1 (555) 123-4568",
    },
    skills: [
      { name: "Manual Testing", level: 95 },
      { name: "Automation", level: 88 },
      { name: "API Testing", level: 90 },
      { name: "Performance Testing", level: 75 },
      { name: "Security Testing", level: 70 },
      { name: "Selenium", level: 85 },
      { name: "JavaScript", level: 78 },
      { name: "Python", level: 82 },
    ],
    certifications: [
      { name: "ISTQB Foundation", date: "2022-06-15", expiry: "2025-06-15" },
      {
        name: "AWS Cloud Practitioner",
        date: "2023-01-20",
        expiry: "2026-01-20",
      },
    ],
    currentProjects: [
      {
        id: "1",
        name: "E-commerce Platform QA",
        role: "Lead QA Engineer",
        allocation: 60,
        client: "TechCorp Solutions",
        status: "In Progress",
      },
      {
        id: "2",
        name: "Mobile App Testing",
        role: "QA Engineer",
        allocation: 25,
        client: "StartupXYZ",
        status: "Testing",
      },
    ],
    goals: [
      {
        id: "1",
        title: "Complete AWS Solutions Architect Certification",
        category: "Professional Development",
        progress: 65,
        deadline: "2024-06-30",
        status: "In Progress",
      },
      {
        id: "2",
        title: "Mentor 2 Junior QA Engineers",
        category: "Leadership",
        progress: 40,
        deadline: "2024-12-31",
        status: "In Progress",
      },
    ],
    timeOff: {
      totalDays: 25,
      usedDays: 12,
      plannedDays: 5,
    },
  };

  const recentActivity = [
    {
      id: "1",
      type: "project",
      action: "Completed testing milestone",
      project: "E-commerce Platform QA",
      date: "2024-02-15",
      time: "14:30",
    },
    {
      id: "2",
      type: "skill",
      action: "Updated skill assessment",
      details: "Automation Testing - 88%",
      date: "2024-02-14",
      time: "10:15",
    },
    {
      id: "3",
      type: "training",
      action: "Completed training module",
      details: "Advanced API Testing Techniques",
      date: "2024-02-12",
      time: "16:45",
    },
  ];

  const performanceData = [
    { month: "Sep", score: 88 },
    { month: "Oct", score: 90 },
    { month: "Nov", score: 91 },
    { month: "Dec", score: 89 },
    { month: "Jan", score: 92 },
    { month: "Feb", score: 92 },
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-50 text-green-700 border-green-200";
      case "Busy":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "On Leave":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return "text-green-600";
    if (performance >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  const getSkillLevel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 75) return "bg-yellow-500";
    if (level >= 60) return "bg-blue-500";
    return "bg-gray-500";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a
            href="/dashboard/team"
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </a>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {member.name}
              </h1>
              <p className="text-gray-600">
                {member.role} • {member.department}
              </p>
              <p className="text-sm text-gray-500">
                Employee ID: {member.employeeId}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium border ${getAvailabilityColor(
              member.availability
            )}`}
          >
            {member.availability}
          </span>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <MessageCircle className="h-4 w-4" />
            <span>Message</span>
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
              <Target className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Performance</p>
              <p
                className={`text-xl font-bold ${getPerformanceColor(
                  member.performance
                )}`}
              >
                {member.performance}%
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Utilization</p>
              <p className="text-xl font-bold text-gray-900">
                {member.utilization}%
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <Users className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Projects</p>
              <p className="text-xl font-bold text-gray-900">
                {member.currentProjects.length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Calendar className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Time Off</p>
              <p className="text-xl font-bold text-gray-900">
                {member.timeOff.usedDays}/{member.timeOff.totalDays}
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
              { id: "skills", label: "Skills & Development" },
              { id: "performance", label: "Performance" },
              { id: "personal", label: "Personal Info" },
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
              {/* Contact & Basic Info */}
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
                          {member.email}
                        </p>
                        <p className="text-sm text-gray-600">Work Email</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {member.phone}
                        </p>
                        <p className="text-sm text-gray-600">Direct Line</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {member.location}
                        </p>
                        <p className="text-sm text-gray-600">Work Location</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {member.manager}
                        </p>
                        <p className="text-sm text-gray-600">Reports To</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Work Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Join Date</span>
                      <span className="font-medium">
                        {new Date(member.joinDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience</span>
                      <span className="font-medium">{member.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Direct Reports</span>
                      <span className="font-medium">
                        {member.directReports}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Active</span>
                      <span className="font-medium">
                        {new Date(member.lastActive).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity & Goals */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start space-x-3"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            activity.type === "project"
                              ? "bg-blue-500"
                              : activity.type === "skill"
                              ? "bg-green-500"
                              : "bg-purple-500"
                          }`}
                        ></div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {activity.action}
                          </p>
                          <p className="text-sm text-gray-600">
                            {activity.project || activity.details}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(activity.date).toLocaleDateString()} at{" "}
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Current Goals
                  </h3>
                  <div className="space-y-4">
                    {member.goals.map((goal) => (
                      <div
                        key={goal.id}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900">
                            {goal.title}
                          </h4>
                          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            {goal.category}
                          </span>
                        </div>
                        <div className="mb-2">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{goal.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-500 h-2 rounded-full"
                              style={{ width: `${goal.progress}%` }}
                            />
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          Due: {new Date(goal.deadline).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
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
                  Current Projects
                </h3>
                <span className="text-sm text-gray-600">
                  Total Allocation:{" "}
                  {member.currentProjects.reduce(
                    (sum, p) => sum + p.allocation,
                    0
                  )}
                  %
                </span>
              </div>
              <div className="grid gap-4">
                {member.currentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {project.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {project.client}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          project.status === "In Progress"
                            ? "bg-blue-50 text-blue-700"
                            : project.status === "Testing"
                            ? "bg-purple-50 text-purple-700"
                            : "bg-gray-50 text-gray-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Role</p>
                        <p className="font-medium">{project.role}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Allocation</p>
                        <p className="font-medium">{project.allocation}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Technical Skills
                  </h3>
                  <div className="space-y-4">
                    {member.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">
                            {skill.name}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                              {skill.level}%
                            </span>
                            <span
                              className={`text-xs px-2 py-1 rounded text-white ${getSkillColor(
                                skill.level
                              )}`}
                            >
                              {getSkillLevel(skill.level)}
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getSkillColor(
                              skill.level
                            )}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Certifications
                  </h3>
                  <div className="space-y-4">
                    {member.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {cert.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              Earned: {new Date(cert.date).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-600">
                              Expires:{" "}
                              {new Date(cert.expiry).toLocaleDateString()}
                            </p>
                          </div>
                          <Award className="h-5 w-5 text-yellow-500" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-4">
                      Development Goals
                    </h4>
                    <div className="space-y-3">
                      {member.goals
                        .filter(
                          (g) => g.category === "Professional Development"
                        )
                        .map((goal) => (
                          <div
                            key={goal.id}
                            className="border border-gray-200 rounded-lg p-3"
                          >
                            <h5 className="font-medium text-gray-900">
                              {goal.title}
                            </h5>
                            <div className="mt-2">
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                                <span>Progress</span>
                                <span>{goal.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-green-500 h-2 rounded-full"
                                  style={{ width: `${goal.progress}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === "performance" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Performance Trend
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-end space-x-2 h-32">
                      {performanceData.map((data, index) => (
                        <div
                          key={index}
                          className="flex-1 flex flex-col items-center"
                        >
                          <div
                            className="bg-yellow-500 rounded-t w-full"
                            style={{ height: `${data.score}%` }}
                          ></div>
                          <span className="text-xs text-gray-600 mt-1">
                            {data.month}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Performance Metrics
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Overall Score</span>
                      <span
                        className={`font-bold text-lg ${getPerformanceColor(
                          member.performance
                        )}`}
                      >
                        {member.performance}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Quality Rating</span>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= 4
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Productivity Score</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Team Collaboration</span>
                      <span className="font-medium">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Personal Info Tab */}
          {activeTab === "personal" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Personal Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Employee ID</span>
                      <span className="font-medium">{member.employeeId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Department</span>
                      <span className="font-medium">{member.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Manager</span>
                      <span className="font-medium">{member.manager}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Work Location</span>
                      <span className="font-medium">{member.location}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-4">
                      Emergency Contact
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name</span>
                        <span className="font-medium">
                          {member.emergencyContact.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Relationship</span>
                        <span className="font-medium">
                          {member.emergencyContact.relationship}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone</span>
                        <span className="font-medium">
                          {member.emergencyContact.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Time Off Summary
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Allowance</span>
                        <span className="font-medium">
                          {member.timeOff.totalDays} days
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Used</span>
                        <span className="font-medium">
                          {member.timeOff.usedDays} days
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Planned</span>
                        <span className="font-medium">
                          {member.timeOff.plannedDays} days
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Remaining</span>
                        <span className="font-medium text-green-600">
                          {member.timeOff.totalDays -
                            member.timeOff.usedDays -
                            member.timeOff.plannedDays}{" "}
                          days
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="flex h-3 rounded-full overflow-hidden">
                          <div
                            className="bg-red-500"
                            style={{
                              width: `${
                                (member.timeOff.usedDays /
                                  member.timeOff.totalDays) *
                                100
                              }%`,
                            }}
                          ></div>
                          <div
                            className="bg-yellow-500"
                            style={{
                              width: `${
                                (member.timeOff.plannedDays /
                                  member.timeOff.totalDays) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-xs">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded"></div>
                          <span>Used</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-yellow-500 rounded"></div>
                          <span>Planned</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-gray-200 rounded"></div>
                          <span>Available</span>
                        </div>
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
