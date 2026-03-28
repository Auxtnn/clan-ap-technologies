import CTASection from "@/app/components/AIContent/AICTASection";
import AIHero from "@/app/components/AIContent/AIHero";
import AIHeroStats from "@/app/components/AIContent/AiHeroStats";
import AIResults from "@/app/components/AIContent/AIResults";
import HowWeIntegrateAI from "@/app/components/AIContent/HowWeIntegrateAI";
import TransformingQA from "@/app/components/AIContent/TransformingQA";
import WhatAIEnables from "@/app/components/AIContent/WhatAIEnables";

export default function AIInQAPage() {
  return (
    <main>
      <AIHero />
      <AIHeroStats />
      <TransformingQA />
      <WhatAIEnables />
      <HowWeIntegrateAI />
      <AIResults />
      <CTASection />
    </main>
  );
}
