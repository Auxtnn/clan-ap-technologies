"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PackageCard } from "./PackageCard";

interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  idealFor: string;
  popular?: boolean;
  features: string[];
  perfectFor: string[];
  technologies?: string[];
}

const qaPackages: Package[] = [
  {
    id: "qa-starter",
    name: "QA Starter",
    price: "£1,500/mo",
    duration: "Month-to-month",
    idealFor: "Small teams & early-stage products",
    features: [
      "Manual functional testing (up to 3 modules)",
      "Exploratory testing & bug reporting",
      "Basic test case documentation",
      "Weekly defect summary report",
      "Up to 40 testing hours per month",
    ],
    perfectFor: [
      "Startups launching their first product",
      "Small teams without dedicated QA",
      "Pre-launch validation sprints",
    ],
    technologies: ["TestRail", "JIRA", "Zephyr"],
  },
  {
    id: "qa-professional",
    name: "QA Professional",
    price: "£3,200/mo",
    duration: "3-month minimum",
    idealFor: "Growing teams shipping frequently",
    popular: true,
    features: [
      "Full manual + automated test execution",
      "API testing & integration validation",
      "Self-healing automation setup (Playwright)",
      "Performance smoke testing",
      "Bi-weekly QA strategy sessions",
      "Up to 80 testing hours per month",
      "Detailed coverage & defect analytics",
    ],
    perfectFor: [
      "Scale-ups with regular sprint cycles",
      "Products with complex API layers",
      "Teams targeting faster release cadence",
    ],
    technologies: ["Playwright", "Postman", "JIRA", "TestRail", "K6"],
  },
  {
    id: "qa-enterprise",
    name: "QA Enterprise",
    price: "Custom",
    duration: "Ongoing retainer",
    idealFor: "Enterprise & high-compliance environments",
    features: [
      "End-to-end QA programme management",
      "AI-powered test generation & analytics",
      "Security & accessibility testing",
      "Visual regression testing at scale",
      "Dedicated QA lead & weekly reporting",
      "Unlimited testing hours",
      "CI/CD pipeline integration",
      "Compliance & audit trail documentation",
    ],
    perfectFor: [
      "Regulated industries (fintech, healthtech)",
      "Large product teams with multiple releases",
      "Organisations requiring audit-ready QA",
    ],
    technologies: [
      "Playwright",
      "OWASP ZAP",
      "Axe",
      "Percy",
      "K6",
      "BrowserStack",
    ],
  },
];

const PricingService = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="md:py-12 py-8 bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDg4IDUwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjM0LDE3OSw4LDAuMTUpIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTQ0IDhsMS0uMzMzVjAiLz48cGF0aCBkPSJNNDQgMTZ2LThsLTkuMDYzLTVMNDQgOE0zNC45MzggMi45NDdMMjYgOGw4LjkzOCA1LjA1M00yNiA4djEwbDguOTM4IDUuMDUzTTM0LjkzOCAyMy4wNTNMNDQgMTh2LTIiLz48L2c+PC9zdmc+')] overflow-hidden"
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
              QA Service Packages
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-black text-black mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Flexible Plans for Every{" "}
            <span className="text-yellow-500">Stage of Growth</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From early validation to enterprise-grade quality programmes, our QA
            packages are structured to deliver measurable results at every
            stage. Not sure which fits? Book a free consultation and we&apos;ll
            advise you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {qaPackages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} inView={inView} />
          ))}
        </div>

        <motion.p
          className="text-center text-gray-500 text-sm mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          All prices are indicative. Final pricing is confirmed after a
          discovery call. Enterprise packages are scoped and quoted
          individually.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingService;
