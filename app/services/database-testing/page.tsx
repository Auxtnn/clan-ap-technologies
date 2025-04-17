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
  title: "Database Testing Services - ClanAP Technologies",
  description:
    "Ensure data integrity, performance, and security with comprehensive database testing, validation, and optimization services.",
};

// Service-specific data
const serviceData = {
  title: "Database Testing",
  icon: "🗄️",
  description:
    "Ensure data integrity, performance, and security with comprehensive database testing, validation, and optimization services that guarantee reliable data management for your applications.",
  heroImage: "/images/iso.jpg",
  benefits: [
    {
      title: "Data Integrity Assurance",
      description:
        "Verify that your database maintains data accuracy and consistency through all operations and transactions.",
      icon: "✅",
    },
    {
      title: "Query Performance Optimization",
      description:
        "Identify and resolve inefficient queries that could cause slowdowns or timeout issues in your application.",
      icon: "⚡",
    },
    {
      title: "Schema Validation",
      description:
        "Ensure your database schema is properly designed to support your application's requirements and data relationships.",
      icon: "📊",
    },
    {
      title: "Data Security Enhancement",
      description:
        "Identify potential security vulnerabilities in your database configuration and access controls to protect sensitive information.",
      icon: "🔒",
    },
    {
      title: "Migration Validation",
      description:
        "Ensure smooth database migrations and upgrades without data loss or corruption during transitions.",
      icon: "🔄",
    },
    {
      title: "Scalability Assessment",
      description:
        "Evaluate how your database will perform under increased load and data volume to support business growth.",
      icon: "📈",
    },
  ],
  approach: [
    {
      title: "Database Assessment",
      description:
        "We analyze your database architecture, schema design, and query patterns to identify potential issues and optimization opportunities.",
      icon: "📊",
    },
    {
      title: "Functional Testing",
      description:
        "Our team verifies data CRUD operations, stored procedures, triggers, and business rule implementation to ensure correct functionality.",
      icon: "✅",
    },
    {
      title: "Performance Testing",
      description:
        "We evaluate query execution times, indexing strategies, and database response under various load conditions to optimize performance.",
      icon: "⚡",
    },
    {
      title: "Security Testing",
      description:
        "Our experts assess access controls, encryption implementation, and vulnerability protection to ensure data security.",
      icon: "🔒",
    },
    {
      title: "Data Integrity Testing",
      description:
        "We validate data consistency, referential integrity, and transaction management to prevent data corruption issues.",
      icon: "🔄",
    },
  ],
  tools: [
    {
      name: "SQL Server Management Studio",
      description:
        "Integrated environment for administering SQL Server databases",
      logo: "/images/tools/microsoft-sql-server-logo.svg",
    },
    {
      name: "MongoDB Compass",
      description: "GUI for MongoDB database visualization and management",
      logo: "/images/tools/mongodb-compass.png",
    },
    {
      name: "DbUnit",
      description:
        "JUnit extension for database-driven projects that puts your database into a known state",
      logo: "/images/tools/dbunit-logo.jpg",
    },
    {
      name: "pgTAP",
      description: "Unit testing framework for PostgreSQL databases",
      logo: "/images/tools/pgtap-logo.png",
    },
    {
      name: "JMeter",
      description:
        "Load testing tool for analyzing database performance under load",
      logo: "/images/tools/jmeter-logo.png",
    },
    {
      name: "Liquibase",
      description: "Database schema change management and version control tool",
      logo: "/images/tools/liquibase-logo.png",
    },
  ],
  caseStudy: {
    title: "How We Improved Database Performance by 300% for a SaaS Platform",
    client: "Enterprise SaaS Provider",
    challenge:
      "The client's application was experiencing significant database performance issues as their user base grew, with query times exceeding 30 seconds during peak hours and occasional database deadlocks causing system outages.",
    solution:
      "We conducted comprehensive database testing including query performance analysis, index optimization, schema evaluation, and load testing. We identified inefficient queries, missing indexes, and opportunities for denormalization and caching.",
    results: [
      "Reduced average query response time from 12 seconds to 0.4 seconds",
      "Eliminated database deadlocks completely with proper transaction management",
      "Decreased database server CPU utilization from 95% to 40% during peak hours",
      "Supported 3x user growth without additional hardware resources",
    ],
    image: "/images/case-study/test3.jpg",
  },
  relatedServices: [
    {
      title: "Performance Testing",
      description:
        "Ensure your applications perform optimally under various load conditions and user scenarios.",
      icon: "⚡",
      link: "/services/performance-testing",
    },
    {
      title: "API Testing",
      description:
        "Validate the functionality, reliability, and security of your APIs with comprehensive endpoint testing.",
      icon: "🔌",
      link: "/services/api-testing",
    },
    {
      title: "Security Testing",
      description:
        "Protect your software from vulnerabilities with thorough security testing methodologies.",
      icon: "🛡️",
      link: "/services/security-testing",
    },
  ],
};

export default function DatabaseTestingPage() {
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
