import {
  CaseStudyHeading,
  CaseStudyHeroMain,
  Solution,
  CaseStudyTestimonials,
  Benefit,
  StatItem,
  CaseStudyCTA,
} from "../components";

import {
  Clock,
  Shield,
  Database,
  ShieldCheck,
  LineChart,
  Lock,
  Users,
  CheckCircle,
  Zap,
  Smile,
  BarChart3,
  RefreshCcw,
  BarChart2,
  Clipboard,
  FlaskConical,
  Code,
  Eye,
  Sparkles,
  Accessibility,
  Layers,
  Play,
  Scale,
  Info,
} from "lucide-react";

export const CaseStudyPage = () => {
  const caseStudies = [
    {
      id: "cypress",
      title: "Implementing Cypress for Web Application QA",
      subtitle:
        "How Clan-AP Technologies enhanced testing efficiency and software reliability for an e-commerce company using Cypress",
      category: "E-Commerce",

      challenges: [
        "Inefficient manual testing processes",
        "Need for comprehensive testing coverage",
        "Inconsistent user experience across platforms",
        "Accessibility compliance requirements",
      ],
      background:
        "A leading e-commerce company sought to enhance their web application's quality assurance processes to improve customer satisfaction and operational efficiency. Their existing testing approach was primarily manual, leading to inconsistencies in quality and delayed release cycles.",
      backgroundDetails:
        "The client needed a comprehensive testing solution that could handle their complex e-commerce flows, ensure cross-browser compatibility, and maintain accessibility standards while accelerating their release processes.",
      solutions: [
        {
          icon: "play",
          title: "End-to-End Testing",
          description:
            "Used Cypress to automate user journey tests from login to checkout, ensuring all transactions executed as expected.",
        },
        {
          icon: "flask-conical",
          title: "Functional Testing",
          description:
            "Automated tests for all critical functions, such as product search, filtering, and user profile updates.",
        },
        {
          icon: "accessibility",
          title: "Accessibility Testing",
          description:
            "Integrated cypress-axe for accessibility checks to ensure the website adhered to WCAG standards.",
        },
        {
          icon: "layers",
          title: "Compatibility Testing",
          description:
            "Leveraged Cypress to test the application across multiple browsers and screen resolutions can add, different devices like desktop and mobile",
        },
      ],
      stats: [
        {
          icon: "clock",
          value: "50%",
          label: "Improved test execution speed",
        },
        {
          icon: "shield",
          value: "40%",
          label: "Enhanced bug detection rate",
        },
        {
          icon: "users",
          value: "Broader",
          label: "Expanded user accessibility",
        },
        {
          icon: "check",
          value: "Consistent",
          label: "User experience across all platforms",
        },
      ],
      benefits: [
        {
          icon: "lightning",
          title: "Faster Releases",
          description:
            "Accelerated deployment cycles enabled quicker product updates and feature releases",
        },
        {
          icon: "shield",
          title: "High Quality",
          description:
            "Maintained rigorous quality standards ensuring robust application performance",
        },
        {
          icon: "smile",
          title: "Enhanced User Satisfaction",
          description:
            "Improved end-user experience leading to increased satisfaction and retention",
        },
        {
          icon: "chart",
          title: "Consistent Testing",
          description:
            "Provided reliable and consistent testing results, reducing bugs in production",
        },
        {
          icon: "scale",
          title: "Scalability",
          description:
            "Easily scaled to accommodate complex applications and testing scenarios",
        },
        {
          icon: "analytics",
          title: "Comprehensive Analytics",
          description:
            "Provided detailed insights into application performance and user behavior",
        },
      ],
      testimonial: {
        quote:
          "The adoption of Cypress transformed our QA process, enabling faster releases while maintaining high quality and user satisfaction. The team at Clan-AP Technologies has been instrumental in implementing this solution efficiently.",
      },
    },
    {
      id: "healthcare",
      title: "Streamlining QA Processes for a Healthcare Software Provider",
      subtitle:
        "How Clan-AP Technologies implemented comprehensive testing strategies to enhance software reliability and improve customer satisfaction",
      category: "Healthcare Software",

      challenges: [
        "Slow and inefficient QA processes",
        "Delayed releases and feature deployments",
        "Growing backlog of unresolved bugs",
        "Declining customer satisfaction",
      ],
      background:
        "A healthcare software provider specializing in business operations management was experiencing significant issues with software reliability and user experience. While the company had a proficient development team, they lacked structured QA processes, resulting in numerous production bugs and an inconsistent user experience.",
      backgroundDetails:
        "The client needed a structured QA process that could integrate seamlessly into their existing agile development cycle to deliver efficient deployment processes while ensuring their software was robust, secure, and user-friendly.",
      solutions: [
        {
          icon: "clipboard",
          title: "Manual QA Process",
          description:
            "Established a structured approach to identify and document bugs effectively, developing comprehensive test plans and cases based on requirements and business objectives.",
        },
        {
          icon: "beaker",
          title: "Automated Testing",
          description:
            "Designed and implemented automation frameworks using Playwright to perform regular testing, focusing on critical workflows and ensuring consistent application behavior.",
        },
        {
          icon: "code",
          title: "API Testing",
          description:
            "Conducted comprehensive API testing to ensure backend functionality was working properly, validating data integrity and response accuracy.",
        },
        {
          icon: "refresh",
          title: "CI/CD Integration",
          description:
            "Set up CI/CD pipelines to align testing with continuous integration and deployment processes, enabling faster and more reliable release cycles.",
        },
      ],
      stats: [
        {
          icon: "clock",
          value: "40%",
          label: "Reduction in software downtime",
        },
        {
          icon: "lightning",
          value: "50%",
          label: "Streamlined deployment processes",
        },
        {
          icon: "smile",
          value: "25%",
          label: "Increase in user retention rate",
        },
        {
          icon: "chart",
          value: "700+",
          label: "Bugs identified and resolved",
        },
      ],
      testimonial: {
        quote:
          "We express our sincere appreciation for selecting Clan-AP Technologies as your trusted partner. Your confidence in our software testing services is invaluable, and we are committed to surpassing your expectations. We look forward to a continued collaboration marked by mutual success and growth.",
      },
    },
    {
      id: "resttech",
      title: "Establishing Full QA Processes to Enhance Software Reliability",
      subtitle:
        "How Clan-AP Technologies implemented comprehensive QA processes for a RestTech firm to improve software quality and user satisfaction",
      category: "Restaurant Technology",
      clientName: "DineOS",
      clientLogo: "/logos/dineos-logo.svg",
      backgroundVariant: "gradient",
      challenges: [
        "Lack of QA processes and standards",
        "Software reliability issues",
        "Poor user experience",
        "Customer satisfaction issues",
      ],
      background:
        "A RestTech startup specializing in managing business operations was experiencing issues with software reliability and user experience, subsequently impacting customer satisfaction and retention. While the client's development team was proficient in coding, no QA processes had been introduced.",
      backgroundDetails:
        "The client needed to ensure that their software was robust, secure, and user-friendly to maintain their competitive edge in the restaurant technology market and support their growing customer base.",
      solutions: [
        {
          icon: "clipboard",
          title: "Functional Testing",
          description:
            "Created a structured approach to ensure all features worked as intended, with comprehensive test plans for each software module.",
        },
        {
          icon: "eye",
          title: "UI Testing",
          description:
            "Ensured that the live application matched prototype designs and provided a user-friendly experience across different devices and screen sizes.",
        },
        {
          icon: "code",
          title: "API Testing",
          description:
            "Monitored backend functionality to ensure proper data processing, response accuracy, and security measures were in place.",
        },
        {
          icon: "sparkles",
          title: "Automation Testing",
          description:
            "Established automation framework from ground up to a full-fledged system performing regular testing to ensure software reliability.",
        },
      ],
      process: [
        {
          step: 1,
          title: "Initial Assessment",
          description:
            "Thorough evaluation of existing processes and identification of key improvement areas",
        },
        {
          step: 2,
          title: "QA Framework Development",
          description:
            "Creation of comprehensive testing methodology tailored to the client's specific needs",
        },
        {
          step: 3,
          title: "Automation Implementation",
          description:
            "Development of automated testing scripts for repetitive and critical functionalities",
        },
        {
          step: 4,
          title: "Continuous Integration",
          description:
            "Integration of testing processes with development workflows for seamless deployment",
        },
        {
          step: 5,
          title: "Daily Reporting & Communication",
          description:
            "Establishment of clear communication channels and regular progress updates",
        },
      ],
      stats: [
        {
          icon: "clock",
          value: "40%",
          label: "Reduction in software downtime",
        },
        {
          icon: "lightning",
          value: "50%",
          label: "Streamlined deployment processes",
        },
        {
          icon: "smile",
          value: "25%",
          label: "Increased user retention rate",
        },
        {
          icon: "chart",
          value: "Significant",
          label: "Improvement in customer satisfaction",
        },
      ],
      testimonial: {
        quote:
          "With well-organized QA processes in place, we've been able to scale our product with confidence and focus more on innovation rather than troubleshooting.",
        author: "CTO, RestTech Startup",
      },
    },
    {
      id: "ll-project",
      title: "Establishing Robust QA Processes for a Restaurant POS System",
      subtitle:
        "How Clan-AP Technologies implemented comprehensive testing strategies to improve software reliability and enhance user experience for the Loving Loyalty platform",
      category: "POS System",

      challenges: [
        "Frequent production bugs and system failures",
        "Lack of structured testing and regression testing",
        "Unstable deployments causing business disruptions",
        "Inconsistent user experience across platforms",
        "Hardware integration failures with payment terminals and printers",
      ],
      background:
        "Loving Loyalty (LL) is a Point of Sale (POS) system designed for restaurants to efficiently manage their business operations. Before a dedicated QA team was introduced, the application faced numerous issues that impacted functionality, stability, and usability, affecting customer satisfaction and business operations.",
      backgroundDetails:
        "The client needed a comprehensive testing solution that could ensure the application was robust, secure, and user-friendly while supporting complex restaurant workflows including menu management, order processing, payment handling, and hardware integration.",
      solutions: [
        {
          icon: "clipboard",
          title: "Manual Testing Process",
          description:
            "Established a structured approach to identify and document bugs effectively, creating over 1,000 test cases for different user roles and continuously updating them as new features developed.",
        },
        {
          icon: "code",
          title: "API Testing",
          description:
            "Conducted comprehensive API testing to ensure backend functionality was working properly, validating data integrity and response accuracy.",
        },
        {
          icon: "sparkles",
          title: "Automation Framework",
          description:
            "Designed and developed a Playwright automation framework using the Page Object Model (POM), with over 900 automated test scripts for both desktop and mobile views.",
        },
        {
          icon: "refresh",
          title: "CI/CD Integration",
          description:
            "Set up testing processes that aligned with continuous integration and deployment workflows, enabling faster and more reliable release cycles.",
        },
      ],
      stats: [
        {
          icon: "clock",
          value: "30%",
          label: "Improvement in issue detection and resolution time",
        },
        {
          icon: "lightning",
          value: "50%",
          label: "Reduction in manual testing efforts",
        },
        {
          icon: "shield",
          value: "900+",
          label: "Automated test cases",
        },
        {
          icon: "chart",
          value: "Remarkable",
          label: "Rise in user happiness and experience quality",
        },
      ],
      benefits: [
        {
          icon: "lightning",
          title: "Faster Releases",
          description:
            "Accelerated deployment cycles with early bug detection enabled quicker product updates and feature releases",
        },
        {
          icon: "shield",
          title: "Enhanced Stability",
          description:
            "Maintained rigorous quality standards ensuring robust application performance with fewer production issues",
        },
        {
          icon: "smile",
          title: "Improved User Experience",
          description:
            "More consistent interface and reliable functionality leading to increased restaurant staff satisfaction",
        },
        {
          icon: "chart",
          title: "Reliable Hardware Integration",
          description:
            "Ensured payment terminals, receipt printers, and device connections functioned consistently",
        },
        {
          icon: "scale",
          title: "Scalable Testing",
          description:
            "Automated framework easily accommodated new features and testing scenarios as the application evolved",
        },
        {
          icon: "analytics",
          title: "Comprehensive Test Coverage",
          description:
            "Thorough testing across all roles (Cashier, Customer, Driver) and critical business workflows",
        },
      ],
      testimonial: {
        quote:
          "With well-organized QA processes in place, we've been able to scale our product with confidence and focus more on innovation rather than troubleshooting.",
      },
      process: [
        {
          step: 1,
          title: "Initial Assessment",
          description:
            "Thorough evaluation of existing processes and identification of key improvement areas",
        },
        {
          step: 2,
          title: "Test Framework Development",
          description:
            "Creation of comprehensive testing methodology tailored to the client's specific needs",
        },
        {
          step: 3,
          title: "Automation Implementation",
          description:
            "Development of automated testing scripts for repetitive and critical functionalities",
        },
        {
          step: 4,
          title: "Continuous Integration",
          description:
            "Integration of testing processes with development workflows for seamless deployment",
        },
        {
          step: 5,
          title: "Ongoing Quality Assurance",
          description:
            "Continuous testing and improvement of both existing and new features",
        },
      ],
    },

    {
      id: "courier-project",
      title:
        "Enhancing Data Reliability and Platform Security for a Freight Logistics Platform",
      subtitle:
        "How Clan-AP Technologies optimized backend performance and fortified application security to support reliable courier operations and safeguard sensitive logistics data.",
      category: "Freight & Courier Software",

      challenges: [
        "Inaccurate delivery tracking due to data inconsistency",
        "Performance issues from unoptimized database queries",
        "Exposure to potential security threats in customer and vendor data modules",
        "Lack of secure access controls and audit logging",
      ],
      background:
        "A leading freight and courier service platform handling thousands of deliveries daily was encountering backend challenges. Data inconsistencies in shipment status, route updates, and billing records were creating operational inefficiencies. Moreover, the absence of structured security testing left the platform vulnerable to breaches and data leaks.",
      backgroundDetails:
        "Clan-AP Technologies was engaged to conduct end-to-end database validation and implement security testing strategies to ensure fast, accurate, and secure delivery management.",
      solutions: [
        {
          icon: "database",
          title: "Database Testing",
          description:
            "Implemented a robust strategy to validate and optimize data operations across the platform, including optimization of complex delivery and tracking queries for performance, ensuring consistency in shipment updates, invoicing, and route planning, and applying data constraints, indexing, and transactional validation to maintain integrity.",
        },
        {
          icon: "shield",
          title: "Security Testing",
          description:
            "Performed thorough security validation to secure the platform by assessing API endpoints and access flows for security gaps, conducting SQL injection, XSS, and session management testing, and ensuring encryption of sensitive data like addresses, billing info, and user credentials.",
        },
        {
          icon: "refresh",
          title: "API-Database Sync Validation",
          description:
            "Verified data consistency between mobile/web user interfaces and backend services via API-layer validation.",
        },
        {
          icon: "lock",
          title: "Audit Logging & Access Control",
          description:
            "Implemented secure access layers for roles (admin, driver, vendor) and ensured traceable data access logs for accountability.",
        },
      ],
      stats: [
        {
          icon: "clock",
          value: "50%",
          label: "Reduction in delivery update failures due to database issues",
        },
        {
          icon: "zap",
          value: "65%",
          label:
            "Boost in API response and data fetch time through query tuning",
        },
        {
          icon: "shieldCheck",
          value: "85%",
          label: "Elimination of major security vulnerabilities",
        },
        {
          icon: "lineChart",
          value: "99%",
          label: "Data consistency across delivery lifecycle maintained",
        },
      ],

      testimonial: {
        quote:
          "Partnering with Clan-AP Technologies helped us eliminate backend delays and security risks. Their structured approach enabled our operations team to confidently manage daily deliveries at scale with accurate and secure data handling.",
      },
    },
  ];

  // Helper function to render the appropriate Lucide icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "clock":
        return <Clock className="h-8 w-8" />;
      case "shield":
        return <Shield className="h-8 w-8" />;
      case "users":
        return <Users className="h-8 w-8" />;
      case "check":
        return <CheckCircle className="h-8 w-8" />;
      case "lightning":
        return <Zap className="h-5 w-5" />;
      case "smile":
        return <Smile className="h-5 w-5" />;
      case "chart":
        return <BarChart3 className="h-5 w-5" />;
      case "scale":
        return <Scale className="h-5 w-5" />;
      case "analytics":
        return <BarChart2 className="h-5 w-5" />;
      case "clipboard":
        return <Clipboard className="h-6 w-6" />;
      case "beaker":
      case "flask-conical":
        return <FlaskConical className="h-6 w-6" />;
      case "code":
        return <Code className="h-6 w-6" />;
      case "refresh":
        return <RefreshCcw className="h-6 w-6" />;
      case "database":
        return <Database className="h-6 w-6" />;
      case "shieldCheck":
        return <ShieldCheck className="h-6 w-6" />;
      case "lineChart":
        return <LineChart className="h-6 w-6" />;
      case "lock":
        return <Lock className="h-6 w-6" />;
      case "zap":
        return <Zap className="h-6 w-6" />;
      case "eye":
        return <Eye className="h-6 w-6" />;
      case "sparkles":
        return <Sparkles className="h-6 w-6" />;
      case "accessibility":
        return <Accessibility className="h-6 w-6" />;
      case "layers":
        return <Layers className="h-6 w-6" />;
      case "play":
        return <Play className="h-6 w-6" />;
      default:
        return <Info className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CaseStudyHeroMain />

      {/* Case Studies */}
      {caseStudies.map((caseStudy, index) => (
        <div key={caseStudy.id} id={caseStudy.id}>
          {/* Case Study Heading */}
          <CaseStudyHeading
            title={caseStudy.title}
            subtitle={caseStudy.subtitle}
            category={caseStudy.category}
            backgroundVariant={caseStudy.backgroundVariant}
          />

          {/* Content Sections */}
          <div className="container mx-auto px-4 py-12">
            <div className="lg:w-11/12 mx-auto">
              {/* Challenge Section */}
              <section className="mb-16">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5 bg-gray-100 p-8">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        The Challenge
                      </h2>
                      <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
                      <ul className="space-y-3">
                        {caseStudy.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-3 flex-shrink-0 mt-0.5">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <p className="text-gray-700">{challenge}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:w-3/5 p-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        Background
                      </h3>
                      <p className="text-gray-700 mb-6">
                        {caseStudy.background}
                      </p>

                      <p className="text-gray-700">
                        {caseStudy.backgroundDetails}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Solution Section */}
              {caseStudy.solutions && (
                <section className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Our Solution
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {caseStudy.solutions.map((solution, i) => (
                      <Solution
                        key={i}
                        icon={renderIcon(solution.icon)}
                        title={solution.title}
                        description={solution.description}
                      />
                    ))}
                  </div>

                  {/* Process steps - if available */}
                  {caseStudy.process && (
                    <div className="bg-gray-100 rounded-xl p-8 mt-12">
                      <h3 className="text-xl font-bold mb-6 text-gray-800">
                        Comprehensive QA Process
                      </h3>
                      <div className="space-y-6">
                        {caseStudy.process.map((step) => (
                          <div key={step.step} className="flex">
                            <div className="flex-shrink-0 mr-4">
                              <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold">
                                {step.step}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                {step.title}
                              </h4>
                              <p className="text-gray-700">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* Results Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                  Results & Impact
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 mb-12">
                  {caseStudy.stats.map((stat, i) => (
                    <StatItem
                      key={i}
                      icon={renderIcon(stat.icon)}
                      value={stat.value}
                      label={stat.label}
                    />
                  ))}
                </div>

                {caseStudy.benefits && (
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                      Key Benefits
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {caseStudy.benefits.map((benefit, i) => (
                        <Benefit
                          key={i}
                          icon={renderIcon(benefit.icon)}
                          title={benefit.title}
                          description={benefit.description}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {caseStudy.testimonial && (
                  <CaseStudyTestimonials quote={caseStudy.testimonial.quote} />
                )}
              </section>

              {/* Divider between case studies */}
              {index < caseStudies.length - 1 && (
                <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Call to Action Section */}
      <CaseStudyCTA />
    </div>
  );
};

export default CaseStudyPage;
