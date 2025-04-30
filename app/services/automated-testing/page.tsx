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
  Search,
  TestTube,
  Bot,
  Zap,
  RefreshCw,
  Bug,
  CheckCircle,
  DollarSign,
  BarChart3,
  Wrench,
  Code,
  LineChart,
  Plug,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automated Testing Services - ClanAP Technologies",
  description:
    "Our automated testing services help you accelerate testing cycles, improve coverage, and deliver high-quality software faster.",
};

// Service-specific data
const serviceData = {
  title: "Automated Testing",
  icon: <Bot size={24} />,
  description:
    "Accelerate your testing process with sophisticated automation that ensures comprehensive coverage and faster release cycles.",
  heroImage: "/images/hero/automated-testing.jpg",
  benefits: [
    {
      title: "Faster Testing Cycles",
      description:
        "Automated tests run significantly faster than manual testing, allowing you to test more frequently and release with confidence.",
      icon: <Zap size={24} />,
    },
    {
      title: "Improved Test Coverage",
      description:
        "Create comprehensive test suites that cover more scenarios and edge cases than manual testing alone could achieve.",
      icon: <RefreshCw size={24} />,
    },
    {
      title: "Reduced Regression Bugs",
      description:
        "Catch regressions immediately with automated tests that run after every code change, preventing issues from reaching production.",
      icon: <Bug size={24} />,
    },
    {
      title: "Consistent Results",
      description:
        "Eliminate human error and variability with tests that execute the same way every time, providing reliable results.",
      icon: <CheckCircle size={24} />,
    },
    {
      title: "Lower Long-term Costs",
      description:
        "While initial setup requires investment, automated tests provide significant ROI through reduced manual testing hours and fewer production issues.",
      icon: <DollarSign size={24} />,
    },
    {
      title: "Objective Quality Metrics",
      description:
        "Generate detailed reports and analytics that provide objective measures of your application's quality and test coverage.",
      icon: <BarChart3 size={24} />,
    },
  ],
  approach: [
    {
      title: "Assessment & Strategy",
      description:
        "We analyze your application and testing needs to develop a tailored automation strategy, identifying the best frameworks and approaches for your specific requirements.",
      icon: <Search size={24} />,
    },
    {
      title: "Test Framework Setup",
      description:
        "Our team establishes a robust automation framework with the necessary infrastructure, including CI/CD integration, reporting tools, and cross-browser/device testing capabilities.",
      icon: <Wrench size={24} />,
    },
    {
      title: "Test Development",
      description:
        "We develop maintainable, reliable automated tests following best practices like the Page Object Model, data-driven testing, and appropriate assertions.",
      icon: <Code size={24} />,
    },
    {
      title: "Execution & Monitoring",
      description:
        "Tests are integrated into your development workflow, with scheduled executions and real-time monitoring to quickly identify and address issues.",
      icon: <LineChart size={24} />,
    },
    {
      title: "Maintenance & Evolution",
      description:
        "We ensure test suites remain effective as your application evolves, refactoring tests as needed and expanding coverage for new features.",
      icon: <RefreshCw size={24} />,
    },
  ],
  relatedServices: [
    {
      title: "API Testing",
      description:
        "Comprehensive testing of your application's APIs for reliability, security, and performance.",
      icon: <Plug size={24} />,
      link: "/services/api-testing",
    },
    {
      title: "Performance Testing",
      description:
        "Ensure your applications perform optimally under various load conditions.",
      icon: <Zap size={24} />,
      link: "/services/performance-testing",
    },
    {
      title: "Mobile Testing",
      description:
        "Test your mobile applications across multiple devices and operating systems.",
      icon: <Smartphone size={24} />,
      link: "/services/mobile-testing",
    },
  ],
  tools: [
    {
      name: "Playwright",
      description:
        "Microsoft's automation tool for reliable cross-browser testing",
      logo: "/images/tools/playwright-logo.svg",
    },
    {
      name: "Cypress",
      description: "Modern JavaScript testing framework for end-to-end testing",
      logo: "/images/tools/cypress-logo.svg",
    },
    {
      name: "Maestro",
      description:
        "A UI testing framework designed to simplify mobile UI automation",
      logo: "/images/tools/maestro.png",
    },
    {
      name: "Appium",
      description:
        "Mobile automation testing framework for native, hybrid and mobile web apps",
      logo: "/images/tools/appium-logo.svg",
    },
    {
      name: "Selenium",
      description:
        "Industry-standard web automation framework for cross-browser testing",
      logo: "/images/tools/selenium-logo.svg",
    },
    {
      name: "Jest",
      description: "JavaScript testing framework with a focus on simplicity",
      logo: "/images/tools/jest-logo.svg",
    },
  ],
  caseStudy: {
    title: "How We Reduced Testing Time by 75% for a FinTech Platform",
    client: "Leading FinTech Company",
    challenge:
      "The client's manual testing process was consuming up to two weeks per release, leading to deployment delays and slow feature rollouts. Frequent manual errors and the growing volume of test cases further increased execution time, compounding the release cycle bottleneck.",
    solution:
      "We designed a smart automation strategy by clearly segregating test cases between manual and automated workflows. Using Playwright for frontend automation and parallel execution to handle large-scale test scenarios, we integrated the solution into their CI/CD pipeline, ensuring faster, more accurate testing cycles.",
    results: [
      "Reduced testing time from 2 weeks to just 3 days per release",
      "Boosted test coverage from 60% to 92% across web and API layers",
      "Detected 85% more regression issues before production deployments",
      "Empowered the client to shift from monthly to weekly release cycles",
    ],
    image: "/images/case-study/test2.jpg",
  },
};

export default function AutomatedTestingPage() {
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
