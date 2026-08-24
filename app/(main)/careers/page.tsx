import { Metadata } from "next";
import { getJobListings } from "@/app/utils/careers";
import { CareersPage } from "@/app/components/Careers/CareersPage";

export const revalidate = 120;

export const metadata: Metadata = {
  title: "Careers - Clan-AP Technologies Private Limited",
  description:
    "Open roles at Clan-AP Technologies. Join a team running quality software tesing for clients worldwide.",
};

export default async function Page() {
  const jobs = await getJobListings();
  return <CareersPage jobs={jobs} />;
}