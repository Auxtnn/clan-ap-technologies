import { CTASection } from "../../components/Pricing/PricingCTA";
import { AddonServices } from "../../components/Pricing/AddonService";
import { HeroSection } from "../../components/Pricing/HeroPricing";
import { ServiceSection } from "../../components/Pricing/PricingService";

interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  idealFor: string;
  popular?: boolean;
  features: string[];
  perfectFor: string[];
  technologies?: string[];
}

export default function PricingPage() {
  // QA Testing Packages
  const qaPackages: Package[] = [
    {
      id: "starter-qa",
      name: "STARTER QA",
      price: "$2,500 - $5,000",
      duration: "2-3 weeks",
      idealFor: "Small applications, basic websites",
      features: [
        "Manual functionality testing",
        "Cross-browser compatibility testing",
        "Basic performance testing",
        "Test case documentation",
        "Bug report with severity classification",
        "2 rounds of regression testing",
        "Final quality assurance report",
      ],
      perfectFor: [
        "Startups launching their first product",
        "Small businesses with simple applications",
        "MVP validation and testing",
      ],
    },
    {
      id: "professional-qa",
      name: "PROFESSIONAL QA",
      price: "$5,000 - $15,000",
      duration: "4-6 weeks",
      idealFor: "Medium applications, e-commerce sites",
      popular: true,
      features: [
        "Everything in Starter QA, plus:",
        "Automated testing framework setup",
        "API testing and integration testing",
        "Mobile responsiveness testing",
        "Security vulnerability assessment",
        "Load testing (up to 1,000 concurrent users)",
        "Database testing and validation",
        "User experience (UX) testing",
        "30-day post-launch support",
      ],
      perfectFor: [
        "Growing businesses with complex workflows",
        "E-commerce platforms",
        "SaaS applications with integrations",
      ],
    },
    {
      id: "enterprise-qa",
      name: "ENTERPRISE QA",
      price: "$15,000 - $40,000",
      duration: "6-12 weeks",
      idealFor: "Large-scale applications, enterprise systems",
      features: [
        "Everything in Professional QA, plus:",
        "Comprehensive test automation suite",
        "Performance testing (up to 10,000+ users)",
        "Advanced security penetration testing",
        "Accessibility compliance (WCAG 2.1)",
        "Multi-environment testing",
        "Integration with CI/CD pipelines",
        "Custom testing framework development",
        "Dedicated QA team assignment",
        "90-day post-launch support",
        "Quarterly quality reviews",
      ],
      perfectFor: [
        "Enterprise organizations",
        "Mission-critical applications",
        "Highly regulated industries",
      ],
    },
  ];

  // Development Packages
  const developmentPackages: Package[] = [
    {
      id: "web-dev-starter",
      name: "WEB DEVELOPMENT STARTER",
      price: "$8,000 - $20,000",
      duration: "6-10 weeks",
      idealFor: "Custom responsive websites",
      features: [
        "Custom responsive website development",
        "Content Management System (CMS)",
        "SEO optimization",
        "Basic e-commerce functionality (if needed)",
        "Integrated QA throughout development",
        "Cross-browser testing",
        "Mobile optimization",
        "3 months post-launch support",
        "SSL certificate and security setup",
      ],
      perfectFor: [
        "Small to medium businesses",
        "Professional service websites",
        "E-commerce startups",
      ],
      technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"],
    },
    {
      id: "mobile-app-dev",
      name: "MOBILE APP DEVELOPMENT",
      price: "$15,000 - $45,000",
      duration: "10-16 weeks",
      idealFor: "Native iOS and Android apps",
      popular: true,
      features: [
        "Native iOS and Android development",
        "Cross-platform compatibility",
        "App store submission assistance",
        "Push notifications setup",
        "Continuous QA integration",
        "Performance optimization",
        "Security implementation",
        "User analytics integration",
        "6 months post-launch support",
        "App store optimization (ASO)",
      ],
      perfectFor: [
        "Startups with mobile-first strategy",
        "Businesses expanding to mobile",
        "Consumer-facing applications",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      id: "enterprise-software",
      name: "ENTERPRISE SOFTWARE",
      price: "$35,000 - $100,000+",
      duration: "16-26 weeks",
      idealFor: "Large-scale enterprise systems",
      features: [
        "Custom enterprise application development",
        "Advanced database architecture",
        "Third-party integrations",
        "Advanced security implementations",
        "Comprehensive QA at every stage",
        "Load balancing and scalability",
        "Admin dashboard development",
        "API development and documentation",
        "12 months post-launch support",
        "Staff training and documentation",
      ],
      perfectFor: [
        "Large enterprises",
        "Complex business workflows",
        "Mission-critical systems",
      ],
      technologies: [
        "Full-stack solutions",
        "Cloud deployment",
        "Microservices",
      ],
    },
  ];

  // Hybrid Packages
  const hybridPackages: Package[] = [
    {
      id: "startup-accelerator",
      name: "STARTUP ACCELERATOR",
      price: "$12,000 - $25,000",
      duration: "Initial + $1,500/month",
      idealFor: "Startups needing ongoing QA",
      features: [
        "MVP development with integrated QA",
        "Monthly regression testing",
        "Feature testing for new releases",
        "Performance monitoring",
        "Bug tracking and resolution",
        "Quarterly security audits",
      ],
      perfectFor: [
        "Early-stage startups",
        "Rapid iteration needs",
        "Continuous development cycles",
      ],
    },
    {
      id: "business-growth",
      name: "BUSINESS GROWTH PACKAGE",
      price: "$25,000 - $60,000",
      duration: "Initial + $3,500/month",
      idealFor: "Growing businesses with evolving products",
      popular: true,
      features: [
        "Full application development",
        "Continuous integration testing",
        "Monthly performance optimization",
        "Feature enhancement testing",
        "User feedback analysis",
        "Competitive analysis reports",
      ],
      perfectFor: [
        "Scaling businesses",
        "Product evolution needs",
        "Market expansion plans",
      ],
    },
    {
      id: "enterprise-partnership",
      name: "ENTERPRISE PARTNERSHIP",
      price: "$60,000+",
      duration: "Initial + $7,500+/month",
      idealFor: "Large organizations with complex systems",
      features: [
        "Enterprise-grade development",
        "Dedicated QA team",
        "24/7 monitoring and support",
        "Advanced security testing",
        "Compliance maintenance",
        "Strategic technology consulting",
      ],
      perfectFor: [
        "Fortune 500 companies",
        "Regulated industries",
        "Complex infrastructure needs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <ServiceSection
        title="QA Testing Services"
        description="Comprehensive quality assurance solutions to ensure your applications work flawlessly"
        packages={qaPackages}
        category="qa"
      />

      <div className="bg-gray-50">
        <ServiceSection
          title="Development Services"
          description="QA-guaranteed development solutions with our zero-bug promise"
          packages={developmentPackages}
          category="development"
        />
      </div>

      <ServiceSection
        title="Hybrid Packages"
        description="Development + ongoing QA for businesses that need continuous quality assurance"
        packages={hybridPackages}
        category="hybrid"
      />

      <AddonServices />

      <CTASection />
    </div>
  );
}
