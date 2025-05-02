"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ApproachStep {
  title: string;
  description: string;
  icon: any;
}

interface ServiceApproachProps {
  approach: ApproachStep[];
}

const ServiceApproach = ({ approach }: ServiceApproachProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:w-11/12">
        {/* Section header */}
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
            Our Approach
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We follow a proven methodology to deliver exceptional results that
            exceed your expectations.
          </motion.p>
        </div>

        {/* Approach steps */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-0.5 bg-gray-100 md:hidden" />

          <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
            {approach.map((step, index) => (
              <ApproachStep
                key={index}
                step={step}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ApproachStepProps {
  step: ApproachStep;
  index: number;
  isInView: boolean;
}

const ApproachStep = ({ step, index, isInView }: ApproachStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.1,
      }}
      className="relative md:text-center"
    >
      {/* Mobile timeline dot */}
      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center z-10 md:hidden">
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
      </div>

      {/* Step number */}
      <div className="hidden md:flex md:items-center md:justify-center md:mx-auto md:mb-6">
        <div className="w-16 h-16 rounded-full text-yellow-500  bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-3xl">
          {step.icon}
        </div>

        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-500 text-white text-xs font-bold flex items-center justify-center shadow-sm">
          {index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="pl-16 md:pl-0">
        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>

      {/* Connector line (only visible on larger screens) */}
      {index < 4 && (
        <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-100 lg:-right-6 lg:w-12">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-500 rounded-full"></div>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceApproach;
