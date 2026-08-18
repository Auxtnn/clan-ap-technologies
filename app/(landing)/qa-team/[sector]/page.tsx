import { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingTemplate from "../LandingTemplate";
import { sectors, getSectorBySlug } from "../sectors";

interface SectorPageProps {
  params: Promise<{ sector: string }>;
}

export function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({ params }: SectorPageProps): Promise<Metadata> {
  const { sector: slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    return { title: "QA Team | Clan-AP Technologies" };
  }

  return {
    title: `QA for ${sector.label} Teams — Full Team, One Engineer's Budget | Clan-AP Technologies`,
    description: sector.intro,
    robots: { index: true, follow: true },
  };
}

export default async function SectorLandingPage({ params }: SectorPageProps) {
  const { sector: slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    notFound();
  }

  return <LandingTemplate sector={sector} />;
}