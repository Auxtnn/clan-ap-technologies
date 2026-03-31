"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Zap, TrendingUp } from "lucide-react";

const AIHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="pt-36 pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:w-11/12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 py-1 px-4 bg-yellow-500/10 text-yellow-600 rounded-full text-sm font-medium border border-yellow-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block animate-pulse" />
            Powered with Quality Engineering
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-[1.05]"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Smarter QA.
          <br />
          <span className="text-yellow-500">Powered by AI.</span>
        </motion.h1>

        <motion.p
          className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          At Clan-AP Technologies, we integrate cutting-edge Artificial
          Intelligence into every stage of the Quality Assurance lifecycle
          accelerating delivery, reducing defects, and transforming how we serve
          our clients.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            href="https://calendly.com/manpreetbains_clan-ap_technologies/discovery-call"
            target="_blank"
          >
            <motion.button
              className="bg-black hover:bg-transparent transition-colors hover:border-2 border-black border-2 hover:text-black text-white px-8 py-4 rounded-full font-bold relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Get a Free Consultation</span>
              <motion.span
                className="absolute inset-0 bg-yellow-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </Link>

          <Link href="/services">
            <motion.button
              className="border-2 border-black bg-transparent px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our AI Approach
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AIHero;
