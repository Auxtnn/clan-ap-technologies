"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          error: false,
          message:
            "Thank you for your message! We'll get back to you as soon as possible.",
        });

        // Reset form after successful submission
        setFormState({
          name: "",
          email: "",
          phone: "",
          service: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error instanceof Error) {
        setSubmitStatus({
          success: false,
          error: true,
          message:
            error.message ||
            "There was an error sending your message. Please try again.",
        });
      } else {
        setSubmitStatus({
          success: false,
          error: true,
          message: "An unknown error occurred. Please try again.",
        });
      }
    } finally {
      setIsSubmitting(false);

      // Auto-clear success message after 5 seconds
      if (submitStatus.success) {
        setTimeout(() => {
          setSubmitStatus({ success: false, error: false, message: "" });
        }, 5000);
      }
    }
  };

  return (
    <div
      id="contact-form"
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold mb-6">Request a Consultation</h2>

      {submitStatus.success && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Thank You!
          </h3>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. One of our team members
            will contact you shortly. shortly.
          </p>
          <button
            onClick={() => {
              setSubmitStatus({
                success: false,
                error: false,
                message: "",
              });
              setIsSubmitting(false);
            }}
            className="text-yellow-500 hover:text-yellow-300  transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      )}
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
              value={formState.name}
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
              value={formState.email}
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
              value={formState.phone}
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
              value={formState.company}
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
              value={formState.service}
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
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
              placeholder="Tell us about your project and requirements"
            ></textarea>
          </div>
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white px-8 py-4 group w-full inline-flex  item-center justify-center rounded-full font-bold relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className=" relative z-10 flex items-center justify-center">
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending Message...
              </>
            ) : (
              <>
                Send Message{" "}
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <motion.span
            className="absolute inset-0 bg-yellow-500"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
