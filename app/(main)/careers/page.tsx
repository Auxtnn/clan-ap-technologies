import { Metadata } from "next";
import { getJobsPage } from "@/app/utils/careers";
import { CareersPage } from "@/app/components/Careers/CareersPage";

export const metadata: Metadata = {
  title: "Careers - Clan-AP Technologies Private Limited",
  description:
    "Open roles at Clan-AP Technologies. Join a team running quality software testing for clients worldwide.",
};

export default async function Page() {
  const initialData = await getJobsPage({ page: 1 });
  return <CareersPage initialData={initialData} />;
}