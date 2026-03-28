"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="md:py-20 py-14 bg-black overflow-hidden">
      <div className="container mx-auto px-4 lg:w-11/12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 py-1 px-4 bg-yellow-500/10 text-yellow-500 rounded-full text-sm font-medium border border-yellow-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block animate-pulse" />
            Start Your AI-QA Journey
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Ready to Transform
          <br />
          <span className="text-yellow-500">Your Quality Engineering?</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-base max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Let&apos;s show you exactly how our AI-enhanced QA framework can
          accelerate your delivery, reduce defects, and cut testing costs
          starting with a free strategy session.
        </motion.p>

        <motion.div
          className="flex flex-col items-center sm:flex-row sm:justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="https://calendly.com/manpreetbains_clan-ap_technologies/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            <motion.button
              className="inline-flex items-center justify-center gap-2 bg-yellow-500 border-2 border-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:border-yellow-400 transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <CalendarCheck className="w-4 h-4" /> Book a Free Consultation
            </motion.button>
          </a>
          <Link href="/services" className="flex">
            <motion.button
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white bg-transparent px-8 py-4 rounded-full font-bold hover:border-yellow-500 hover:text-yellow-500 transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore All Services <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
