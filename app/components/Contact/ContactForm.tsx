"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ isSubmitting: true, isSubmitted: false, error: "" });

    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormState({ isSubmitting: false, isSubmitted: true, error: "" });
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div
      id="contact-form"
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold mb-6">Request a Consultation</h2>

      {formState.isSubmitted ? (
        <motion.div
          className="bg-green-50 p-6 rounded-lg text-green-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p>
            Your message has been sent successfully. One of our team members
            will contact you shortly.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Company field */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                placeholder="Enter your company name"
              />
            </div>

            {/* Service field */}
            <div className="md:col-span-2">
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Service of Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="automated-testing">Automated Testing</option>
                <option value="mobile-testing">Mobile Testing</option>
                <option value="security-testing">Security Testing</option>
                <option value="performance-testing">Performance Testing</option>
                <option value="api-testing">API Testing</option>
                <option value="manual-testing">Manual Testing</option>
                <option value="database-testing">Database Testing</option>
                <option value="ui-ux-testing">UI/UX Testing</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message field */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                placeholder="Tell us about your project and requirements"
              ></textarea>
            </div>
          </div>

          {/* Error message */}
          {formState.error && (
            <div className="text-red-500 mb-4">{formState.error}</div>
          )}

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={formState.isSubmitting}
            className="bg-black text-white px-8 py-3 rounded-full font-bold relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">
              {formState.isSubmitting ? "Sending..." : "Send Message"}
            </span>
            <motion.span
              className="absolute inset-0 bg-yellow-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
