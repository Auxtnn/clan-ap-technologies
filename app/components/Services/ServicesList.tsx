"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Smartphone,
  Shield,
  Zap,
  Plug,
  Hand,
  Database,
  Layout,
} from "lucide-react";

// Detailed services information
const services = [
  {
    id: "automated-testing",
    icon: Search,
    title: "Automated Testing",
    description:
      "Accelerate your testing process with sophisticated automation that ensures comprehensive coverage and faster release cycles.",
    benefits: [
      "Faster testing cycles with consistent results",
      "Early detection of defects in the development lifecycle",
      "Improved test coverage across application components",
      "Reduced manual testing effort and cost",
    ],
    tools: ["Playwright", "Cypress", "Maestro", "Appium", "Selenium", "Jest"],
    link: "/services/automated-testing",
  },
  {
    id: "mobile-testing",
    icon: Smartphone,
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
    icon: Shield,
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
    icon: Zap,
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
    icon: Plug,
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
    icon: Hand,
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
    icon: Database,
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
    icon: Layout,
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
    <section
      id="services-list"
      className="py-20 bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDg4IDUwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjM0LDE3OSw4LDAuMTUpIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTQ0IDhsMS0uMzMzVjAiLz48cGF0aCBkPSJNNDQgMTZ2LThsLTkuMDYzLTVMNDQgOE0zNC45MzggMi45NDdMMjYgOGw4LjkzOCA1LjA1M00yNiA4djEwbDguOTM4IDUuMDUzTTM0LjkzOCAyMy4wNTNMNDQgMTh2LTIiLz48cGF0aCBkPSJNMzQuOTM4IDIzLjA1M0wzNCAyMy4zM0wxNiA0MC42N2wxIC4zMzNMMzQgMjMuMzM0IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMzQgMjMuMzM0djE2LjY2N0w0NCA0NSIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTI2IDE4bC0uOTM4LjU0TDkgNGwtLjA2Mi0uMDdMMjYgMTh6TTkgNHYxMEwxNyAxOGw5LTUuMDEgOC45MzgtNS4wNDNMMjYgM3Y1eiIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTE3IDE4djEwbDgtNS4wMTIiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0yNSAyM2wxLjA2Mi0uNjI2TDQ0IDMydi0uMDAxTDI1IDIzek00NCAzMnYxMGwtMTAgNS41TDI1IDQyLjY2NlYzMy4wMkw0NCAzMnoiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0zNCAwdjIuOThMMjYgM3Y1bC05LjA2MiA1LjA0LTkgNC45NkwwIDE0VjRoLS4wMzJMOSA0TTAgMTRsMTYgOS0xLjAzMi42TDAgMTRNMTYgMjN2MTBsLTE2LTlNMTYgMzN2MTBsOSA1LjAwMk0yNSA0M3Y1bDkuMDYyLTUuMDAyTTM0IDQ4djJsOS41LTUuNTAyTDQ0IDQydi0uMDAxTTQ0IDMydi0uMDAxTDQ1IDMyVjQyTDQ0IDQyLjcxIi8+PHBhdGggZD0iTTQ1IDQybDE2LjA5My05LjAwMUw2MiAzM3YxMGwtMTcgOS40OThWNDh6IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNDQuOTM4IDhoLjEyNEw1NCAzLjExOFYzTDQ1IDh6TTU0IDN2MTBsLTkuMDYzIDUiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik00NC45MzggMThsOS4wNjItNUw1NCAxM3YtLjA0MUw2MiA4di0uMDAxTDU0IDN2LjAwMXpNNjIgOHYxMGwtOC45MzggNS4wNTNNNTMuMDYzIDIzLjA1M0w0NSAyOGwtMSA0Ljc1TTQ1IDMyaC4wMzFMNjIgMjMiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik01My4wNjMgMjMuMDUzbC4wMyAyLjE4NyA3Ljg3Ni00LjI5NC4wMy0xLjg5My03LjkzNiAzLjk5OXpNNjEgMjB2MTMiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik04MyAxNHYtLjAxMkw3MyAzLjk4OCIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTczIDR2MTBsOSA1LjQxIiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNODIgMTl2MTBsLTggNC0uMDYzLjA3LTggNC41ODYtLjAzLS42NTYiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik02NSAzM2wtLjA2My0uMzU0TDgyIDE5IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNjUgMzNsLjA2My4zNTQtLjEyNS0uMzc3VjMzbC0zLS4wMjN2MTBsLTE3LjAzMiA5Ljk5OCIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PC9nPjwvc3ZnPg==')]"
      ref={sectionRef}
    >
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
    icon: React.ElementType;
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
  const Icon = service.icon;

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
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-yellow-500/10 mr-4 flex-shrink-0">
            <Icon className="w-7 h-7 text-yellow-500" />
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
