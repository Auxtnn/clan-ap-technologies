"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [
  {
    question: "What makes your QA testing services different from others?",
    answer:
      "Our approach combines technical expertise with a deep understanding of business needs. We don't just find bugs; we provide strategic insights to improve your overall software quality. Our team brings experience across multiple industries and technologies, allowing us to tailor our testing approach to your specific needs.",
  },
  {
    question: "How quickly can you integrate with our development process?",
    answer:
      "We pride ourselves on rapid integration. Typically, we can be fully operational within your workflows in 1-2 weeks. We adapt to your existing tools and methodologies while bringing best practices that enhance your current processes without disrupting them.",
  },
  {
    question: "Do you offer both manual and automated testing?",
    answer:
      "Yes, we provide comprehensive testing services that include both manual and automated approaches. We believe in selecting the right testing method for each scenario – automated testing for repetitive, high-volume tests and manual testing for exploratory, usability, and complex scenarios that require human intuition.",
  },
  {
    question:
      "How do you handle testing for different environments and platforms?",
    answer:
      "We implement cross-environment and cross-platform testing strategies tailored to your product requirements. Our infrastructure includes virtual machines, device farms, and cloud-based testing environments that allow us to validate your application across various operating systems, browsers, devices, and network conditions.",
  },
  {
    question: "Can you work with our existing test automation framework?",
    answer:
      "Absolutely. We're experienced in working with established frameworks and can seamlessly integrate with your existing testing infrastructure. We can enhance, extend, or maintain your current automated test suites, or help you migrate to more efficient solutions if needed.",
  },
  {
    question:
      "What reporting and communication can we expect during the testing process?",
    answer:
      "We provide transparent, detailed reporting throughout the engagement. This includes regular status updates, comprehensive test reports, defect analytics, and improvement recommendations. Our communication approach is flexible and can be tailored to your preferred channels and frequency.",
  },
];

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium mb-4">
              Common Questions
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find answers to common questions about our QA testing services and
            methodology.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
              }}
              className="mb-5"
            >
              <div
                className={`border border-gray-200 rounded-lg overflow-hidden ${
                  openIndex === index ? "shadow-md" : "shadow-sm"
                }`}
              >
                <button
                  className="w-full text-left p-5 flex justify-between items-center bg-white focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span className="transform transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
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
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-gray-100 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional help section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-4">
            Can't find the answer you're looking for?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600 transition-colors duration-300"
          >
            Contact our team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
