import { Metadata } from "next";
import LandingTemplate from "./LandingTemplate";

export const metadata: Metadata = {
  title: "Get a Full QA Team for the Cost of One Engineer | Clan-AP Technologies",
  description:
    "A complete QA team — functional, API, mobile, automation, and CI/CD testing — for what you'd pay one engineer. Book a 30-minute discovery call.",
  robots: { index: true, follow: true },
};

export default function QATeamPage() {
  return <LandingTemplate />;
}