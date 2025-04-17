import type { Metadata } from "next";
import {
  ServiceHero,
  ServicesList,
  ProcessSection,
  ServicesFAQ,
  ServicesCTA,
} from "../components";

export const metadata: Metadata = {
  title: "QA Testing Services - ClanAP Technologies",
  description:
    "Explore our comprehensive range of quality assurance services including automated testing, mobile testing, security testing, and more.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero />
      <ServicesList />
      <ProcessSection />
      <ServicesFAQ />
      <ServicesCTA />
    </main>
  );
}
