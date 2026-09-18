"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 98, suffix: "%", label: "Project success rate" },
  { target: 100, suffix: "+", label: "Projects completed" },
  { target: 50000, suffix: "+", label: "Test cases automated" },
  { target: 99, suffix: "%", label: "Client satisfaction" },
];

function AnimatedStat({ target, suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (value) => setCount(Math.round(value)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <div ref={ref} className="px-4 py-8 text-center sm:px-6">
      <div className="[font-family:var(--font-display)] text-4xl font-extrabold tracking-tight md:text-5xl">
        {count.toLocaleString("en-US")}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-white/55">{label}</div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-[#140a00] px-5 py-14 text-[#FFFDF9]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 border-y border-white/10 sm:grid-cols-4">
        {stats.map((stat) => (
          <AnimatedStat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}