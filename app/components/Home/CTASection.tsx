"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-black">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="h-full w-full grid grid-cols-12 grid-rows-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {Array.from({ length: 72 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.01 }}
              />
            ))}
          </motion.div>
        </div>

        {/* Animated circles */}
        <motion.div
          className="absolute top-20 left-[10%] w-48 h-48 rounded-full bg-[#FFD966]/10"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-[#FFD966]/5"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />

        {/* Diagonal line */}
        <motion.div
          className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute h-[150%] w-0.5 bg-gradient-to-b from-transparent via-yellow-500 to-transparent -left-20 top-0"
            animate={{
              left: ["0%", "120%"],
              rotate: 15,
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          />

          <motion.div
            className="absolute h-[150%] w-0.5 bg-gradient-to-b from-transparent via-yellow-500/70 to-transparent -left-20 top-0"
            animate={{
              left: ["10%", "130%"],
              rotate: -10,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 3,
              delay: 2,
            }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-2"
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-medium">
              Ready to Elevate Your Software Quality?
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's Perfect Your{" "}
            <span className="text-yellow-500">Software Together</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Partner with our QA experts to ensure your software exceeds
            expectations. From automated testing to comprehensive quality
            assurance, we're here to help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.button
                className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>

            <Link href="/services">
              <motion.button
                className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom geometric accent */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <motion.div
          className="w-full h-1 bg-yellow-500"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </section>
  );
};

export default CTASection;
