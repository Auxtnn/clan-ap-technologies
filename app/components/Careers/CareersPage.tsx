"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import parse from "html-react-parser";
import ApplicationModal from "./Applicationmodal";
import { JobSummary } from "@/app/utils/careers";

interface CareersPageProps {
  jobs: JobSummary[];
}

export function CareersPage({ jobs }: CareersPageProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All departments");
  const [type, setType] = useState("All types");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [applyingJob, setApplyingJob] = useState<JobSummary | null>(null);
  const [applyingGeneral, setApplyingGeneral] = useState(false);

  const departments = useMemo(
    () => ["All departments", ...Array.from(new Set(jobs.map((j) => j.department)))],
    [jobs]
  );
  const types = useMemo(
    () => ["All types", ...Array.from(new Set(jobs.map((j) => j.employmentType)))],
    [jobs]
  );

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        search.trim() === "" ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.department.toLowerCase().includes(search.toLowerCase());
      const matchesDept = department === "All departments" || job.department === department;
      const matchesType = type === "All types" || job.employmentType === type;
      return matchesSearch && matchesDept && matchesType;
    });
  }, [jobs, search, department, type]);

  const selectClasses =
    "w-full sm:w-auto appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-9 text-sm text-gray-700 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20";

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-white pb-24 pt-36 md:pb-32 md:pt-44">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDg4IDUwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjM0LDE3OSw4LDAuMTUpIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTQ0IDhsMS0uMzMzVjAiLz48cGF0aCBkPSJNNDQgMTZ2LThsLTkuMDYzLTVMNDQgOE0zNC45MzggMi45NDdMMjYgOGw4LjkzOCA1LjA1M00yNiA4djEwbDguOTM4IDUuMDUzTTM0LjkzOCAyMy4wNTNMNDQgMTh2LTIiLz48cGF0aCBkPSJNMzQuOTM4IDIzLjA1M0wzNCwyMy4zM0wxNiA0MC42N2wxIC4zMzNMMzQgMjMuMzM0IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMzQgMjMuMzM0djE2LjY2N0w0NCA0NSIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTI2IDE4bC0uOTM4LjU0TDkgNGwtLjA2Mi0uMDdMMjYgMTh6TTkgNHYxMEwxNyAxOGw5LTUuMDEgOC45MzgtNS4wNDNMMjYgM3Y1eiIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTE3IDE4djEwbDgtNS4wMTIiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0yNSAyM2wxLjA2Mi0uNjI2TDQ0IDMydi0uMDAxTDI1IDIzek00NCAzMnYxMGwtMTAgNS41TDI1IDQyLjY2NlYzMy4wMkw0NCAzMnoiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0zNCAwdjIuOThMMjYgM3Y1bC05LjA2MiA1LjA0LTkgNC45NkwwIDE0VjRoLS4wMzJMOSA0TTAgMTRsMTYgOS0xLjAzMi42TDAgMTRNMTYgMjN2MTBsLTE2LTlNMTYgMzN2MTBsOSA1LjAwMk0yNSA0M3Y1bDkuMDYyLTUuMDAyTTM0IDQ4djJsOS41LTUuNTAyTDQ0IDQydi0uMDAxTTQ0IDMydi0uMDAxTDQ1IDMyVjQyTDQ0IDQyLjcxIi8+PHBhdGggZD0iTTQ1IDQybDE2LjA5My05LjAwMUw2MiAzM3YxMGwtMTcgOS40OThWNDh6IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNDQuOTM4IDhoLjEyNEw1NCAzLjExOFYzTDQ1IDh6TTU0IDN2MTBsLTkuMDYzIDUiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik00NC45MzggMThsOS4wNjItNUw1NCAxM3YtLjA0MUw2MiA4di0uMDAxTDU0IDN2LjAwMXpNNjIgOHYxMGwtOC45MzggNS4wNTNNNTMuMDYzIDIzLjA1M0w0NSAyOGwtMSA0Ljc1TTQ1IDMyaC4wMzFMNjIgMjMiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik01My4wNjMgMjMuMDUzbC4wMyAyLjE4NyA3Ljg3Ni00LjI5NC4wMy0xLjg5My03LjkzNiAzLjk5OXpNNjEgMjB2MTMiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik04MyAxNHYtLjAxMkw3MyAzLjk4OCIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTczIDR2MTBsOSA1LjQxIiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNODIgMTl2MTBsLTggNC0uMDYzLjA3LTggNC41ODYtLjAzLS42NTYiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik02NSAzM2wtLjA2My0uMzU0TDgyIDE5IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNjUgMzNsLjA2My4zNTQtLjEyNS0uMzc3VjMzbC0zLS4wMjN2MTBsLTE3LjAzMiA5Ljk5OCIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PC9nPjwvc3ZnPg==')]"
        />
        <div className="container relative mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block rounded-full bg-yellow-500/20 px-4 py-1.5 text-sm font-medium text-black"
          >
            We&apos;re hiring
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-3xl text-4xl font-bold text-black md:text-6xl"
          >
            Build what&apos;s next,{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              with us
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg text-gray-600"
          >
            We help clients ship quality software, faster. Come do that work with a team that cares
            about getting it right.
          </motion.p>
        </div>
      </section>

      <section ref={sectionRef} className="container mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="-mt-24 mb-10 flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-lg shadow-black/5 sm:flex-row sm:items-center md:-mt-28"
        >
          <div className="relative flex-1">
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search open roles"
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <div className="relative">
            <select value={department} onChange={(e) => setDepartment(e.target.value)} className={selectClasses}>
              {departments.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="relative">
            <select value={type} onChange={(e) => setType(e.target.value)} className={selectClasses}>
              {types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 text-sm text-gray-500"
        >
          {filteredJobs.length} open {filteredJobs.length === 1 ? "role" : "roles"}
        </motion.p>

        {filteredJobs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 px-6 py-20 text-center"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold text-black">
              {jobs.length === 0 ? "No open roles right now" : "No roles match your filters"}
            </h3>
            <p className="mb-6 max-w-sm text-gray-500">
              {jobs.length === 0
                ? "Check back soon, or send us your resume below and we'll reach out when something opens up."
                : "Try a different search term or clear the filters to see every open role."}
            </p>
            {jobs.length > 0 && (
              <button
                onClick={() => {
                  setSearch("");
                  setDepartment("All departments");
                  setType("All types");
                }}
                className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-amber-500 hover:text-amber-600"
              >
                Clear filters
              </button>
            )}
          </motion.div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredJobs.map((job, index) => {
              const isExpanded = expandedId === job.id;
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                  className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : job.id)}
                    className="flex w-full flex-col items-start gap-3 p-5 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-black">{job.title}</h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                        <span>{job.department}</span>
                        <span className="text-gray-300">•</span>
                        <span>{job.location}</span>
                        <span className="text-gray-300">•</span>
                        <span>{job.employmentType}</span>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-4 self-end sm:self-auto">
                      <span className="hidden rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-700 sm:inline-block">
                        {job.remote ? "Remote" : "On-site"}
                      </span>
                      <motion.svg
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-100 px-5 pb-6 pt-5">
                      {job.excerpt && <p className="mb-5 text-gray-600">{job.excerpt}</p>}

                      <div className="blog-content mb-6 max-w-none">{parse(job.contentHtml)}</div>

                      <motion.button
                        onClick={() => setApplyingJob(job)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-yellow-500/20"
                      >
                        Apply for this role
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-col items-center rounded-2xl bg-[#140a00] px-6 py-14 text-center"
        >
          <h3 className="mb-2 text-2xl font-bold text-white">Don&apos;t see the right role?</h3>
          <p className="mb-7 max-w-md text-white/60">
            We&apos;re always glad to hear from good people. Send us your resume and we&apos;ll reach out
            when something fits.
          </p>
          <motion.button
            onClick={() => setApplyingGeneral(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-3 font-bold text-white shadow-xl shadow-yellow-500/20"
          >
            Send your resume
          </motion.button>
        </motion.div>
      </section>

      <ApplicationModal
        isOpen={applyingJob !== null || applyingGeneral}
        onClose={() => {
          setApplyingJob(null);
          setApplyingGeneral(false);
        }}
        jobTitle={applyingJob?.title ?? "General Application"}
        jobId={applyingJob ? String(applyingJob.id) : "general-application"}
      />
    </div>
  );
}