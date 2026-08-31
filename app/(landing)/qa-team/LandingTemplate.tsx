"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { DISCOVERY_CALL_URL } from "../constants";
import { sectors, type Sector } from "./sectors";

const coverageTypes = [
  { label: "Functional" },
  { label: "API" },
  { label: "Automation" },
  { label: "Mobile" },
  { label: "Performance" },
  { label: "CI/CD" },
];

const defaultPainPoints = [
  "Your developers are spending valuable time testing instead of building.",
  "You've had bugs reach production and damage customer trust.",
  "Your QA hiring process has been open for months with no ideal candidate.",
  "One QA engineer can't cover automation, API, mobile, and performance testing alone.",
  "Every release feels riskier than it should.",
];

const capabilities = [
  { title: "Continuous coverage", body: "Every sprint, every release — not a one-time audit." },
  { title: "Full spectrum", body: "Functional, API, mobile, and automation testing under one team." },
  { title: "Regression, every time", body: "Nothing ships without a full pass on what already works." },
  { title: "Runs in your workflow", body: "Bugs tracked and validated inside Jira, Linear, or whatever you already use." },
  { title: "Built into CI/CD", body: "Testing runs automatically as part of your build process." },
  { title: "Weekly status reports", body: "What was tested, what passed, what's still open." },
  { title: "Release readiness sign-off", body: "A clear go/no-go before anything reaches production." },
  { title: "Scales with your product", body: "Coverage grows as your product does — no re-hiring, ever." },
];

const industries = [
  { name: "SaaS", detail: "Protecting recurring revenue with flawless deployments." },
  { name: "FinTech", detail: "Zero tolerance for calculation errors or transaction bugs." },
  { name: "HealthTech", detail: "Ensuring compliance, reliability, and data integrity." },
  { name: "EdTech", detail: "Scaling cleanly through peak usage and new semesters." },
  { name: "Restaurant Tech", detail: "Keeping every order, table, and transaction flowing without a hiccup." },
  { name: "Growing engineering teams", detail: "Offloading QA so developers can focus on features." },
];

const testimonials = [
  {
    quote:
      "The Clan-AP team played a crucial role as a Quality Assurance specialist, showcasing exceptional precision and professionalism. Their meticulous testing and attention to detail significantly reduced defects, enhancing the efficiency and quality of software delivery.",
    name: "Alessio Ricco",
    role: "CTO, Dashy Dash",
  },
  {
    quote:
      "The Clan-AP team joined us to build out an automated test suite using Playwright. They did a fantastic job, constantly demonstrating the ability to create and implement efficient, robust automated test suites and effectively identify defects and potential issues throughout the application.",
    name: "Aaron Friedlander",
    role: "Head of Engineering, Passes",
  },
];

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Hero({ kicker }: { kicker?: string }) {
  return (
    <section className="relative overflow-hidden bg-white pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(237,140,1,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(237,140,1,0.05),transparent_40%)]" />
      <div className="container relative mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          Limited discovery calls available this week
        </motion.span>

        {kicker && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-600"
          >
            {kicker}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-black md:text-6xl"
        >
          Get a full QA team for{" "}
          <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            the cost of one engineer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-gray-600"
        >
          Stop shipping bugs. Stop delaying releases. Stop spending months hiring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9"
        >
          <a
            href={DISCOVERY_CALL_URL}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-yellow-500/25 transition-transform hover:scale-[1.02]"
          >
            Book a 30-Minute Discovery Call
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-y-8 divide-gray-100 sm:grid-cols-4 sm:divide-x"
        >
          {[
            ["500+", "Bugs caught per month"],
            ["3x", "Faster release cycles"],
            ["98%", "Client retention"],
            ["$120k", "Saved vs. in-house hire"],
          ].map(([stat, label]) => (
            <div key={label} className="px-2 text-center">
              <div className="text-2xl font-bold text-amber-600 md:text-3xl">{stat}</div>
              <div className="mt-1 text-xs text-gray-500 md:text-sm">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectorSwitcher({ currentSlug }: { currentSlug: string }) {
  const items = [{ slug: "", label: "All Industries" }, ...sectors.map((s) => ({ slug: s.slug, label: s.label }))];

  return (
    <section className="border-y border-gray-100 bg-gray-50/60 py-6">
      <div className="container mx-auto flex flex-col items-center gap-3 px-4 sm:flex-row sm:justify-center">
        <span className="text-xs font-bold uppercase tracking-wide text-gray-400">QA built around your industry</span>
        <div className="flex flex-wrap justify-center gap-2">
          {items.map((item) => {
            const isActive = item.slug === currentSlug;
            const href = item.slug ? `/qa-team/${item.slug}` : "/qa-team";
            return (
              <Link
                key={item.label}
                href={href}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-amber-300 hover:text-amber-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SoundFamiliar({ intro, painPoints }: { intro?: string; painPoints: string[] }) {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-3xl font-bold text-black md:text-4xl">Sound familiar?</h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500" />
          {intro && <p className="mt-5 text-gray-600">{intro}</p>}
        </Reveal>

        <div className="mx-auto flex max-w-2xl flex-col gap-3">
          {painPoints.map((point, i) => (
            <Reveal key={point} delay={i * 0.07}>
              <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <p className="text-gray-700">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesGrid() {
  return (
    <section className="bg-[#140a00] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mb-14 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-400">QA as a team</span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Everything you need. Always.</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-amber-500/30 hover:bg-white/[0.05]">
                <h3 className="mb-2 font-bold text-white">{cap.title}</h3>
                <p className="text-sm text-white/60">{cap.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoverageComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto mb-6 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            The output of a team.
            <br />
            The budget of one hire.
          </h2>
          <p className="mt-4 text-gray-600">
            A mid-level QA engineer in the US runs $10,000–12,000 a month once you
            include salary, benefits, and hiring time. For that same budget, here&apos;s
            what one engineer can realistically cover —
          </p>
        </Reveal>

        <div ref={ref} className="mx-auto max-w-3xl">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-bold uppercase tracking-wide text-gray-400">One engineer</span>
            <span className="text-sm text-gray-400">~1–2 specialties</span>
          </div>
          <div className="mb-10 flex flex-wrap gap-2">
            {coverageTypes.map((c, i) => (
              <span
                key={c.label}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  i < 1
                    ? "border-gray-300 bg-gray-100 text-gray-600"
                    : "border-gray-200 bg-gray-50 text-gray-300"
                }`}
              >
                {c.label}
              </span>
            ))}
          </div>

          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-bold uppercase tracking-wide text-amber-600">Clan-AP, same budget</span>
            <span className="text-sm text-amber-600">every specialty, covered</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {coverageTypes.map((c, i) => (
              <motion.span
                key={c.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.12 }}
                className="flex items-center gap-1.5 rounded-full border border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-1.5 text-sm font-bold text-amber-700"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {c.label}
              </motion.span>
            ))}
          </div>

          <Reveal delay={1} className="mt-10 text-center">
            <p className="text-gray-500">
              Not a bigger invoice. The same money you already planned to spend — covering
              everything one person structurally can&apos;t.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Industries({ highlightName }: { highlightName?: string }) {
  return (
    <section className="bg-gray-50 pb-20 pt-10 md:pb-28">
      <div className="container mx-auto px-4">
        <Reveal className="mb-12">
          <span className="inline-block w-1.5 self-stretch rounded-full bg-amber-500" />
          <h2 className="mt-4 text-2xl font-bold text-black md:text-3xl">Who we partner with</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const isFeatured = ind.name === highlightName;
            return (
              <Reveal key={ind.name} delay={i * 0.06}>
                <div
                  className={`h-full rounded-xl border p-6 shadow-sm transition-colors ${
                    isFeatured
                      ? "border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50 ring-1 ring-amber-200"
                      : "border-gray-100 bg-white"
                  }`}
                >
                  <h3 className={`mb-2 font-bold ${isFeatured ? "text-amber-700" : "text-black"}`}>{ind.name}</h3>
                  <p className={`text-sm ${isFeatured ? "text-amber-700/80" : "text-gray-500"}`}>{ind.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section className="bg-[#140a00] py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Trusted by engineering leaders</h2>
          <p className="mx-auto mt-3 max-w-md text-white/50">
            Real feedback from teams who handed QA to us.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-amber-500/20 bg-white/[0.03] p-8 md:p-10"
            >
              <p className="text-lg leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-white/50">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-amber-500" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto max-w-2xl rounded-2xl bg-[#140a00] px-8 py-14 text-center md:px-14">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready to strengthen your product quality?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            Book a 30-minute discovery call. No obligation, no pricing tiers — just a
            conversation about your product.
          </p>
          <a
            href={DISCOVERY_CALL_URL}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-yellow-500/25 transition-transform hover:scale-[1.02]"
          >
            Book My Discovery Call
          </a>
          <p className="mt-4 text-xs text-white/40">Limited discovery calls available this week</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function LandingTemplate({ sector }: { sector?: Sector }) {
  return (
    <>
      <Hero kicker={sector?.kicker} />
      <SectorSwitcher currentSlug={sector?.slug ?? ""} />
      <SoundFamiliar intro={sector?.intro} painPoints={sector?.painPoints ?? defaultPainPoints} />
      <CapabilitiesGrid />
      <CoverageComparison />
      <Industries highlightName={sector?.industryName} />
      <Testimonials />
      <FinalCta />
    </>
  );
}