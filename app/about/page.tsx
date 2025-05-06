import type { Metadata } from "next";
import {
  AboutHero,
  OurMission,
  OurStory,
  Values,
  TestimonialsSection,
  OurTeam,
  Achievements,
  PartnerLogos,
} from "../components";

export const metadata: Metadata = {
  title: "About Us - ClanAP Technologies",
  description:
    "Learn about our QA testing company, our mission, our story, and our team of dedicated testing professionals.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutHero />
      <OurStory />
      <OurMission />
      <Values />
      <OurTeam />
      <Achievements />
      <TestimonialsSection />

      <PartnerLogos />
    </main>
  );
}
