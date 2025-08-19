"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Building2, Globe } from "lucide-react";

interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
}

export default function AddClientModal({
  isOpen,
  onClose,
  onSubmit,
}: AddClientModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    companySize: "",
    annualRevenue: "",
    website: "",
    address: "",
    country: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phone: "",
    linkedIn: "",
    notes: "",
    leadSource: "",
    expectedValue: "",
    tags: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.firstName.trim())
      newErrors.firstName = "Contact first name is required";
    if (!formData.lastName.trim())
      newErrors.lastName = "Contact last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.industry) newErrors.industry = "Industry is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Adding client:", formData);
    onSubmit?.(formData);

    // Reset form
    setFormData({
      companyName: "",
      industry: "",
      companySize: "",
      annualRevenue: "",
      website: "",
      address: "",
      country: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phone: "",
      linkedIn: "",
      notes: "",
      leadSource: "",
      expectedValue: "",
      tags: "",
    });

    onClose();
  };

  const handleClose = () => {
    setFormData({
      companyName: "",
      industry: "",
      companySize: "",
      annualRevenue: "",
      website: "",
      address: "",
      country: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phone: "",
      linkedIn: "",
      notes: "",
      leadSource: "",
      expectedValue: "",
      tags: "",
    });
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
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-blue-50 flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Add New Client
                  </h2>
                  <p className="text-sm text-gray-600">
                    Add a new client to your CRM system
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

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Company Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Building2 className="h-5 w-5 mr-2 text-yellow-600" />
                      Company Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.companyName
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          placeholder="Enter company name"
                          value={formData.companyName}
                          onChange={(e) =>
                            handleInputChange("companyName", e.target.value)
                          }
                        />
                        {errors.companyName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.companyName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Industry *
                        </label>
                        <select
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.industry
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          value={formData.industry}
                          onChange={(e) =>
                            handleInputChange("industry", e.target.value)
                          }
                        >
                          <option value="">Select industry</option>
                          <option value="Technology">Technology</option>
                          <option value="Finance">Finance & Banking</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Education">Education</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Consulting">Consulting</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.industry && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.industry}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Size
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          value={formData.companySize}
                          onChange={(e) =>
                            handleInputChange("companySize", e.target.value)
                          }
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-1000">201-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Annual Revenue
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          value={formData.annualRevenue}
                          onChange={(e) =>
                            handleInputChange("annualRevenue", e.target.value)
                          }
                        >
                          <option value="">Select revenue range</option>
                          <option value="under-1m">Under $1M</option>
                          <option value="1m-10m">$1M - $10M</option>
                          <option value="10m-50m">$10M - $50M</option>
                          <option value="50m-100m">$50M - $100M</option>
                          <option value="100m+">$100M+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Website
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <input
                            type="url"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                            placeholder="https://company.com"
                            value={formData.website}
                            onChange={(e) =>
                              handleInputChange("website", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          value={formData.country}
                          onChange={(e) =>
                            handleInputChange("country", e.target.value)
                          }
                        >
                          <option value="">Select country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="NL">Netherlands</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Address
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                        placeholder="Enter company address"
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* Primary Contact */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-yellow-600" />
                      Primary Contact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.firstName
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          placeholder="Contact first name"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.lastName
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          placeholder="Contact last name"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          placeholder="e.g. CTO, Project Manager"
                          value={formData.jobTitle}
                          onChange={(e) =>
                            handleInputChange("jobTitle", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                            errors.email
                              ? "border-red-300 focus:ring-red-500"
                              : "border-gray-200"
                          }`}
                          placeholder="contact@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          placeholder="https://linkedin.com/in/profile"
                          value={formData.linkedIn}
                          onChange={(e) =>
                            handleInputChange("linkedIn", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business Details */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Building2 className="h-5 w-5 mr-2 text-yellow-600" />
                      Business Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Lead Source
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          value={formData.leadSource}
                          onChange={(e) =>
                            handleInputChange("leadSource", e.target.value)
                          }
                        >
                          <option value="">Select lead source</option>
                          <option value="website">Website</option>
                          <option value="referral">Referral</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="cold-email">Cold Email</option>
                          <option value="event">Event/Conference</option>
                          <option value="advertising">Advertising</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expected Project Value
                        </label>
                        <input
                          type="number"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          placeholder="50000"
                          value={formData.expectedValue}
                          onChange={(e) =>
                            handleInputChange("expectedValue", e.target.value)
                          }
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tags
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          placeholder="e.g. enterprise, high-priority, mobile (comma separated)"
                          value={formData.tags}
                          onChange={(e) =>
                            handleInputChange("tags", e.target.value)
                          }
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Separate tags with commas
                        </p>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Notes
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                          placeholder="Any additional notes about this client..."
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
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium flex items-center space-x-2"
              >
                <Users className="h-4 w-4" />
                <span>Add Client</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
