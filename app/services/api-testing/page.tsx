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
  title: "API Testing Services - ClanAP Technologies",
  description:
    "Validate the functionality, reliability, and security of your APIs with comprehensive endpoint testing and integration verification.",
};

// Service-specific data
const serviceData = {
  title: "API Testing",
  icon: "🔌",
  description:
    "Validate the functionality, reliability, and security of your APIs with comprehensive endpoint testing and integration verification to ensure seamless data exchange between systems.",
  heroImage: "/images/hero/api-testing.jpg",
  benefits: [
    {
      title: "Ensure API Reliability",
      description:
        "Verify that your APIs function consistently and return expected results across different scenarios and input conditions.",
      icon: "✅",
    },
    {
      title: "Validate Data Integrity",
      description:
        "Confirm that data is correctly transferred, transformed, and stored throughout API interactions without corruption or loss.",
      icon: "🔄",
    },
    {
      title: "Verify Security Measures",
      description:
        "Test authentication, authorization, and data protection mechanisms to protect against unauthorized access and data breaches.",
      icon: "🔒",
    },
    {
      title: "Optimize Performance",
      description:
        "Identify and resolve performance bottlenecks in API calls to ensure fast response times even under heavy loads.",
      icon: "⚡",
    },
    {
      title: "Ensure Compatibility",
      description:
        "Verify that your APIs work correctly across different platforms, environments, and with third-party integrations.",
      icon: "🔄",
    },
    {
      title: "Support Continuous Integration",
      description:
        "Integrate API testing into your CI/CD pipeline to catch integration issues early in the development lifecycle.",
      icon: "🔄",
    },
  ],
  approach: [
    {
      title: "API Documentation Review",
      description:
        "We analyze your API specifications, documentation, and requirements to understand expected behavior and develop appropriate test strategies.",
      icon: "📝",
    },
    {
      title: "Functional Testing",
      description:
        "Our team verifies each endpoint functions correctly, handling various input scenarios, edge cases, and validating response formats and status codes.",
      icon: "✅",
    },
    {
      title: "Integration Testing",
      description:
        "We test how your APIs interact with other components, services, and systems to ensure seamless data flow and communications.",
      icon: "🔄",
    },
    {
      title: "Security Testing",
      description:
        "Our experts evaluate authentication mechanisms, authorization controls, and data protection measures to identify potential vulnerabilities.",
      icon: "🔒",
    },
    {
      title: "Performance Testing",
      description:
        "We assess API response times, throughput, and behavior under various load conditions to ensure optimal performance.",
      icon: "⚡",
    },
  ],
  tools: [
    {
      name: "Postman",
      description: "API platform for building and testing API requests",
      logo: "/images/tools/postman-logo.svg",
    },
    {
      name: "REST Assured",
      description: "Java library for testing and validating REST services",
      logo: "/images/tools/rest-assured-logo.png",
    },
    {
      name: "SoapUI",
      description: "Open-source tool for testing SOAP and REST APIs",
      logo: "/images/tools/soapui-logo.png",
    },
    {
      name: "Karate",
      description:
        "Open-source tool for API test automation, mocks and performance testing",
      logo: "/images/tools/karate-logo.png",
    },
    {
      name: "JMeter",
      description:
        "Load testing tool that can be used for API performance testing",
      logo: "/images/tools/jmeter-logo.png",
    },
    {
      name: "Swagger",
      description: "API documentation and testing tools for RESTful services",
      logo: "/images/tools/swagger-logo.svg",
    },
  ],
  caseStudy: {
    title: "How We Ensured API Reliability for a Payment Processing Platform",
    client: "Financial Services Provider",
    challenge:
      "The client had developed a payment processing API with multiple endpoints handling sensitive financial transactions. They needed to ensure 100% reliability, security, and compliance with financial regulations before releasing to production.",
    solution:
      "We implemented a comprehensive API testing strategy covering functional verification, security testing, performance optimization, and compliance validation. We created automated test suites for continuous monitoring and regression testing.",
    results: [
      "Identified and resolved 28 API issues including 5 critical security vulnerabilities",
      "Improved average API response time from 850ms to 220ms",
      "Achieved 100% test coverage across all API endpoints and scenarios",
      "Ensured zero downtime since deployment with 99.99% API availability",
    ],
    image: "/images/case-study/test1.jpg",
  },
  relatedServices: [
    {
      title: "Automated Testing",
      description:
        "Accelerate your testing process with sophisticated automation that ensures comprehensive coverage.",
      icon: "🔍",
      link: "/services/automated-testing",
    },
    {
      title: "Security Testing",
      description:
        "Protect your software from vulnerabilities with thorough security testing methodologies.",
      icon: "🛡️",
      link: "/services/security-testing",
    },
    {
      title: "Performance Testing",
      description:
        "Ensure your applications perform optimally under various load conditions and user scenarios.",
      icon: "⚡",
      link: "/services/performance-testing",
    },
  ],
};

export default function ApiTestingPage() {
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
