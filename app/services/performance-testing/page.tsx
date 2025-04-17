import type { Metadata } from "next";
import {
  ServiceDetailHero,
  ServiceApproach,
  ServiceBenefits,
  ServiceCaseStudy,
  ServiceTools,
  ServiceDetailCTA,
  RelatedServices,
} from "../../components";

export const metadata: Metadata = {
  title: "Performance Testing Services - ClanAP Technologies",
  description:
    "Optimize your application's speed, responsiveness, and stability under various load conditions and user scenarios to ensure exceptional user experiences.",
};

// Service-specific data
const serviceData = {
  title: "Performance Testing",
  icon: "⚡",
  description:
    "Optimize your application's speed, responsiveness, and stability under various load conditions and user scenarios to ensure exceptional user experiences even during peak usage.",
  heroImage: "/images/iso.jpg",
  benefits: [
    {
      title: "Identify Bottlenecks",
      description:
        "Pinpoint specific components, queries, or processes that limit your application's performance before they impact users.",
      icon: "🔍",
    },
    {
      title: "Capacity Planning",
      description:
        "Determine your system's maximum capacity and establish scaling strategies to handle growth and traffic spikes.",
      icon: "📈",
    },
    {
      title: "Improve User Experience",
      description:
        "Enhance user satisfaction by ensuring your application responds quickly and consistently under all conditions.",
      icon: "😊",
    },
    {
      title: "Prevent Outages",
      description:
        "Avoid costly downtime by identifying breaking points before they occur in production environments.",
      icon: "🛡️",
    },
    {
      title: "Optimize Resources",
      description:
        "Efficiently utilize hardware resources and identify opportunities for cost savings in infrastructure.",
      icon: "💰",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Make informed architectural and scaling decisions based on concrete performance metrics rather than assumptions.",
      icon: "📊",
    },
  ],
  approach: [
    {
      title: "Performance Requirements Analysis",
      description:
        "We collaborate with you to understand your performance expectations, SLAs, and critical user journeys that require optimization.",
      icon: "📝",
    },
    {
      title: "Test Planning & Scenario Design",
      description:
        "Our team develops detailed test plans with realistic user scenarios, data sets, and load patterns to simulate real-world conditions.",
      icon: "🗺️",
    },
    {
      title: "Environment Setup",
      description:
        "We configure test environments and monitoring tools to capture comprehensive performance metrics across all system components.",
      icon: "🔧",
    },
    {
      title: "Test Execution",
      description:
        "We execute various performance tests including load, stress, endurance, and spike testing to evaluate different aspects of system performance.",
      icon: "▶️",
    },
    {
      title: "Analysis & Optimization",
      description:
        "Our experts analyze results, identify bottlenecks, and provide detailed recommendations for performance improvements and optimizations.",
      icon: "📊",
    },
  ],
  tools: [
    {
      name: "JMeter",
      description:
        "Open-source load testing tool for analyzing and measuring performance",
      logo: "/images/tools/jmeter-logo.png",
    },
    {
      name: "LoadRunner",
      description: "Performance testing tool for web and mobile applications",
      logo: "/images/tools/loadrunner-logo.png",
    },
    {
      name: "Gatling",
      description:
        "Open-source load and performance testing framework with real-time monitoring",
      logo: "/images/tools/gatling-logo.svg",
    },
    {
      name: "K6",
      description: "Open-source load testing tool for engineering teams",
      logo: "/images/tools/k6-logo.png",
    },
    {
      name: "New Relic",
      description:
        "Application performance monitoring tool for real-time insights",
      logo: "/images/tools/new-relic-logo.png",
    },
    {
      name: "Dynatrace",
      description:
        "AI-powered performance monitoring and optimization platform",
      logo: "/images/tools/dynatrace-logo.png",
    },
  ],
  caseStudy: {
    title: "How We Prepared an E-commerce Platform for Black Friday Traffic",
    client: "Online Retailer",
    challenge:
      "The client's e-commerce platform was experiencing performance degradation during promotional events, with page load times exceeding 10 seconds and checkout failures during traffic spikes of just 2x normal volume.",
    solution:
      "We implemented a comprehensive performance testing strategy including baseline performance tests, load tests simulating up to 5x normal traffic, and stress tests to identify breaking points. We used detailed monitoring to identify database query bottlenecks, caching opportunities, and front-end optimization needs.",
    results: [
      "Reduced average page load time from 6.2 seconds to 1.8 seconds",
      "Improved checkout completion rate from 76% to 98% under peak load",
      "Increased maximum concurrent users from 5,000 to 25,000 without degradation",
      "Handled Black Friday traffic (4.3x normal volume) with zero downtime",
    ],
    image: "/images/case-study/test2.jpg",
  },
  relatedServices: [
    {
      title: "API Testing",
      description:
        "Validate the functionality, reliability, and security of your APIs with comprehensive endpoint testing.",
      icon: "🔌",
      link: "/services/api-testing",
    },
    {
      title: "Database Testing",
      description:
        "Ensure data integrity, performance, and security with comprehensive database testing.",
      icon: "🗄️",
      link: "/services/database-testing",
    },
    {
      title: "Automated Testing",
      description:
        "Accelerate your testing process with sophisticated automation that ensures comprehensive coverage.",
      icon: "🔍",
      link: "/services/automated-testing",
    },
  ],
};

export default function PerformanceTestingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceDetailHero
        title={serviceData.title}
        icon={serviceData.icon}
        description={serviceData.description}
        image={serviceData.heroImage}
      />
      <ServiceBenefits benefits={serviceData.benefits} />
      <ServiceApproach approach={serviceData.approach} />
      <ServiceTools tools={serviceData.tools} />
      <ServiceCaseStudy caseStudy={serviceData.caseStudy} />
      <RelatedServices services={serviceData.relatedServices} />
      <ServiceDetailCTA />
    </main>
  );
}
