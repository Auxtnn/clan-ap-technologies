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

const services = [
  {
    icon: Search,
    title: "Automated Testing",
    description:
      "Accelerate your testing process with sophisticated automation that ensures comprehensive coverage and faster release cycles.",
    link: "/services/automated-testing",
    delay: 0.1,
  },
  {
    icon: Smartphone,
    title: "Mobile Testing",
    description:
      "Ensure your mobile applications perform flawlessly across all devices, operating systems, and screen sizes.",
    link: "/services/mobile-testing",
    delay: 0.2,
  },
  {
    icon: Shield,
    title: "Security Testing",
    description:
      "Protect your software from vulnerabilities with thorough security testing methodologies and compliance verification.",
    link: "/services/security-testing",
    delay: 0.3,
  },
  {
    icon: Zap,
    title: "Performance Testing",
    description:
      "Optimize your application's speed, responsiveness, and stability under various load conditions and user scenarios.",
    link: "/services/performance-testing",
    delay: 0.4,
  },
  {
    icon: Plug,
    title: "API Testing",
    description:
      "Validate the functionality, reliability, and security of your APIs with comprehensive endpoint testing and integration verification.",
    link: "/services/api-testing",
    delay: 0.5,
  },
  {
    icon: Hand,
    title: "Manual Testing",
    description:
      "Leverage human intuition and exploratory testing to identify issues that automated tests might miss and validate user experience.",
    link: "/services/manual-testing",
    delay: 0.6,
  },
  {
    icon: Database,
    title: "Database Testing",
    description:
      "Ensure data integrity, performance, and security with comprehensive database testing, validation, and optimization.",
    link: "/services/database-testing",
    delay: 0.7,
  },
  {
    icon: Layout,
    title: "UI/UX Testing",
    description:
      "Validate user interface design, accessibility, and overall user experience to ensure intuitive and engaging applications.",
    link: "/services/ui-ux-testing",
    delay: 0.8,
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:w-11/12">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium mb-4">
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive QA Services
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevate your software quality with our specialized testing solutions
            tailored to meet your specific needs and ensure exceptional user
            experiences.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
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
    icon: React.ElementType;
    title: string;
    description: string;
    link: string;
    delay: number;
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
        delay: service.delay,
        type: "spring",
        stiffness: 100,
      }}
      className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="p-6 flex flex-col h-full">
        {/* Icon with background */}
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-yellow-500/10 mb-5">
          <Icon className="w-7 h-7 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-500 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-5 flex-grow">{service.description}</p>

        {/* Learn More Button */}
        <Link href={service.link}>
          <motion.div
            className="inline-flex items-center text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
          </motion.div>
        </Link>
      </div>

      {/* Corner decoration */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/5 rounded-bl-full"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ServicesSection;
