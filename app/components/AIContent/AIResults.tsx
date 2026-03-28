"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  AlertTriangle,
  Activity,
  RefreshCw,
  TrendingUp,
  Cpu,
} from "lucide-react";

const resultStats = [
  {
    value: 70,
    suffix: "%",
    label: "Faster Test Execution",
    desc: "AI-generated suites run faster with zero manual test authoring overhead.",
    icon: Zap,
  },
  {
    value: 60,
    suffix: "%",
    label: "More Defects Caught Earlier",
    desc: "Predictive analytics surfaces high-risk modules before they reach staging.",
    icon: AlertTriangle,
  },
  {
    value: 50,
    suffix: "%",
    label: "Reduction in Manual Effort",
    desc: "Automation and self-healing keeps teams focused on exploration, not maintenance.",
    icon: Activity,
  },
  {
    value: 80,
    suffix: "%",
    label: "Less Script Maintenance",
    desc: "Self-healing tests adapt to UI changes without manual locator updates.",
    icon: RefreshCw,
  },
  {
    value: 40,
    suffix: "%",
    label: "Increase in Test Coverage",
    desc: "AI generates broader scenario coverage than manual case writing ever could.",
    icon: TrendingUp,
  },
  {
    value: 3,
    suffix: "×",
    label: "Faster Release Cycles",
    desc: "Continuous AI testing integrates into CI/CD for rapid, confident releases.",
    icon: Cpu,
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

const AIResults = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="md:py-12 py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium">
              Real-World Impact
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-black text-black mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            AI-QA Results Across Our{" "}
            <span className="text-yellow-500">Client Projects</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real, measurable improvements achieved across our client portfolio
            after adopting our AI-enhanced QA framework.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resultStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + i * 0.08,
                  type: "spring",
                  stiffness: 90,
                }}
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-md p-7 hover:shadow-xl hover:border-yellow-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-yellow-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <motion.div
                  className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-yellow-500/10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />

                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="text-4xl md:text-5xl font-bold mb-2 text-black flex items-center">
                  <motion.span
                    animate={inView ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 + 1.8 }}
                  >
                    <CountUp value={stat.value} inView={inView} />
                  </motion.span>
                  <span className="text-yellow-500">{stat.suffix}</span>
                </div>

                <h4 className="text-black font-bold text-base mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                  {stat.label}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {stat.desc}
                </p>

                <div className="absolute bottom-0 left-[10%] right-[10%] h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIResults;
