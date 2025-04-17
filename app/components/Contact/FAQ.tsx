"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
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
            Have questions about working with us? Find quick answers to common
            queries below.
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
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">
            Didn't find the answer you're looking for?
          </p>
          <motion.button
            className="bg-transparent border-2 border-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ data
const faqs = [
  {
    question: "What types of projects do you typically work on?",
    answer:
      "We work on a wide range of projects across various industries including finance, healthcare, e-commerce, SaaS, and more. Our QA testing services are tailored to meet the specific needs of each project, whether it's a mobile application, web platform, API, or enterprise software system.",
  },
  {
    question: "How quickly can you start working on my project?",
    answer:
      "In most cases, we can begin working on your project within 1-2 weeks of signing an agreement. For urgent requests, we may be able to expedite this timeline. During our initial consultation, we'll discuss your timeline requirements and work to accommodate your schedule.",
  },
  {
    question: "Do you offer ongoing QA support or just one-time testing?",
    answer:
      "We offer both one-time testing services and ongoing QA support. Many of our clients choose to engage with us on a continuous basis to ensure consistent quality throughout their development lifecycle. We can establish a retainer arrangement or work on a project-by-project basis, depending on your needs.",
  },
  {
    question:
      "How do you handle confidential information and intellectual property?",
    answer:
      "We take data security and confidentiality very seriously. Before beginning any project, we sign comprehensive NDAs to protect your intellectual property. We adhere to strict security protocols and can work within your existing security requirements, including VPNs, secure repositories, and other protective measures.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is typically structured based on project scope, complexity, and duration. We offer flexible engagement models including fixed-price projects, hourly rates, and monthly retainers. During our initial consultation, we'll discuss your specific requirements and provide a detailed quote tailored to your needs.",
  },
  {
    question: "Can you integrate with our existing development process?",
    answer:
      "Absolutely. We pride ourselves on our ability to seamlessly integrate with your existing development workflow. Whether you use Agile, Waterfall, or a hybrid methodology, we can adapt our QA processes to complement your approach and tools, including JIRA, Azure DevOps, GitHub, GitLab, and other popular platforms.",
  },
];

export default FAQ;
