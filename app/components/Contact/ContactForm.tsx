"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "" as string | undefined,
    service: "",
    company: "",
    message: "",
    otherService: "",
  });

  // Field-level validation error state
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const validateName = (value: string): string => {
    if (!value) return "";
    return /^[a-zA-Z\s'-]+$/.test(value)
      ? ""
      : "Please enter a valid name (letters only).";
  };

  const validateEmail = (value: string): string => {
    if (!value) return "";
    const hasConsecutiveDots = /\.{2,}/.test(value);
    const validFormat = /^[a-zA-Z0-9._%+\-]+@[^\s@]+\.[a-zA-Z]{2,63}$/.test(
      value
    );
    return !hasConsecutiveDots && validFormat
      ? ""
      : "Please enter a valid email address (e.g. name@example.com).";
  };

  const validatePhone = (value: string | undefined): string => {
    if (!value) return "";
    return isValidPhoneNumber(value)
      ? ""
      : "Please enter a valid phone number for the selected country.";
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "name" && value && !/^[a-zA-Z\s'-]*$/.test(value)) return;

    setFormState((prev) => ({ ...prev, [name]: value }));

    if (name === "name" || name === "email") {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name")
      setFieldErrors((prev) => ({ ...prev, name: validateName(value) }));
    if (name === "email")
      setFieldErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormState((prev) => ({ ...prev, phone: value }));

    setFieldErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handlePhoneBlur = () => {
    setFieldErrors((prev) => ({
      ...prev,
      phone: validatePhone(formState.phone),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameError = validateName(formState.name);
    const emailError = validateEmail(formState.email);
    const phoneError = validatePhone(formState.phone);

    if (nameError || emailError || phoneError) {
      setFieldErrors({ name: nameError, email: emailError, phone: phoneError });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: "" });

    const payload = {
      ...formState,
      service:
        formState.service === "other" && formState.otherService
          ? `Other – ${formState.otherService}`
          : formState.service,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, error: false, message: "" });
        setFormState({
          name: "",
          email: "",
          phone: "",
          service: "",
          company: "",
          message: "",
          otherService: "",
        });
        setFieldErrors({ name: "", email: "", phone: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        error: true,
        message:
          error instanceof Error
            ? error.message
            : "An unknown error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all";

  const errorClass = "mt-1 text-xs text-red-500";

  return (
    <div
      id="contact-form"
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8 scroll-mt-28"
    >
      <h2 className="text-2xl font-bold mb-6">Request a Consultation</h2>

      {submitStatus.success ? (
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
            will contact you shortly.
          </p>
          <button
            onClick={() =>
              setSubmitStatus({ success: false, error: false, message: "" })
            }
            className="text-yellow-500 hover:text-yellow-600 transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                onBlur={handleBlur}
                required
                className={`${inputClass} ${
                  fieldErrors.name
                    ? "border-red-400 focus:ring-red-400 focus:border-red-400"
                    : ""
                }`}
                placeholder="Enter your full name"
              />
              {fieldErrors.name && (
                <p className={errorClass}>{fieldErrors.name}</p>
              )}
            </div>

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
                onBlur={handleBlur}
                required
                className={`${inputClass} ${
                  fieldErrors.email
                    ? "border-red-400 focus:ring-red-400 focus:border-red-400"
                    : ""
                }`}
                placeholder="Enter your email address"
              />
              {fieldErrors.email && (
                <p className={errorClass}>{fieldErrors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <PhoneInput
                id="phone"
                international
                defaultCountry="US"
                value={formState.phone}
                onChange={handlePhoneChange}
                onBlur={handlePhoneBlur}
                className={`phone-input-wrapper ${
                  fieldErrors.phone ? "phone-input-error" : ""
                }`}
              />
              {fieldErrors.phone && (
                <p className={errorClass}>{fieldErrors.phone}</p>
              )}
            </div>

            {/* ── Company ── */}
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
                className={inputClass}
                placeholder="Enter your company name"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Service of Interest <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  required
                  className={`${inputClass} appearance-none pr-10`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="automated-testing">Automated Testing</option>
                  <option value="mobile-testing">Mobile Testing</option>
                  <option value="security-testing">Security Testing</option>
                  <option value="performance-testing">
                    Performance Testing
                  </option>
                  <option value="api-testing">API Testing</option>
                  <option value="manual-testing">Manual Testing</option>
                  <option value="database-testing">Database Testing</option>
                  <option value="ui-ux-testing">UI/UX Testing</option>
                  <option value="other">Other</option>
                </select>
                {/* Custom chevron */}
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
            </div>

            {formState.service === "other" && (
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <label
                  htmlFor="otherService"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Please specify your service requirement{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="otherService"
                  name="otherService"
                  value={formState.otherService}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Describe the service you need"
                />
              </motion.div>
            )}

            {/* ── Message ── */}
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
                className={inputClass}
                placeholder="Tell us about your project and requirements"
              />
            </div>
          </div>

          {/* ── Submission error banner ── */}
          {submitStatus.error && (
            <p className="mb-4 text-sm text-red-500 text-center">
              {submitStatus.message}
            </p>
          )}

          {/* ── Submit button ── */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white px-8 py-4 group w-full inline-flex items-center justify-center rounded-full font-bold relative overflow-hidden cursor-pointer disabled:opacity-70"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center">
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
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
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
      )}
    </div>
  );
};

export default ContactForm;
