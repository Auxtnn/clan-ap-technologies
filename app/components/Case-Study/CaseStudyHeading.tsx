"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CaseStudyHeadingProps {
  title: string;
  subtitle: string;
  category: string;
  backgroundVariant: any;
}

export const CaseStudyHeading: React.FC<CaseStudyHeadingProps> = ({
  title,
  subtitle,
  category,
  backgroundVariant = "pattern",
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} className="py-1">
      {/* Pattern background */}
      {backgroundVariant === "pattern" && (
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute md:block hidden right-0 top-50 w-64 h-64 rounded-full bg-yellow-500"></div>
          <div className="absolute md:block  md:bottom-[50%] hidden left-[5%]  w-32 h-32 rounded-full bg-black"></div>
        </div>
      )}

      <div className="container mx-auto px-4 lg:w-11/12">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="md:w-1/4 flex flex-col items-center md:items-start mb-8 md:mb-0"
            variants={itemVariants}
          ></motion.div>

          {/* Main content */}
          <div>
            {/* Category tag */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block py-1.5 px-4 bg-yellow-500/20 text-black rounded-full text-sm font-medium">
                {category || "Case Study"}
              </span>
            </motion.div>

            <motion.h2
              className="font-bold mb-6  text-3xl md:text-4xl"
              variants={itemVariants}
            >
              {title}
            </motion.h2>

            {/* Subtitle with decorative elements */}
            <motion.div className="relative" variants={itemVariants}>
              <p className={`text-gray-600`}>{subtitle}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyHeading;
