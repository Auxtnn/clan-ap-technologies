"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What does the engagement model look like?",
    a: "A dedicated QA lead plus engineers embedded in your sprints on a monthly retainer. They join your standups, your board, and your CI, you manage priorities, we manage the QA craft.",
  },
  {
    q: "How does pricing work?",
    a: "A flat monthly retainer scoped to team size and coverage needs, benchmarked against the cost of one in-house hire. Exact figures are quoted after the discovery call.",
  },
  {
    q: "How do you handle NDAs and security?",
    a: "We sign your NDA before access is granted and work within your access controls and environments. Specific compliance requirements are reviewed case by case.",
  },
  {
    q: "How fast is onboarding?",
    a: "Testing typically starts the week after the discovery call: strategy in the first days, first executed cycles inside your next sprint.",
  },
  {
    q: "Can the team flex up or down?",
    a: "Yes, coverage scales with your release load, adding specialists for a mobile launch or a performance push and scaling back afterwards.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#FFFDF9] px-5 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-black/10 pb-10 md:flex-row md:items-end">
          <h2 className="[font-family:var(--font-display)] max-w-5xl text-4xl font-black tracking-tight md:text-5xl">
            Questions engineering leaders ask
          </h2>
   
        </div>

        <div className="mx-auto flex max-w-4xl flex-col">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-t border-black/10 last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-amber-700"
                >
                  <span className="[font-family:var(--font-display)] text-xl font-bold tracking-tight md:text-2xl">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border text-lg transition-colors ${
                      isOpen ? "border-amber-500 bg-amber-500 text-white" : "border-black/15 text-black/50"
                    }`}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && <p className="max-w-2xl pb-8 text-lg leading-relaxed text-black/68">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}