"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Accelerated Test Execution",
    description:
      "Our internal workflows are optimized to process large test cycles significantly faster — reducing delivery timelines without sacrificing depth or accuracy.",
    delay: 0.1,
  },
  {
    number: "02",
    title: "Precision Defect Analysis",
    description:
      "We identify patterns, root causes, and risk areas with greater consistency — resulting in bug reports that are clear, prioritized, and dev-ready.",
    delay: 0.2,
  },
  {
    number: "03",
    title: "Intelligent Documentation",
    description:
      "From test plans to summary reports, our documentation is structured, thorough, and delivered on time — every single engagement.",
    delay: 0.3,
  },
  {
    number: "04",
    title: "Scalable Quality Operations",
    description:
      "Whether you're a startup scaling fast or an enterprise managing complex releases, our operations adapt to your volume and velocity seamlessly.",
    delay: 0.4,
  },
];

const IntelligentQA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="md:py-24 py-14 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(254,83,0,0.12) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(254,83,0,0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />

        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="iq-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#iq-grid)" />
        </svg>

        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent"
          style={{ left: "8%" }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent"
          style={{ left: "92%" }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5 }}
              className="mb-4 md:text-left text-center"
            >
              <span className="inline-flex items-center gap-2 py-1 px-3 bg-yellow-500/15 text-yellow-500 rounded-full text-sm font-medium border border-yellow-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
                Advanced Capabilities
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-left text-center md:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Intelligent QA.{" "}
              <span className="text-yellow-500">Delivered at Scale.</span>
            </motion.h2>
          </div>

          <motion.p
            className="text-gray-400 md:text-right text-center text-base leading-relaxed max-w-lg lg:text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We've modernized our processes with advanced intelligence
            capabilities, enabling faster turnarounds, sharper insights, and
            consistently high-quality outcomes for every client.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: {
    number: string;
    title: string;
    description: string;
    delay: number;
  };
  isInView: boolean;
}

const FeatureCard = ({ feature, isInView }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        duration: 0.55,
        delay: feature.delay,
        type: "spring",
        stiffness: 90,
      }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-yellow-500/30 transition-all duration-300 overflow-hidden p-7"
    >
      <motion.div className="absolute top-0 left-0 right-0 h-px bg-yellow-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="absolute top-5 right-6 text-6xl font-black text-white/[0.04] group-hover:text-yellow-500/10 transition-colors duration-300 leading-none select-none">
        {feature.number}
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-yellow-500/60" />
          <span className="text-yellow-500/70 text-xs font-mono tracking-widest uppercase">
            {feature.number}
          </span>
        </div>

        <h3 className="text-white text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
          {feature.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {feature.description}
        </p>
      </div>

      <motion.div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-yellow-500/[0.04] group-hover:bg-yellow-500/[0.08] transition-colors duration-300" />
    </motion.div>
  );
};

export default IntelligentQA;
