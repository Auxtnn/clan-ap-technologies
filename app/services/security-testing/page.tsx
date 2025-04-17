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
  title: "Security Testing Services - ClanAP Technologies",
  description:
    "Protect your software from vulnerabilities with thorough security testing methodologies and compliance verification to ensure user data remains safe.",
};

// Service-specific data
const serviceData = {
  title: "Security Testing",
  icon: "🛡️",
  description:
    "Protect your software from vulnerabilities with thorough security testing methodologies and compliance verification to ensure your application and user data remain safe from threats.",
  heroImage: "/images/iso.jpg",
  benefits: [
    {
      title: "Vulnerability Detection",
      description:
        "Identify security flaws, weaknesses, and potential entry points before malicious actors can exploit them.",
      icon: "🔍",
    },
    {
      title: "Data Protection",
      description:
        "Ensure sensitive user data is properly encrypted, stored, and transmitted according to industry best practices.",
      icon: "🔒",
    },
    {
      title: "Compliance Assurance",
      description:
        "Verify your application meets relevant security standards and regulations like GDPR, HIPAA, PCI DSS, and others.",
      icon: "✅",
    },
    {
      title: "Risk Mitigation",
      description:
        "Reduce the financial and reputational risks associated with security breaches and data leaks.",
      icon: "💰",
    },
    {
      title: "Authentication Validation",
      description:
        "Ensure your user authentication and authorization systems are robust and secure against unauthorized access.",
      icon: "🔑",
    },
    {
      title: "Trust Building",
      description:
        "Demonstrate your commitment to security to users, partners, and stakeholders, building confidence in your application.",
      icon: "🤝",
    },
  ],
  approach: [
    {
      title: "Security Assessment",
      description:
        "We analyze your application architecture, technology stack, and data flow to identify potential security risks and develop a testing strategy.",
      icon: "📊",
    },
    {
      title: "Vulnerability Scanning",
      description:
        "Our team uses specialized tools to scan your application for known security vulnerabilities, misconfigurations, and outdated components.",
      icon: "🔍",
    },
    {
      title: "Penetration Testing",
      description:
        "We attempt to exploit vulnerabilities in your system to identify security weaknesses that automated scans might miss.",
      icon: "🛠️",
    },
    {
      title: "Security Code Review",
      description:
        "Our experts analyze source code to identify security issues like injection vulnerabilities, weak cryptography, and insecure data handling.",
      icon: "💻",
    },
    {
      title: "Remediation & Verification",
      description:
        "We provide detailed remediation guidance and verify that security issues have been properly addressed after fixes are implemented.",
      icon: "✅",
    },
  ],
  tools: [
    {
      name: "OWASP ZAP",
      description:
        "Open-source web application security scanner for finding vulnerabilities",
      logo: "/images/tools/owaspzap-logo.png",
    },
    {
      name: "Burp Suite",
      description:
        "Integrated platform for performing security testing of web applications",
      logo: "/images/tools/burpsuite-logo.png",
    },
    {
      name: "Nessus",
      description:
        "Vulnerability assessment solution for identifying security vulnerabilities",
      logo: "/images/tools/nessus-logo.png",
    },
    {
      name: "Metasploit",
      description: "Penetration testing framework for simulating attacks",
      logo: "/images/tools/metasploit-logo.png",
    },
    {
      name: "SonarQube",
      description:
        "Static code analysis tool for identifying security issues in code",
      logo: "/images/tools/sonarqube-logo.svg",
    },
    {
      name: "Wireshark",
      description:
        "Network protocol analyzer for examining traffic and detecting anomalies",
      logo: "/images/tools/wireshark-logo.svg",
    },
  ],
  caseStudy: {
    title: "How We Secured a Financial Application Against Advanced Threats",
    client: "Fintech Startup",
    challenge:
      "The client was preparing to launch a new financial services platform that would handle sensitive financial data but had concerns about security vulnerabilities and regulatory compliance.",
    solution:
      "We implemented a comprehensive security testing regime including automated vulnerability scanning, manual penetration testing, and code review with a focus on OWASP Top 10 vulnerabilities and PCI DSS compliance requirements.",
    results: [
      "Identified 24 security vulnerabilities including 3 critical issues",
      "Discovered and remediated an SQL injection vulnerability that could have exposed customer data",
      "Ensured 100% compliance with PCI DSS security requirements",
      "Successfully passed external security audit with zero high-severity findings",
    ],
    image: "/images/case-study/test3.jpg",
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
      title: "Performance Testing",
      description:
        "Ensure your applications perform optimally under various load conditions and user scenarios.",
      icon: "⚡",
      link: "/services/performance-testing",
    },
    {
      title: "Database Testing",
      description:
        "Ensure data integrity, performance, and security with comprehensive database testing.",
      icon: "🗄️",
      link: "/services/database-testing",
    },
  ],
};

export default function SecurityTestingPage() {
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
