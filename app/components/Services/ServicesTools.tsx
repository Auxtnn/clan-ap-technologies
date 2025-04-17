"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Tool {
  name: string;
  description: string;
  logo: string;
}

interface ServiceToolsProps {
  tools: Tool[];
}

const ServiceTools = ({ tools }: ServiceToolsProps) => {
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
              Technologies
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tools & Technologies
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We leverage industry-leading tools and frameworks to deliver
            exceptional results.
          </motion.p>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              tool={tool}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ToolCardProps {
  tool: Tool;
  index: number;
  isInView: boolean;
}

const ToolCard = ({ tool, index, isInView }: ToolCardProps) => {
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
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex items-start"
    >
      {/* Logo placeholder */}
      <div className="w-16 h-16 relative bg-gray-100 rounded-lg flex-shrink-0 mr-4 overflow-hidden">
        {tool.logo ? (
          <Image
            src={tool.logo}
            alt={`${tool.name} logo`}
            fill
            className="object-contain p-2"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl">
            {tool.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
        <p className="text-gray-600 text-sm">{tool.description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceTools;
