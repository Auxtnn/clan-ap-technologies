"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Discovery & AI Baseline Assessment",
    desc: "We begin every engagement by mapping the application's architecture, risk areas, and existing quality baseline using AI-assisted analysis tools. This establishes a quality baseline on all domains, allowing us to tailor the perfect support.",
    tags: ["Scope Scanner", "Requirements AI Planner", "Risk Matrix Builder"],
  },
  {
    number: "02",
    title: "Intelligent Test Strategy & Case Generation",
    desc: "Generate optimized test suites, acceptance criteria, and API contracts to automatically generate realistic test plans that maximize coverage within available sprint resources.",
    tags: [
      "TopGAI Planner",
      "SmartAPI Planner",
      "Scenario DAG",
      "Integration Plans",
    ],
  },
  {
    number: "03",
    title: "AI-Powered Automation & Self-Healing Execution",
    desc: "Automated tests run on every build with AI-assisted healing and test intelligence that continuously monitors for flakiness, drift, and coverage issues, while visual regression results are handled by trained machine learning models.",
    tags: [
      "SmartTest Playwright",
      "SelfHeal Service",
      "Visual CodeAI Conditions",
      "Metro",
    ],
  },
  {
    number: "04",
    title: "Predictive Analytics & Defect Intelligence",
    desc: "Before a release, AI flags high-risk modules with defect-finding targets. All screens are analyzed before release to automatically build quantifiable predictions, allowing teams to intervene everywhere.",
    tags: ["Risk Source", "Defect Search", "Defect Defend Engine"],
  },
  {
    number: "05",
    title: "AI-Driven Reporting & Continuous Improvement",
    desc: "After every test run, AI generates detailed defect digest reports, test coverage strengths and weaknesses over time. Feedback loops continuously improve our models for each specific client application.",
    tags: ["Defect-Digest", "AI Reg Planner", "Tensor AI", "Global Summary"],
  },
];

const HowWeIntegrateAI = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="md:py-12 py-8 bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDg4IDUwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjM0LDE3OSw4LDAuMTUpIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTQ0IDhsMS0uMzMzVjAiLz48cGF0aCBkPSJNNDQgMTZ2LThsLTkuMDYzLTVMNDQgOE0zNC45MzggMi45NDdMMjYgOGw4LjkzOCA1LjA1M00yNiA4djEwbDguOTM4IDUuMDUzTTM0LjkzOCAyMy4wNTNMNDQgMTh2LTIiLz48cGF0aCBkPSJNMzQuOTM4IDIzLjA1M0wzNCAyMy4zM0wxNiA0MC42N2wxIC4zMzNMMzQgMjMuMzM0IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMzQgMjMuMzM0djE2LjY2N0w0NCA0NSIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTI2IDE4bC0uOTM4LjU0TDkgNGwtLjA2Mi0uMDdMMjYgMTh6TTkgNHYxMEwxNyAxOGw5LTUuMDEgOC45MzgtNS4wNDNMMjYgM3Y1eiIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTE3IDE4djEwbDgtNS4wMTIiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0yNSAyM2wxLjA2Mi0uNjI2TDQ0IDMydi0uMDAxTDI1IDIzek00NCAzMnYxMGwtMTAgNS41TDI1IDQyLjY2NlYzMy4wMkw0NCAzMnoiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjwvZz48L3N2Zz4=')] overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium">
              Our AI Process
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-black text-black mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How We Integrate AI into{" "}
            <span className="text-yellow-500">Every Project</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A structured, repeatable AI integration process applied to every
            client engagement from kick-off to production.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.15 + i * 0.1,
                type: "spring",
                stiffness: 90,
              }}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-yellow-500/30 transition-all duration-300 p-6 overflow-hidden"
            >
              <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-yellow-500 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-yellow-500/40 flex items-center justify-center text-yellow-500 font-black text-sm group-hover:border-yellow-500 group-hover:bg-yellow-500/10 transition-all duration-300">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-black font-bold text-lg mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="px-2.5 py-0.5 bg-yellow-500/10 rounded-full text-yellow-600 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeIntegrateAI;
