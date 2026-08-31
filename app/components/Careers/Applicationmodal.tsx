"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobId: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  coverLetter: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  linkedin: "",
  coverLetter: "",
};

const inputClasses =
  "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20";

const labelClasses = "block text-sm font-medium text-gray-700 mb-1.5";

const ApplicationModal = ({
  isOpen,
  onClose,
  jobTitle,
  jobId,
}: ApplicationModalProps) => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [dragActive, setDragActive] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm(initialForm);
      setResume(null);
      setErrors({});
      setStatus("idle");
      setServerError(null);
    }, 300);
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Enter your full name";
    if (!form.email.trim()) next.email = "Enter your email address";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address";
    if (!form.phone.trim()) next.phone = "Enter a phone number";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleFile = (file: File | null) => {
    if (!file) return;
    const allowed = [".pdf", ".doc", ".docx"];
    const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!allowed.includes(ext)) return;
    if (file.size > 10 * 1024 * 1024) return;
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setServerError(null);

    const payload = new FormData();
    payload.append("jobId", jobId);
    payload.append("jobTitle", jobTitle);
    payload.append("name", form.name);
    payload.append("email", form.email);
    payload.append("phone", form.phone);
    payload.append("linkedin", form.linkedin);
    payload.append("coverLetter", form.coverLetter);
    payload.append("website", honeypotRef.current?.value ?? "");
    if (resume) payload.append("resume", resume);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: payload,
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setServerError(data.message || "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      setStatus("success");
    } catch {
      setServerError("Something went wrong. Please check your connection and try again.");
      setStatus("idle");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-black"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center px-8 py-14 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-black">Application sent</h3>
                <p className="mb-8 max-w-sm text-gray-600">
                  Thanks for applying to <span className="font-medium text-black">{jobTitle}</span>. A
                  confirmation is on its way to {form.email}, and our team will reach out if there&apos;s a fit.
                </p>
                <button
                  onClick={handleClose}
                  className="rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-3 font-bold text-white shadow-lg shadow-yellow-500/20 transition-transform hover:scale-[1.02]"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 pb-8 pt-14 sm:px-8">
                <input
                  ref={honeypotRef}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />
                <span className="mb-2 inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-black">
                  Application
                </span>
                <h3 className="mb-1 text-2xl font-bold text-black">{jobTitle}</h3>
                <p className="mb-7 text-sm text-gray-500">
                  Tell us a bit about yourself and attach your resume.
                </p>

                <div className="space-y-5">
                  <div>
                    <label className={labelClasses} htmlFor="name">Full name</label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`${inputClasses} ${errors.name ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""}`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClasses} htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@email.com"
                        className={`${inputClasses} ${errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""}`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label className={labelClasses} htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 555 000 0000"
                        className={`${inputClasses} ${errors.phone ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""}`}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses} htmlFor="linkedin">LinkedIn or portfolio (optional)</label>
                    <input
                      id="linkedin"
                      value={form.linkedin}
                      onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                      placeholder="https://"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className={labelClasses}>Resume</label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                    />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                      }}
                      onDragLeave={() => setDragActive(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragActive(false);
                        handleFile(e.dataTransfer.files?.[0] ?? null);
                      }}
                      className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-4 py-6 text-center transition-colors ${
                        dragActive
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-300 hover:border-amber-400 hover:bg-gray-50"
                      }`}
                    >
                      {resume ? (
                        <div className="flex items-center gap-3">
                          <svg className="h-5 w-5 flex-shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="max-w-[220px] truncate text-sm font-medium text-gray-800">
                            {resume.name}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setResume(null);
                              if (fileInputRef.current) fileInputRef.current.value = "";
                            }}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <>
                          <svg className="mb-2 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9m0 0l-3 3m3-3l3 3M4.5 19.5h15a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 6v12a1.5 1.5 0 001.5 1.5z" />
                          </svg>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium text-amber-600">Choose a file</span> or drag it here
                          </p>
                          <p className="mt-1 text-xs text-gray-400">PDF or Word, up to 10MB</p>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses} htmlFor="coverLetter">Cover letter (optional)</label>
                    <textarea
                      id="coverLetter"
                      value={form.coverLetter}
                      onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                      placeholder="Anything you'd like us to know"
                      rows={4}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>
                </div>

                {serverError && (
                  <p className="mt-6 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">{serverError}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                  className="relative mt-7 w-full overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 py-3.5 font-bold text-white shadow-xl shadow-yellow-500/20 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending application
                    </span>
                  ) : (
                    "Submit application"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplicationModal;