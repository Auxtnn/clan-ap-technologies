"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  RefreshCw,
  AlertTriangle,
  FileText,
  Eye,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "AI Test Generation",
    desc: "Automatically generate test cases from requirements",
  },
  {
    icon: RefreshCw,
    title: "Self-Healing Scripts",
    desc: "Tests that adapt to UI changes automatically",
  },
  {
    icon: AlertTriangle,
    title: "Defect Prediction",
    desc: "Predict defect-prone areas before testing begins",
  },
  {
    icon: FileText,
    title: "Smart Reporting",
    desc: "AI-generated insights and executive summaries",
  },
  {
    icon: Eye,
    title: "Visual AI Testing",
    desc: "Pixel-perfect visual regression at scale",
  },
  {
    icon: MessageSquare,
    title: "Security Intelligence",
    desc: "AI-powered vulnerability scanning and analysis",
  },
];

const bulletPoints = [
  {
    title: "Intelligent Test Usages",
    desc: "AI analyzes your codebase, APIs, and user journeys to automatically generate comprehensive test suites, eliminating the guesswork and reducing manual authoring time dramatically.",
  },
  {
    title: "Smart Data Synthesis",
    desc: "Simply describe the data format from real scenarios and we simulate it, meaning faster test setup with maximum coverage.",
  },
  {
    title: "Predictive Defect Analytics",
    desc: "Our AI engine predicts where defects are most likely to occur by analyzing past bugs, code complexity, and change frequency so you focus energy where it matters most.",
  },
  {
    title: "Continuous Quality Intelligence",
    desc: "Real-time dashboards powered by AI surface the most critical quality signals across every sprint — keeping your teams laser-focused on delivery.",
  },
];

const TransformingQA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="md:py-16 py-12 bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDg4IDUwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjM0LDE3OSw4LDAuMTUpIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTQ0IDhsMS0uMzMzVjAiLz48cGF0aCBkPSJNNDQgMTZ2LThsLTkuMDYzLTVMNDQgOE0zNC45MzggMi45NDdMMjYgOGw4LjkzOCA1LjA1M00yNiA4djEwbDguOTM4IDUuMDUzTTM0LjkzOCAyMy4wNTNMNDQgMTh2LTIiLz48cGF0aCBkPSJNMzQuOTM4IDIzLjA1M0wzNCAyMy4zM0wxNiA0MC42N2wxIC4zMzNMMzQgMjMuMzM0IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMzQgMjMuMzM0djE2LjY2N0w0NCA0NSIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTI2IDE4bC0uOTM4LjU0TDkgNGwtLjA2Mi0uMDdMMjYgMTh6TTkgNHYxMEwxNyAxOGw5LTUuMDEgOC45MzgtNS4wNDNMMjYgM3Y1eiIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTE3IDE4djEwbDgtNS4wMTIiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0yNSAyM2wxLjA2Mi0uNjI2TDQ0IDMydi0uMDAxTDI1IDIzek00NCAzMnYxMGwtMTAgNS41TDI1IDQyLjY2NlYzMy4wMkw0NCAzMnoiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjwvZz48L3N2Zz4=')] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="lg:w-1/2">
            <motion.h2
              className="text-3xl md:text-left text-center md:text-4xl font-black text-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Transforming QA with the
              <br />
              <span className="text-yellow-500">
                Power of Artificial Intelligence
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-600 text-sm leading-relaxed mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Traditional Quality Assurance is manual, time-consuming, and
              reactive. At ClanAP Technologies, we&apos;ve embraced AI as a core
              enabler, not just a tool across every project we deliver for our
              clients.
              <br />
              From intelligent test generation and self-healing automation to
              predictive defect analysis, our AI-enhanced QA framework helps
              clients ship higher-quality software faster, with measurably fewer
              production incidents.
            </motion.p>

            <div className="space-y-5">
              {bulletPoints.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-black text-base font-semibold mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-3">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.08,
                    type: "spring",
                    stiffness: 90,
                  }}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-yellow-500/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h4 className="text-black text-base font-bold mb-1">
                    {cap.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformingQA;
