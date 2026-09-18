
import Hero from "@/app/components/Landing-Page/Hero";
import StatsStrip from "@/app/components/Landing-Page/StatsStrip";
import ProblemSection from "@/app/components/Landing-Page/ProblemSection";
import Services from "@/app/components/Landing-Page/Services";
import WhyUs from "@/app/components/Landing-Page/WhyUs";
import Process from "@/app/components/Landing-Page/Process";
import CaseStudies from "@/app/components/Landing-Page/CaseStudies";
import ToolsStack from "@/app/components/Landing-Page/ToolsStack";
import Industries from "@/app/components/Landing-Page/Industries";
import ConversionSection from "@/app/components/Landing-Page/ConversionSection";
import Faq from "@/app/components/Landing-Page/Faq";
import { type Sector } from "./sectors";
import { PartnerLogos, TestimonialsSection } from "@/app/components";

const defaultPainPoints = [
  "Developers spend their sprint testing instead of building the roadmap you committed to.",
  "Bugs reach production and cost you customer trust you spent years earning.",
  "The QA req has been open for months and the ideal candidate still hasn't applied.",
  "One QA engineer structurally cannot cover automation, API, mobile, and performance testing alone.",
];

export default function LandingTemplate({ sector }: { sector?: Sector }) {
  return (
    <>
      <Hero kicker={sector?.kicker} />
      <StatsStrip />
      <PartnerLogos />
      <ProblemSection intro={sector?.intro} painPoints={sector?.painPoints ?? defaultPainPoints} />
      <Services />
      <WhyUs />
      <Process />
      <CaseStudies />
        <TestimonialsSection/>
      {/* <ToolsStack /> */}
    
      <Industries highlightName={sector?.industryName} />
      <ConversionSection />
      <Faq />
    </>
  );
}