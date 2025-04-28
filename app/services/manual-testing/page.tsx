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

import {
  Palette,
  TestTube,
  Smartphone,
  User,
  Search,
  Lightbulb,
  RefreshCw,
  Eye,
  Globe,
  ClipboardList,
  CheckCircle,
  Users,
  BarChart3,
} from "lucide-react";
export const metadata: Metadata = {
  title: "Manual Testing Services - ClanAP Technologies",
  description:
    "Leverage human intuition and exploratory testing to identify issues that automated tests might miss and validate the complete user experience of your application.",
};

// Service-specific data
const serviceData = {
  title: "Manual Testing",
  icon: <User size={24} />,
  description:
    "Leverage human intuition and exploratory testing to identify issues that automated tests might miss and validate the complete user experience of your application.",
  heroImage: "/images/hero/manual-testing.jpg",
  benefits: [
    {
      title: "Human Perspective",
      description:
        "Our expert testers evaluate your application from a user's perspective, identifying usability issues and experience gaps that automated tools can't detect.",
      icon: <User size={24} />,
    },
    {
      title: "Exploratory Testing",
      description:
        "Discover unexpected bugs and edge cases through unscripted exploration of your application's functionality and features.",
      icon: <Search size={24} />,
    },
    {
      title: "Usability Insights",
      description:
        "Receive qualitative feedback on user experience, interface design, and workflow efficiency to enhance overall product quality.",
      icon: <Lightbulb size={24} />,
    },
    {
      title: "Complementary Approach",
      description:
        "Combine manual testing with automation for comprehensive coverage, addressing both predictable and unpredictable testing scenarios.",
      icon: <RefreshCw size={24} />,
    },
    {
      title: "Visual Verification",
      description:
        "Validate visual elements, layout consistency, and aesthetic aspects that automated tests often struggle to evaluate effectively.",
      icon: <Eye size={24} />,
    },
    {
      title: "Real-world Validation",
      description:
        "Ensure your application performs as expected in authentic usage scenarios across different environments and conditions.",
      icon: <Globe size={24} />,
    },
  ],
  approach: [
    {
      title: "Test Planning",
      description:
        "We develop comprehensive test plans and cases based on requirements, user stories, and business objectives to guide manual testing efforts.",
      icon: <ClipboardList size={24} />,
    },
    {
      title: "Methodical Execution",
      description:
        "Our testers systematically work through pre-defined test cases while documenting results, observations, and potential issues.",
      icon: <CheckCircle size={24} />,
    },
    {
      title: "Exploratory Sessions",
      description:
        "We conduct time-boxed exploratory testing sessions to uncover unexpected issues and edge cases not covered by scripted tests.",
      icon: <Search size={24} />,
    },
    {
      title: "Usability Evaluation",
      description:
        "Our experts assess the application from a user's perspective, focusing on ease of use, intuitive design, and overall user experience.",
      icon: <Users size={24} />,
    },
    {
      title: "Comprehensive Reporting",
      description:
        "We provide detailed reports with clear reproduction steps, screenshots, videos, and severity classifications for all identified issues.",
      icon: <BarChart3 size={24} />,
    },
  ],
  relatedServices: [
    {
      title: "UI/UX Testing",
      description:
        "Validate user interface design, accessibility, and overall user experience to ensure intuitive applications.",
      icon: <Palette size={24} />,
      link: "/services/ui-ux-testing",
    },
    {
      title: "Automated Testing",
      description:
        "Accelerate your testing process with sophisticated automation that ensures comprehensive coverage.",
      icon: <TestTube size={24} />,
      link: "/services/automated-testing",
    },
    {
      title: "Mobile Testing",
      description:
        "Ensure your mobile applications perform flawlessly across all devices and operating systems.",
      icon: <Smartphone size={24} />,
      link: "/services/mobile-testing",
    },
  ],
  tools: [
    {
      name: "TestRail",
      description:
        "Test case management tool for organizing and tracking manual test execution",
      logo: "/images/tools/testrail-logo.svg",
    },
    {
      name: "JIRA",
      description:
        "Issue tracking and project management tool for defect reporting and tracking",
      logo: "/images/tools/jira-logo.png",
    },
    {
      name: "Zephyr",
      description:
        "Testing solution for JIRA that provides comprehensive test management",
      logo: "/images/tools/zephyr-logo.svg",
    },
    {
      name: "qTest",
      description:
        "Test management tool for creating, organizing and executing manual tests",
      logo: "/images/tools/qtest-logo.png",
    },
    {
      name: "BrowserStack",
      description:
        "Real device and browser testing platform for cross-browser and cross-device testing",
      logo: "/images/tools/browserstack-logo.svg",
    },
    {
      name: "Loom",
      description:
        "Screen recording tool for documenting bugs and user flows visually",
      logo: "/images/tools/loom-logo.svg",
    },
  ],
  caseStudy: {
    title:
      "How Manual Testing Uncovered Critical UX Issues for a Healthcare Platform",
    client: "Healthcare Technology Provider",
    challenge:
      "The client's patient portal had passed all automated tests but was receiving poor user feedback. Patients were struggling to complete essential tasks despite the application technically functioning correctly.",
    solution:
      "We implemented a comprehensive manual testing approach focusing on user flows, accessibility, and exploratory testing. Our testers adopted various user personas to identify experience gaps and unintuitive workflows.",
    results: [
      "Identified 32 UX issues missed by automated testing",
      "Discovered 8 critical workflow barriers affecting patient compliance",
      "Improved task completion rate from 62% to 94%",
      "Reduced support ticket volume by 40% following improvements",
    ],
    image: "/images/case-study/test1.jpg",
  },
};

export default function ManualTestingPage() {
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
