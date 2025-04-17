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
  title: "UI/UX Testing Services - ClanAP Technologies",
  description:
    "Validate user interface design, accessibility, and overall user experience to ensure intuitive and engaging applications for all users.",
};

// Service-specific data
const serviceData = {
  title: "UI/UX Testing",
  icon: "🎨",
  description:
    "Validate user interface design, accessibility, and overall user experience to ensure intuitive and engaging applications that delight users and meet their needs effectively.",
  heroImage: "/images/iso.jpg",
  benefits: [
    {
      title: "Enhanced User Satisfaction",
      description:
        "Identify and address usability issues that could frustrate users and decrease engagement with your application.",
      icon: "😊",
    },
    {
      title: "Improved Accessibility",
      description:
        "Ensure your application is usable by people with disabilities and complies with accessibility standards like WCAG.",
      icon: "♿",
    },
    {
      title: "Consistent User Interface",
      description:
        "Verify design consistency across your application, ensuring elements behave predictably for users.",
      icon: "🔄",
    },
    {
      title: "Optimized User Flows",
      description:
        "Identify bottlenecks and friction points in user journeys that could impact task completion and conversion rates.",
      icon: "🛣️",
    },
    {
      title: "Cross-device Validation",
      description:
        "Ensure your application provides a consistent, high-quality experience across all devices and screen sizes.",
      icon: "📱",
    },
    {
      title: "Data-driven Design Decisions",
      description:
        "Make informed design decisions based on testing data rather than assumptions about user behavior.",
      icon: "📊",
    },
  ],
  approach: [
    {
      title: "Heuristic Evaluation",
      description:
        "Our experts evaluate your interface against established usability principles and best practices to identify potential issues.",
      icon: "📋",
    },
    {
      title: "Usability Testing",
      description:
        "We observe real users completing tasks in your application to identify friction points, confusion, and opportunities for improvement.",
      icon: "👁️",
    },
    {
      title: "Accessibility Assessment",
      description:
        "Our team evaluates your application against WCAG guidelines and tests with assistive technologies to ensure inclusive access.",
      icon: "♿",
    },
    {
      title: "Visual Regression Testing",
      description:
        "We verify that UI components render correctly across browsers and devices, catching visual defects before users do.",
      icon: "🔍",
    },
    {
      title: "User Flow Analysis",
      description:
        "We analyze critical user journeys to identify and optimize conversion paths and improve task completion rates.",
      icon: "🛣️",
    },
  ],
  tools: [
    {
      name: "Storybook",
      description:
        "Tool for developing UI components in isolation and testing their visual appearance",
      logo: "/images/tools/storybook-logo.webp",
    },
    {
      name: "Axe",
      description:
        "Accessibility testing tool for identifying accessibility issues",
      logo: "/images/tools/axe-logo.png",
    },
    {
      name: "Percy",
      description:
        "Visual testing tool for capturing screenshots and detecting visual changes",
      logo: "/images/tools/percy-logo.jpg",
    },
    {
      name: "LambdaTest",
      description:
        "Cross-browser testing cloud for testing websites across different browsers",
      logo: "/images/tools/lambdatest-logo.png",
    },
    {
      name: "Hotjar",
      description:
        "Behavior analytics tool providing heatmaps and user recordings",
      logo: "/images/tools/hotjar-logo.png",
    },
    {
      name: "Figma",
      description:
        "Design tool for UI/UX design, prototyping, and collaboration",
      logo: "/images/tools/figma-logo.svg",
    },
  ],
  caseStudy: {
    title: "How We Improved Conversion Rates by 35% Through UI/UX Testing",
    client: "E-commerce Platform",
    challenge:
      "The client's e-commerce site had a high cart abandonment rate of 82% despite having competitive products and pricing. Users were struggling to complete purchases due to usability issues in the checkout process.",
    solution:
      "We conducted comprehensive UI/UX testing including usability testing with real users, heuristic evaluation, and accessibility assessment. We identified key friction points in the checkout process and created a testing-backed redesign proposal.",
    results: [
      "Reduced cart abandonment rate from 82% to 53%",
      "Improved checkout completion time from 4.2 minutes to 1.8 minutes",
      "Increased conversion rate by 35% overall",
      "Improved accessibility score from 64 to 96 (out of 100)",
    ],
    image: "/images/case-study/ui.jpg",
  },
  relatedServices: [
    {
      title: "Manual Testing",
      description:
        "Leverage human intuition and exploratory testing to identify issues that automated tests might miss.",
      icon: "👁️",
      link: "/services/manual-testing",
    },
    {
      title: "Mobile Testing",
      description:
        "Ensure your mobile applications perform flawlessly across all devices and operating systems.",
      icon: "📱",
      link: "/services/mobile-testing",
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

export default function UiUxTestingPage() {
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
