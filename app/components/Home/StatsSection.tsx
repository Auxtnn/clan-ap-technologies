"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const stats: StatProps[] = [
  {
    value: 98,
    label: "Success Rate",
    suffix: "%",
    delay: 0.1,
  },
  {
    value: 100,
    label: "Projects Completed",
    delay: 0.1,
  },
  {
    value: 15000,
    label: "Testing Hours",
    suffix: "+",
    delay: 0.5,
  },
  {
    value: 99,
    label: "Client Satisfaction",
    suffix: "%",
    delay: 0.7,
  },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-10 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-40 bg-white" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-grid-pattern" />
        </div>
      </div>

      {/* Background shapes */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-[#FFD966]/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-[#001F3F]/5"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 bg-[#FFD966]/20 text-black rounded-full text-sm font-medium mb-4">
            Our Impact
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Delivering Measurable Results
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our QA expertise has helped companies achieve exceptional software
            quality and reliability.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} inView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({
  value,
  label,
  suffix = "",
  delay = 0,
  inView,
}: StatProps & { inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000; // ms
      const increment = end / (duration / 16); // Update every 16ms (approx 60fps)

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [inView, value]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-md p-8 relative overflow-hidden border border-gray-100"
    >
      {/* Background accent */}
      <motion.div
        className="absolute -right-6 -top-6 w-16 h-16 rounded-full bg-[#FFD966]/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: delay * 2,
        }}
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className="flex flex-col items-center text-center"
      >
        <div className="text-4xl md:text-5xl font-bold mb-2 text-black flex items-center">
          <motion.span
            animate={inView ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5, delay: delay + 1.8 }}
          >
            {count}
          </motion.span>
          <span className="text-yellow-500">{suffix}</span>
        </div>

        <div className="text-gray-600 font-medium">{label}</div>
      </motion.div>

      {/* Underline accent */}
      <motion.div
        className="absolute bottom-0 left-[10%] right-[10%] h-0.5 bg-yellow-500"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.5 }}
      />
    </motion.div>
  );
};

export default StatsSection;
