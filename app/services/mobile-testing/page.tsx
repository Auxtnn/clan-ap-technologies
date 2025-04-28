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
  Smartphone,
  Layers,
  RefreshCw,
  Signal,
  Battery,
  Fingerprint,
  Lock,
  BarChart3,
  CheckCircle,
  Zap,
  TestTube,
  Palette,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Testing Services - ClanAP Technologies",
  description:
    "Ensure your mobile applications perform flawlessly across all devices, operating systems, and screen sizes with our comprehensive mobile testing services.",
};

// Service-specific data
const serviceData = {
  title: "Mobile Testing",
  icon: <Smartphone size={24} />,
  description:
    "Ensure your mobile applications perform flawlessly across all devices, operating systems, and screen sizes with comprehensive testing that validates functionality, usability, and performance.",
  heroImage: "/images/hero/mobile-testing.jpg",
  benefits: [
    {
      title: "Cross-Device Compatibility",
      description:
        "Validate your application's performance across various device types, screen sizes, and resolutions to ensure consistent user experience.",
      icon: <Layers size={24} />,
    },
    {
      title: "Platform Verification",
      description:
        "Test across multiple operating systems and versions (iOS, Android) to ensure your app functions correctly for all users.",
      icon: <RefreshCw size={24} />,
    },
    {
      title: "Network Condition Testing",
      description:
        "Evaluate app performance across different network environments from 2G to 5G and offline modes to ensure reliability in all conditions.",
      icon: <Signal size={24} />,
    },
    {
      title: "Battery & Resource Optimization",
      description:
        "Identify and resolve issues related to battery consumption, memory usage, and device resources to enhance app efficiency.",
      icon: <Battery size={24} />,
    },
    {
      title: "Usability & User Experience",
      description:
        "Ensure intuitive navigation, appropriate touch targets, and adherence to platform-specific design guidelines for superior user experience.",
      icon: <Fingerprint size={24} />,
    },
    {
      title: "Security & Performance",
      description:
        "Validate data protection, authentication mechanisms, and performance benchmarks to deliver secure, high-performing mobile applications.",
      icon: <Lock size={24} />,
    },
  ],
  approach: [
    {
      title: "Device Selection Strategy",
      description:
        "We analyze your target audience to develop a comprehensive testing matrix covering the most relevant devices, operating systems, and screen sizes.",
      icon: <BarChart3 size={24} />,
    },
    {
      title: "Functional Testing",
      description:
        "We verify all app features and functionalities work as expected across platforms, focusing on user flows and critical paths.",
      icon: <CheckCircle size={24} />,
    },
    {
      title: "Compatibility Testing",
      description:
        "Our extensive device lab and emulation tools ensure your app works properly across different hardware configurations and OS versions.",
      icon: <RefreshCw size={24} />,
    },
    {
      title: "Performance Evaluation",
      description:
        "We measure and optimize startup time, response rates, animation smoothness, and resource usage to ensure optimal performance.",
      icon: <Zap size={24} />,
    },
    {
      title: "Usability Analysis",
      description:
        "Our experts evaluate the mobile-specific user experience, including touch interactions, gestures, and platform-specific design patterns.",
      icon: <Fingerprint size={24} />,
    },
  ],
  relatedServices: [
    {
      title: "Automated Testing",
      description:
        "Accelerate your testing process with sophisticated automation that ensures comprehensive coverage.",
      icon: <TestTube size={24} />,
      link: "/services/automated-testing",
    },
    {
      title: "Performance Testing",
      description:
        "Ensure your applications perform optimally under various load conditions and user scenarios.",
      icon: <Zap size={24} />,
      link: "/services/performance-testing",
    },
    {
      title: "UI/UX Testing",
      description:
        "Validate user interface design, accessibility, and overall user experience.",
      icon: <Palette size={24} />,
      link: "/services/ui-ux-testing",
    },
  ],
  tools: [
    {
      name: "Appium",
      description:
        "Open-source test automation framework for native, hybrid and mobile web apps",
      logo: "/images/tools/appium-logo.svg",
    },
    {
      name: "BrowserStack",
      description:
        "Cloud-based cross-browser testing tool providing access to 2000+ real devices",
      logo: "/images/tools/browserstack-logo.svg",
    },
    {
      name: "XCTest",
      description: "Native testing framework for iOS applications",
      logo: "/images/tools/xctest.png",
    },
    {
      name: "Espresso",
      description: "Testing framework for Android UI testing",
      logo: "/images/tools/espresso.png",
    },
    {
      name: "Firebase Test Lab",
      description:
        "Cloud-based app testing infrastructure for Android and iOS apps",
      logo: "/images/tools/firebase.jpg",
    },
    {
      name: "Charles Proxy",
      description: "HTTP proxy / HTTP monitor for monitoring network traffic",
      logo: "/images/tools/charles.jpg",
    },
  ],
  caseStudy: {
    title: "How We Helped a Retail App Achieve 99.5% Crash-Free Sessions",
    client: "Major Retail Brand",
    challenge:
      "The client's mobile shopping app was experiencing inconsistent performance across different devices, with crash rates as high as 8% on certain Android devices and poor performance on older iOS versions.",
    solution:
      "We implemented a comprehensive mobile testing strategy including automated testing with Maestro, real device testing on 50+ device configurations, and deep performance analysis to identify memory leaks and UI rendering bottlenecks.",
    results: [
      "Reduced crash rate from 8% to 0.5% across all devices",
      "Improved app store rating from 3.2 to 4.7 stars",
      "Decreased load time by 40% on older devices",
      "Increased conversion rate by 27% due to improved stability",
    ],
    image: "/images/case-study/retail.jpg",
  },
};

export default function MobileTestingPage() {
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
