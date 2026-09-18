"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DISCOVERY_CALL_URL } from "@/app/(landing)/constants";



export default function Hero({ kicker }: { kicker?: string }) {
    const prefersReducedMotion = useReducedMotion();
  return (
    <section className="bg-[#FFFDF9] px-5 pb-20 pt-40 text-[#140a00] md:pb-28 md:pt-48">
      <div className="mx-auto max-w-7xl text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1.5 [font-family:var(--font-mono-data)] text-xs text-amber-700"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shadow-[0_0_0_4px_rgba(237,140,1,0.18)]" />
          Limited discovery calls available this week
        </motion.span>

        {kicker && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-3 text-sm font-semibold text-amber-600"
          >
            {kicker}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-balance [font-family:var(--font-display)] text-[clamp(3rem,8.5vw,6rem)] font-black leading-[0.95] tracking-tight text-black"
        >
          A full QA team,
          <br />
          <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            one engineer&apos;s budget.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-black/62"
        >
          Whatever you&apos;re building, our QA engineers plug straight into
          your team from week one with full automation, API, mobile, and
          performance coverage. No matter the industry, your developers spend
          their time building, not testing.
        </motion.p>

      
      
 <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.25 }}
  className="mt-10 flex flex-wrap items-center justify-center gap-3"
>
  <div className="relative inline-block overflow-hidden rounded-xl p-[6px]">
    {prefersReducedMotion ? (
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500" />
    ) : (
      <motion.div
        className="absolute inset-[-60%] bg-[conic-gradient(from_0deg,transparent_0deg,#ed8c01_90deg,#f5a012_180deg,transparent_270deg,#ed8c01_360deg)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    )}
    <a
      href={DISCOVERY_CALL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 inline-flex items-center gap-2 rounded-[6px] bg-gradient-to-r from-amber-500 to-yellow-500 px-7 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.03]"
    >
      Book Your Free Discovery Call
    </a>
  </div>

  <a
    href="#audit"
    className="inline-flex items-center gap-2 rounded-xl border-[4px] border-[#140a00] bg-[#FFFDF9] px-7 py-4 text-base font-medium text-black transition-transform hover:scale-[1.03]"
  >
    Get Your Free QA Audit
  </a>
</motion.div>
      </div>
    </section>
  );
}