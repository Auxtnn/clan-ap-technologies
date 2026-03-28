"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const heroStats = [
  {
    value: 70,
    suffix: "%",
    label: "Faster Test Execution",
    desc: "AI-generated suites eliminate manual authoring overhead entirely.",
  },
  {
    value: 60,
    suffix: "%",
    label: "Defect Detection Rate",
    desc: "Predictive analytics surfaces high-risk modules before staging.",
  },
  {
    value: 50,
    suffix: "%",
    label: "Reduced Manual Effort",
    desc: "Self-healing automation keeps teams focused on exploration.",
  },
  {
    value: 3,
    suffix: "×",
    label: "Release Cycle Speed",
    desc: "Continuous AI testing integrates into CI/CD for rapid releases.",
  },
];

const CountUp = ({ value, inView }: { value: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return setCount(0);
    let start = 0;
    const increment = value / (1800 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <>{count}</>;
};

const AIHeroStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-black py-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:w-11/12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-1 px-4 bg-yellow-500/10 text-yellow-500 rounded-full text-sm font-medium border border-yellow-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block animate-pulse" />
            Results That Speak
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {heroStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              className="bg-black px-8 py-10 flex flex-col items-center text-center group hover:bg-yellow-500/5 transition-colors duration-300"
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-2 leading-none">
                <CountUp value={s.value} inView={inView} />
                <span className="text-yellow-500">{s.suffix}</span>
              </div>
              <div className="text-white font-bold text-sm mb-3">{s.label}</div>
              <div className="w-8 h-px bg-yellow-500/40 mb-3 group-hover:w-16 transition-all duration-300" />
              <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIHeroStats;
