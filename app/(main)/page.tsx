import type { Metadata } from "next";
import {
  CTASection,
  TestimonialsSection,
  ServicesSection,
  StatsSection,
  HeroSection,
  WhyChooseUs,
  PartnerLogos,
} from "../components";
import IntelligentQA from "../components/Home/AddContent";

export const metadata: Metadata = {
  title: "Clan-AP Technologies Private Limited - Excellence in QA Testing",
  description:
    "Clan-AP Technologies Private Limited perfects the entire software development lifecycle with top-tier QA practices throughout, from inception to completion.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <IntelligentQA />
      <StatsSection />
      <TestimonialsSection />

      <PartnerLogos />
      <CTASection />
    </main>
  );
}
