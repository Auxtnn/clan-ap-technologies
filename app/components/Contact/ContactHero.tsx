"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ContactHero = () => {
  return (
    <section className="pt-32 pb-2 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-grid-pattern" />
        </div>

        {/* Abstract shapes */}
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-500/5 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-100 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex justify-center" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-yellow-500 text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-500 ml-1 md:ml-2 text-sm font-medium">
                      Contact Us
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's discuss how we can help you achieve exceptional software
            quality. Our team of experts is ready to assist with your QA testing
            needs.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="#contact-form"
              className="inline-flex items-center text-yellow-500 hover:text-yellow-600 transition-colors"
            >
              <span className="mr-2">Request a consultation</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
