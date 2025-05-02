"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Requirements Analysis",
    description:
      "We begin by thoroughly understanding your application, business requirements, and quality objectives to create a tailored testing strategy.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Test Planning",
    description:
      "Our team develops comprehensive test plans, test cases, and scenarios based on your requirements, with clear metrics for success.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Test Execution",
    description:
      "We execute tests systematically, implementing both manual and automated testing approaches as appropriate for your project needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Defect Reporting",
    description:
      "We provide detailed, actionable defect reports with clear reproduction steps, severity levels, and supporting evidence.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Regression Testing",
    description:
      "After defect fixes, we perform thorough regression testing to ensure new changes don't introduce additional issues.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Reporting & Analysis",
    description:
      "We deliver comprehensive test reports with insights, metrics, and recommendations for continuous improvement.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:w-11/12">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium mb-4">
              Our Methodology
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our QA Process
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our structured approach ensures comprehensive quality assurance at
            every stage of your software development lifecycle.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 transform -translate-x-1/2 hidden md:block" />

          {/* Process steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isInView={isInView}
                isAlternate={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  step: {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
  isInView: boolean;
  isAlternate: boolean;
}

const ProcessStep = ({
  step,
  index,
  isInView,
  isAlternate,
}: ProcessStepProps) => {
  const isEven = index % 2 === 0;
  const alignmentClass = isAlternate
    ? isEven
      ? "md:flex-row"
      : "md:flex-row-reverse"
    : "md:flex-row";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.1,
      }}
      className={`flex flex-col ${alignmentClass} items-center gap-6 md:gap-10`}
    >
      {/* Timeline node */}
      <div className="relative flex-shrink-0 z-10">
        <div className="w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center shadow-sm">
          <div className="text-yellow-500">{step.icon}</div>
        </div>

        {/* Step number badge */}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-500 text-white text-xs font-bold flex items-center justify-center shadow-sm">
          {step.number}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm md:max-w-lg w-full">
        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </motion.div>
  );
};

export default ProcessSection;
