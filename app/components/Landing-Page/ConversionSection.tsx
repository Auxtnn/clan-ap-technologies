"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import {
  AUDIT_LIMITS,
  EMPTY_AUDIT_ERRORS,
  hasAuditErrors,
  normalizeAudit,
  validateAudit,
  validateAuditCompany,
  validateAuditEmail,
  validateAuditWebsite,
  type AuditErrors,
  type AuditField,
  type AuditValues,
} from "@/app/constant/auditValidation";
import { DISCOVERY_CALL_URL } from "@/app/(landing)/constants";


const callReassurances = [
  "30 minutes, no pressure, no sales script",
  "You'll leave with a view of your riskiest release paths either way",
  "No obligation to continue working with us after",
];

const EMPTY_VALUES: AuditValues = { email: "", company: "", website: "" };

const fieldValidators: Record<AuditField, (value: string) => string> = {
  email: validateAuditEmail,
  company: validateAuditCompany,
  website: validateAuditWebsite,
};

const inputClass = (hasError: boolean) =>
  `w-full rounded-lg border bg-white/[0.06] px-4 py-3.5 text-base text-white placeholder:text-white/35 outline-none transition-colors focus:ring-2 ${
    hasError
      ? "border-red-400/80 focus:border-red-400 focus:ring-red-400/25"
      : "border-white/20 focus:border-amber-400 focus:ring-amber-400/25"
  }`;

export default function ConversionSection() {
  const [values, setValues] = useState<AuditValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<AuditErrors>(EMPTY_AUDIT_ERRORS);
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submittedFor, setSubmittedFor] = useState<AuditValues | null>(null);

  const inputRefs = {
    email: useRef<HTMLInputElement>(null),
    company: useRef<HTMLInputElement>(null),
    website: useRef<HTMLInputElement>(null),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as AuditField;
    setValues((prev) => ({ ...prev, [name]: e.target.value }));
    // Clear the error while the user corrects it; it is re-checked on blur.
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (submitError) setSubmitError("");
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const name = e.target.name as AuditField;
    // Don't nag about an untouched empty field until submit.
    if (!e.target.value) return;
    setErrors((prev) => ({ ...prev, [name]: fieldValidators[name](e.target.value) }));
  };

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validateAudit(values);
    setErrors(nextErrors);
    if (hasAuditErrors(nextErrors)) {
      const firstInvalid = (Object.keys(nextErrors) as AuditField[]).find(
        (field) => nextErrors[field]
      );
      if (firstInvalid) inputRefs[firstInvalid].current?.focus();
      return;
    }

    const payload = normalizeAudit(values);
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, fax: honeypot }),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmittedFor(payload);
        setValues(EMPTY_VALUES);
        setErrors(EMPTY_AUDIT_ERRORS);
        return;
      }

      if (response.status === 400 && data?.fields) {
        setErrors({ ...EMPTY_AUDIT_ERRORS, ...data.fields });
        return;
      }

      throw new Error(data?.error || "Failed to send request");
    } catch (error) {
      console.error("Error submitting audit form:", error);
      setSubmitError(
        "We couldn't send your request. Please try again in a moment, or email us at contact@clanap.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmittedFor(null);
    setSubmitError("");
  };

  return (
    <section id="book" className="bg-[#140a00] px-5 py-24 text-[#FFFDF9] md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 p-9">
          <div>
            <h2 className="text-balance [font-family:var(--font-display)] text-4xl font-black tracking-tight md:text-5xl">
              Book your free discovery call
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/62">
              A conversation with a QA lead about your product, your release
              cadence, and where quality is actually breaking down today.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {callReassurances.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                  <span className="text-base text-white/75">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <a
             href={DISCOVERY_CALL_URL}
              target="_blank"
  rel="noopener noreferrer"

            className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-yellow-500/20 transition-transform hover:scale-[1.02]"
          >
            Book Your Free Discovery Call
          </a>
        </div>

    <div id="audit" className="rounded-2xl border-t-[3px] border-amber-400 bg-white/[0.04] p-9">
          <h3 className="[font-family:var(--font-display)] text-3xl font-extrabold tracking-tight">
            Get your free QA audit
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-white/62">
            Not ready to talk yet? Send us a few details and we&apos;ll
            return a written assessment of your coverage gaps.
          </p>

          <AnimatePresence mode="wait" initial={false}>
            {submittedFor ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                role="status"
                aria-live="polite"
                className="mt-8 rounded-xl border border-green-400/25 bg-green-400/[0.06] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400/15">
                  <CheckCircle2 className="h-7 w-7 text-green-400" />
                </div>
                <h4 className="mt-5 [font-family:var(--font-display)] text-2xl font-extrabold tracking-tight">
                  Audit request received
                </h4>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Thanks! A QA lead will review{" "}
                  <span className="font-semibold text-white">{submittedFor.company}</span>{" "}
                  and reply within one business day.
                </p>

                <dl className="mt-6 flex flex-col gap-3 rounded-lg border border-white/10 bg-black/20 p-4 text-sm">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                    <dt className="w-20 flex-shrink-0 text-white/45">Email</dt>
                    <dd className="break-all [font-family:var(--font-mono-data)] text-white/85">
                      {submittedFor.email}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                    <dt className="w-20 flex-shrink-0 text-white/45">Link</dt>
                    <dd className="break-all [font-family:var(--font-mono-data)] text-white/85">
                      {submittedFor.website}
                    </dd>
                  </div>
                </dl>

                <p className="mt-5 text-sm text-white/50">
                  A confirmation has been sent to your inbox.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 text-sm font-semibold text-amber-400 underline-offset-4 hover:underline"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleAuditSubmit}
                noValidate
                className="mt-8 flex flex-col gap-4"
              >
                <div>
                  <label htmlFor="audit-email" className="mb-1.5 block text-sm font-medium text-white/60">
                    Work email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    ref={inputRefs.email}
                    id="audit-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    maxLength={AUDIT_LIMITS.email}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "audit-email-error" : undefined}
                    placeholder="you@company.com"
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email && (
                    <p id="audit-email-error" role="alert" className="mt-1.5 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="audit-company" className="mb-1.5 block text-sm font-medium text-white/60">
                    Product or company name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    ref={inputRefs.company}
                    id="audit-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    maxLength={AUDIT_LIMITS.company}
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "audit-company-error" : undefined}
                    placeholder="Acme Inc."
                    className={inputClass(!!errors.company)}
                  />
                  {errors.company && (
                    <p id="audit-company-error" role="alert" className="mt-1.5 text-sm text-red-400">
                      {errors.company}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="audit-website" className="mb-1.5 block text-sm font-medium text-white/60">
                    Website or app link <span className="text-amber-400">*</span>
                  </label>
                  <input
                    ref={inputRefs.website}
                    id="audit-website"
                    name="website"
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    autoCapitalize="none"
                    spellCheck={false}
                    maxLength={AUDIT_LIMITS.website}
                    value={values.website}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-invalid={!!errors.website}
                    aria-describedby={errors.website ? "audit-website-error" : undefined}
                    placeholder="https://"
                    className={inputClass(!!errors.website)}
                  />
                  {errors.website && (
                    <p id="audit-website-error" role="alert" className="mt-1.5 text-sm text-red-400">
                      {errors.website}
                    </p>
                  )}
                </div>

                {/* Honeypot for bots, hidden from real users */}
                <input
                  type="text"
                  name="fax"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />

                {submitError && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-lg border border-red-400/30 bg-red-400/[0.08] px-4 py-3 text-sm text-red-300"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFFDF9] px-6 py-3.5 text-base font-semibold text-[#140a00] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending request...
                    </>
                  ) : (
                    "Request audit"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}