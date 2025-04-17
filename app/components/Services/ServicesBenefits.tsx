"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
}

const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:w-11/12">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Key Benefits
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our approach delivers measurable advantages that enhance your
            software quality and development process.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              benefit={benefit}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
  isInView: boolean;
}

const BenefitCard = ({ benefit, index, isInView }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 h-full flex flex-col"
    >
      {/* Icon */}
      <div className="mb-4 text-4xl">{benefit.icon}</div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>

      {/* Description */}
      <p className="text-gray-600 flex-grow">{benefit.description}</p>

      {/* Bottom accent line */}
      <motion.div
        className="h-1 w-16 bg-yellow-500 mt-6 rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: 64 } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
      />
    </motion.div>
  );
};

export default ServiceBenefits;
