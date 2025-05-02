"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import ServicesPartnerLogos from "./PartnerLogosServices";
import PartnerLogosServices from "./PartnerLogosServices";

const ServicesCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-grid-pattern" />
        </div>

        {/* Animated elements */}
        <motion.div
          className="absolute top-40 left-10 w-64 h-64 rounded-full bg-yellow-500/5"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-yellow-500/5"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        />

        {/* Diagonal lines */}
        <motion.div
          className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute h-[150%] w-0.5 bg-gradient-to-b from-transparent via-yellow-500 to-transparent -left-20 top-0"
            animate={{
              left: ["0%", "120%"],
              rotate: 15,
            }}
            transition={{
              duration: 8,
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
              duration: 10,
              repeat: Infinity,
              repeatDelay: 3,
              delay: 2,
            }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="lg:w-11/12 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-medium mb-4">
              Get Started Today
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl max-w-3xl mx-auto  md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to Elevate Your
            <br />
            <span className="text-yellow-500">Software Quality?</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Partner with our QA experts to ensure your software exceeds
            expectations. From automated testing to comprehensive quality
            assurance, we're here to help.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="https://calendly.com/manpreetbains_clan-ap_technologies/discovery-call"
              target="_blank"
            >
              <motion.button
                className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  Request a Free Consultation
                </span>
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>

            <Link href="#">
              <motion.button
                className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Case Studies
              </motion.button>
            </Link>
          </motion.div>
          <PartnerLogosServices />
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
