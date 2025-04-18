"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

interface ServiceCaseStudyProps {
  caseStudy: CaseStudy;
}

const ServiceCaseStudy = ({ caseStudy }: ServiceCaseStudyProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section id="case-study" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:w-11/12">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium mb-4">
              Success Story
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Case Study
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See how we've helped real clients achieve exceptional results.
          </motion.p>
        </div>

        {/* Case study content */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm ">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Content */}
            <motion.div
              className="p-8 md:p-12"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>

              <div className="mb-6">
                <span className="text-sm text-gray-500">Client: </span>
                <span className="font-medium">{caseStudy.client}</span>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
                <p className="text-gray-600">{caseStudy.challenge}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
                <p className="text-gray-600">{caseStudy.solution}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Results</h4>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <span className="text-yellow-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-600">{result}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              className="relative min-h-[300px]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {caseStudy.image ? (
                <Image
                  src={caseStudy.image}
                  alt="Case study illustration"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                  <span>Case study image</span>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:bg-gradient-to-l" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCaseStudy;
