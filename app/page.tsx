import type { Metadata } from "next";
import {
  CTASection,
  TestimonialsSection,
  ServicesSection,
  StatsSection,
  HeroSection,
  WhyChooseUs,
  PartnerLogos,
} from "./components";

export const metadata: Metadata = {
  title: "ClanAP Technologies - Excellence in QA Testing",
  description:
    "ClanAP Technologies perfects the entire software development lifecycle with top-tier QA practices throughout, from inception to completion.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />

      <PartnerLogos />
      <CTASection />
    </main>
  );
}
