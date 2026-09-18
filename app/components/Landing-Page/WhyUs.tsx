"use client";

import { useMemo, useState } from "react";

const oneEngineerPoints = [
  "One or two specialties at best",
  "Three-month hiring process before day one",
  "Sick days and PTO leave coverage gaps",
  "Ramp-up, management, and retention are your problem",
];

const clanApPoints = [
  "A dedicated QA lead plus engineers on your product",
  "Automation, manual, API, and performance expertise together",
  "Start testing next week, not next quarter",
  "Uninterrupted coverage, the team absorbs absences, not your release",
];

export default function WhyUs() {
  const [rate, setRate] = useState(11000);
  const annual = useMemo(() => rate * 12, [rate]);
  const format = (n: number) => "$" + n.toLocaleString("en-US");

  return (
    <section id="why" className="bg-[#140a00] px-5 py-24 text-[#FFFDF9] md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-balance [font-family:var(--font-display)] max-w-5xl text-4xl font-black tracking-tight md:text-5xl">
          Same budget. Four times the coverage.
        </h2>
        <p className="mt-5 max-w-4xl text-xl text-white/62">
          A mid-level QA engineer in the US costs $10,000 to $12,000 a month
          once you count salary, benefits, recruiting, and ramp-up time.
          That&apos;s the anchor. Here&apos;s what the same money buys.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          <div className="bg-[#140a00] p-7">
            <div className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-4">
              <h3 className="[font-family:var(--font-display)] text-xl font-bold text-white/70">
                One in-house engineer
              </h3>
              <span className="[font-family:var(--font-mono-data)] text-xs text-white/45">$10-12k/mo</span>
            </div>
            <div className="flex flex-col gap-4 pt-5">
              {oneEngineerPoints.map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="[font-family:var(--font-mono-data)] text-white/35">—</span>
                  <span className="text-xl text-white/60">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-amber-500/[0.06] p-7">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-amber-500 to-yellow-500" />
            <div className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-4">
              <h3 className="[font-family:var(--font-display)] text-xl font-extrabold">Clan-AP, same budget</h3>
              <span className="[font-family:var(--font-mono-data)] text-xs text-amber-400">full team</span>
            </div>
            <div className="flex flex-col gap-4 pt-5">
              {clanApPoints.map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-xl text-white/90">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}