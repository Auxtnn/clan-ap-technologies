"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FolderOpen,
  Users,
  Calendar,
  Target,
  DollarSign,
  Plus,
  Trash2,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
}

interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
}

export default function AddProjectModal({
  isOpen,
  onClose,
  onSubmit,
}: AddProjectModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    client: "",
    projectType: "",
    priority: "medium",
    status: "planning",
    startDate: "",
    endDate: "",
    budget: "",
    estimatedHours: "",
    tags: "",
    notes: "",
  });

  const [selectedTeamMembers, setSelectedTeamMembers] = useState<string[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>([
    { id: "1", title: "", description: "", dueDate: "", completed: false },
  ]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const availableTeamMembers: TeamMember[] = [
    { id: "1", name: "John Doe", role: "Senior QA Engineer" },
    { id: "2", name: "Jane Smith", role: "Lead Developer" },
    { id: "3", name: "Mike Johnson", role: "QA Automation Engineer" },
    { id: "4", name: "Sarah Wilson", role: "UX/UI Designer" },
    { id: "5", name: "Tom Brown", role: "DevOps Engineer" },
    { id: "6", name: "Alex Chen", role: "Junior Developer" },
  ];

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleTeamMemberToggle = (memberId: string) => {
    setSelectedTeamMembers((prev) =>
      prev.includes(memberId)
        ? prev.filter((id) => id !== memberId)
        : [...prev, memberId]
    );
  };

  const handleMilestoneChange = (
    id: string,
    field: string,
    value: string | boolean
  ) => {
    setMilestones((prev) =>
      prev.map((milestone) =>
        milestone.id === id ? { ...milestone, [field]: value } : milestone
      )
    );
  };

  const addMilestone = () => {
    const newMilestone: Milestone = {
      id: Date.now().toString(),
      title: "",
      description: "",
      dueDate: "",
      completed: false,
    };
    setMilestones((prev) => [...prev, newMilestone]);
  };

  const removeMilestone = (id: string) => {
    if (milestones.length > 1) {
      setMilestones((prev) => prev.filter((milestone) => milestone.id !== id));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Project name is required";
    if (!formData.client) newErrors.client = "Client selection is required";
    if (!formData.projectType)
      newErrors.projectType = "Project type is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.endDate) newErrors.endDate = "End date is required";
    if (
      formData.startDate &&
      formData.endDate &&
      new Date(formData.startDate) >= new Date(formData.endDate)
    ) {
      newErrors.endDate = "End date must be after start date";
    }
    if (selectedTeamMembers.length === 0)
      newErrors.teamMembers = "At least one team member must be assigned";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const projectData = {
      ...formData,
      teamMembers: selectedTeamMembers,
      milestones: milestones.filter((m) => m.title.trim()),
      createdAt: new Date().toISOString(),
    };

    console.log("Creating project:", projectData);
    onSubmit?.(projectData);

    // Reset form
    setFormData({
      name: "",
      description: "",
      client: "",
      projectType: "",
      priority: "medium",
      status: "planning",
      startDate: "",
      endDate: "",
      budget: "",
      estimatedHours: "",
      tags: "",
      notes: "",
    });
    setSelectedTeamMembers([]);
    setMilestones([
      { id: "1", title: "", description: "", dueDate: "", completed: false },
    ]);

    onClose();
  };

  const handleClose = () => {
    setFormData({
      name: "",
      description: "",
      client: "",
      projectType: "",
      priority: "medium",
      status: "planning",
      startDate: "",
      endDate: "",
      budget: "",
      estimatedHours: "",
      tags: "",
      notes: "",
    });
    setSelectedTeamMembers([]);
    setMilestones([
      { id: "1", title: "", description: "", dueDate: "", completed: false },
    ]);
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-blue-50 flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <FolderOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Create New Project
                  </h2>
                  <p className="text-sm text-gray-600">
                    Set up a new project with team assignments and milestones
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Project Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        1
                      </span>
                      Project Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Name *
                        </label>
                        <input
                          type="text"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.name
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          placeholder="Enter project name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Client *
                        </label>
                        <select
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.client
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          value={formData.client}
                          onChange={(e) =>
                            handleInputChange("client", e.target.value)
                          }
                        >
                          <option value="">Select a client</option>
                          <option value="techcorp">TechCorp Solutions</option>
                          <option value="startupxyz">StartupXYZ</option>
                          <option value="designco">DesignCo Agency</option>
                          <option value="megacorp">MegaCorp Industries</option>
                          <option value="cloudtech">CloudTech Services</option>
                          <option value="financesecure">
                            FinanceSecure Ltd
                          </option>
                        </select>
                        {errors.client && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.client}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type *
                        </label>
                        <select
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.projectType
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          value={formData.projectType}
                          onChange={(e) =>
                            handleInputChange("projectType", e.target.value)
                          }
                        >
                          <option value="">Select project type</option>
                          <option value="qa-testing">QA Testing</option>
                          <option value="web-development">
                            Web Development
                          </option>
                          <option value="mobile-development">
                            Mobile Development
                          </option>
                          <option value="qa-development">
                            QA + Development
                          </option>
                          <option value="security-audit">Security Audit</option>
                          <option value="performance-testing">
                            Performance Testing
                          </option>
                          <option value="consultation">Consultation</option>
                        </select>
                        {errors.projectType && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.projectType}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Priority
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          value={formData.priority}
                          onChange={(e) =>
                            handleInputChange("priority", e.target.value)
                          }
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="critical">Critical</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Status
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          value={formData.status}
                          onChange={(e) =>
                            handleInputChange("status", e.target.value)
                          }
                        >
                          <option value="planning">Planning</option>
                          <option value="in-progress">In Progress</option>
                          <option value="on-hold">On Hold</option>
                          <option value="testing">Testing</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Description
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                        placeholder="Describe the project scope and objectives..."
                        value={formData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* Timeline & Budget */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-yellow-600" />
                      Timeline & Budget
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Start Date *
                        </label>
                        <input
                          type="date"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.startDate
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          value={formData.startDate}
                          onChange={(e) =>
                            handleInputChange("startDate", e.target.value)
                          }
                        />
                        {errors.startDate && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.startDate}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          End Date *
                        </label>
                        <input
                          type="date"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.endDate
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          value={formData.endDate}
                          onChange={(e) =>
                            handleInputChange("endDate", e.target.value)
                          }
                        />
                        {errors.endDate && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.endDate}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget ($)
                        </label>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          placeholder="50000"
                          value={formData.budget}
                          onChange={(e) =>
                            handleInputChange("budget", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Hours
                        </label>
                        <input
                          type="number"
                          min="0"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          placeholder="200"
                          value={formData.estimatedHours}
                          onChange={(e) =>
                            handleInputChange("estimatedHours", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Team Assignment */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-yellow-600" />
                      Team Assignment
                    </h3>
                    {errors.teamMembers && (
                      <p className="text-red-500 text-sm mb-4">
                        {errors.teamMembers}
                      </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {availableTeamMembers.map((member) => (
                        <div
                          key={member.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedTeamMembers.includes(member.id)
                              ? "border-yellow-500 bg-yellow-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => handleTeamMemberToggle(member.id)}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                selectedTeamMembers.includes(member.id)
                                  ? "border-yellow-500 bg-yellow-500"
                                  : "border-gray-300"
                              }`}
                            >
                              {selectedTeamMembers.includes(member.id) && (
                                <svg
                                  className="w-3 h-3 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {member.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {member.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Milestones */}
                  <div className="border-t border-gray-200 pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Target className="h-5 w-5 mr-2 text-yellow-600" />
                        Project Milestones
                      </h3>
                      <button
                        type="button"
                        onClick={addMilestone}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                        <span>Add Milestone</span>
                      </button>
                    </div>

                    <div className="space-y-4">
                      {milestones.map((milestone, index) => (
                        <div
                          key={milestone.id}
                          className="p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Milestone Title
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                                placeholder="e.g., Design Phase Complete"
                                value={milestone.title}
                                onChange={(e) =>
                                  handleMilestoneChange(
                                    milestone.id,
                                    "title",
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Due Date
                              </label>
                              <input
                                type="date"
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                                value={milestone.dueDate}
                                onChange={(e) =>
                                  handleMilestoneChange(
                                    milestone.id,
                                    "dueDate",
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            <div className="flex items-end">
                              <button
                                type="button"
                                onClick={() => removeMilestone(milestone.id)}
                                disabled={milestones.length === 1}
                                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Description
                            </label>
                            <textarea
                              rows={2}
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                              placeholder="Describe what needs to be completed for this milestone..."
                              value={milestone.description}
                              onChange={(e) =>
                                handleMilestoneChange(
                                  milestone.id,
                                  "description",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        2
                      </span>
                      Additional Information
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tags
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          placeholder="e.g. frontend, api, testing, urgent (comma separated)"
                          value={formData.tags}
                          onChange={(e) =>
                            handleInputChange("tags", e.target.value)
                          }
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Separate tags with commas
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Notes
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          placeholder="Add any additional notes, requirements, or important information about this project..."
                          value={formData.notes}
                          onChange={(e) =>
                            handleInputChange("notes", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium flex items-center space-x-2"
              >
                <FolderOpen className="h-4 w-4" />
                <span>Create Project</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
