"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  RefreshCw,
  AlertTriangle,
  Eye,
  BarChart2,
  MessageSquare,
} from "lucide-react";

const enableCards = [
  {
    icon: Bot,
    title: "AI-Generated Test Cases",
    desc: "We apply AI to intelligently analyse domains, user stories, and API specifications to automatically generate comprehensive test suites covering happy paths, edge cases, and regression scenarios.",
    tags: ["Unit Testing", "Behaviour Testing", "Edge Case Analysis"],
  },
  {
    icon: RefreshCw,
    title: "Self-Healing Test Automation",
    desc: "Our platform intelligently identifies and repairs broken element locators when the application UI changes, drastically reducing maintenance overhead and keeping your test suite green every sprint.",
    tags: ["SmartLocators", "Playwright"],
  },
  {
    icon: AlertTriangle,
    title: "Predictive Defect Detection",
    desc: "Machine learning models trained on historical project data perform multi-variable root-cause analysis to highlight the areas most at risk of regressions and focus prioritized reviewing.",
    tags: ["Risk Scoring", "Static Analysis", "Defect Insights"],
  },
  {
    icon: Eye,
    title: "Visual AI & Regression Testing",
    desc: "Computer vision algorithms visually inspect rendering artefacts and pixel-level differences across thousands of browser/device combinations, flagging inconsistencies with surgical accuracy.",
    tags: ["Cross UI", "Pixel AI", "Responsive Analysis"],
  },
  {
    icon: BarChart2,
    title: "Intelligent Test Analytics",
    desc: "AI processes test results, log files, and failure patterns to surface actionable intelligence drastically reducing time spent on root-cause analysis and recommending prioritization for best cycle automation.",
    tags: ["Log Analysis", "Cycle Guard", "Automated Intelligence"],
  },
  {
    icon: MessageSquare,
    title: "Conversational QA Assistants",
    desc: "AI assistants available as chat interfaces that help your entire team ask questions, generate reports, get suggestions for testing edge cases, and stay compliant, all while shifting QA productivity significantly higher.",
    tags: ["QA Mentor", "Slack Connect", "Automation"],
  },
];

const WhatAIEnables = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="md:py-12 py-8 bg-white  overflow-hidden">
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium">
              AI-Driven Practice
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-black text-black mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What AI Enables in Our{" "}
            <span className="text-yellow-500">QA Practice</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We deploy top-tier AI-powered capabilities across every client
            engagement, turning QA from a cost-centre into a competitive
            advantage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {enableCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + i * 0.08,
                  type: "spring",
                  stiffness: 90,
                }}
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-yellow-500/30 transition-all duration-300 p-6 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-yellow-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-black font-bold text-lg mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {card.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="px-2.5 py-0.5 bg-yellow-500/10 rounded-full text-yellow-600 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatAIEnables;
