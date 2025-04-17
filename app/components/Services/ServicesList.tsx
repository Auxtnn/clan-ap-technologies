"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// Detailed services information
const services = [
  {
    id: "automated-testing",
    icon: "🔍",
    title: "Automated Testing",
    description:
      "Accelerate your testing process with sophisticated automation that ensures comprehensive coverage and faster release cycles.",
    benefits: [
      "Faster testing cycles with consistent results",
      "Early detection of defects in the development lifecycle",
      "Improved test coverage across application components",
      "Reduced manual testing effort and cost",
    ],
    tools: ["Selenium", "Cypress", "Playwright", "Jest", "Appium"],
    link: "/services/automated-testing",
  },
  {
    id: "mobile-testing",
    icon: "📱",
    title: "Mobile Testing",
    description:
      "Ensure your mobile applications perform flawlessly across all devices, operating systems, and screen sizes.",
    benefits: [
      "Consistent user experience across multiple devices",
      "Verification of performance across various network conditions",
      "Testing on real devices and emulators",
      "Compatibility validation across iOS and Android",
    ],
    tools: ["Appium", "BrowserStack", "XCTest", "Espresso"],
    link: "/services/mobile-testing",
  },
  {
    id: "security-testing",
    icon: "🛡️",
    title: "Security Testing",
    description:
      "Protect your software from vulnerabilities with thorough security testing methodologies and compliance verification.",
    benefits: [
      "Identification of potential security vulnerabilities",
      "Protection of sensitive user data",
      "Compliance with security standards and regulations",
      "Prevention of unauthorized access",
    ],
    tools: ["OWASP ZAP", "Burp Suite", "Nessus", "Metasploit"],
    link: "/services/security-testing",
  },
  {
    id: "performance-testing",
    icon: "⚡",
    title: "Performance Testing",
    description:
      "Optimize your application's speed, responsiveness, and stability under various load conditions and user scenarios.",
    benefits: [
      "Verification of system behavior under peak loads",
      "Identification of performance bottlenecks",
      "Capacity planning and scalability validation",
      "Improved user experience under varying conditions",
    ],
    tools: ["JMeter", "LoadRunner", "Gatling", "K6"],
    link: "/services/performance-testing",
  },
  {
    id: "api-testing",
    icon: "🔌",
    title: "API Testing",
    description:
      "Validate the functionality, reliability, and security of your APIs with comprehensive endpoint testing and integration verification.",
    benefits: [
      "Verification of data exchange between systems",
      "Validation of API response accuracy and structure",
      "Performance and security testing of endpoints",
      "End-to-end testing of business workflows",
    ],
    tools: ["Postman", "REST Assured", "SoapUI", "Karate"],
    link: "/services/api-testing",
  },
  {
    id: "manual-testing",
    icon: "👁️",
    title: "Manual Testing",
    description:
      "Leverage human intuition and exploratory testing to identify issues that automated tests might miss and validate user experience.",
    benefits: [
      "Exploratory testing to uncover edge cases",
      "User experience validation from human perspective",
      "Ad-hoc testing for newly developed features",
      "Real-world usage scenarios validation",
    ],
    tools: ["TestRail", "JIRA", "Zephyr", "qTest"],
    link: "/services/manual-testing",
  },
  {
    id: "database-testing",
    icon: "🗄️",
    title: "Database Testing",
    description:
      "Ensure data integrity, performance, and security with comprehensive database testing, validation, and optimization.",
    benefits: [
      "Verification of data integrity and consistency",
      "Database performance optimization",
      "Validation of stored procedures and triggers",
      "Data migration testing",
    ],
    tools: ["SQL, MongoDB", "DbUnit", "pgTAP", "Redis"],
    link: "/services/database-testing",
  },
  {
    id: "ui-ux-testing",
    icon: "🎨",
    title: "UI/UX Testing",
    description:
      "Validate user interface design, accessibility, and overall user experience to ensure intuitive and engaging applications.",
    benefits: [
      "Evaluation of design consistency and usability",
      "Accessibility compliance verification",
      "Cross-browser and cross-device validation",
      "Visual regression testing",
    ],
    tools: ["Storybook", "Axe", "Percy", "LambdaTest"],
    link: "/services/ui-ux-testing",
  },
];

const ServicesList = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section id="services-list" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:w-11/12">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive QA Solutions
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Each of our services is tailored to address specific aspects of
            software quality, ensuring a holistic approach to QA.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceProps {
  service: {
    id: string;
    icon: string;
    title: string;
    description: string;
    benefits: string[];
    tools: string[];
    link: string;
  };
  index: number;
  isInView: boolean;
}

const ServiceCard = ({ service, index, isInView }: ServiceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        {/* Service Header */}
        <div className="flex items-start mb-4">
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-yellow-500/10 text-2xl mr-4 flex-shrink-0">
            {service.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold mb-2 text-gray-700">
            Key Benefits:
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span className="text-sm text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold mb-2 text-gray-700">
            Tools & Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
              >
                {tool}
              </span>
            ))}
            {service.tools.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                +{service.tools.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Learn More Link */}
        <Link href={service.link}>
          <div className="flex items-center text-black font-medium hover:text-yellow-500 transition-colors duration-300 text-sm">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
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
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServicesList;
