"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OurMission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section
      id="our-mission"
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-32 bg-wave-pattern opacity-5 transform -scale-x-100" />

        <motion.div
          className="absolute top-40 right-10 w-64 h-64 rounded-full bg-yellow-500/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium">
              Our Purpose
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Mission & Vision
          </motion.h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -mr-16 -mt-16" />

            <div className="relative z-10">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To elevate software quality across the industry by providing
                comprehensive, innovative testing solutions that ensure
                exceptional user experiences and protect our clients' reputation
                and business interests.
              </p>
              <div className="w-20 h-1 bg-yellow-500 rounded-full" />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -mr-16 -mt-16" />

            <div className="relative z-10">
              <div className="text-3xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To become the global standard for software quality assurance by
                continuously pioneering new testing methodologies, building the
                industry's most talented QA team, and setting benchmarks for
                excellence in every project we undertake.
              </p>
              <div className="w-20 h-1 bg-yellow-500 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Commitment Statement */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <blockquote className="text-xl text-gray-600 italic">
            "We believe that exceptional software quality is not just a
            technical achievement, but a fundamental business advantage. Our
            commitment is to make that advantage accessible to every
            organization, regardless of size or industry."
          </blockquote>
          <p className="mt-4 font-semibold">
            - Manpreet Bains, Co-founder & CEO
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
