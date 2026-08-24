export interface Sector {
  slug: string;
  label: string;
  kicker: string;
  intro: string;
  painPoints: string[];
  industryName: string;
}

export const sectors: Sector[] = [
  {
    slug: "saas",
    label: "SaaS",
    kicker: "Built for SaaS engineering teams",
    intro:
      "Every deploy touches your entire subscriber base at once. One bad release doesn't just create a bug report — it creates a churn risk.",
    painPoints: [
      "A broken release goes out to every customer at once, not just a few.",
      "Support tickets spike after every deploy because nothing catches regressions first.",
      "Your team hesitates to ship fast because the blast radius of a bug is your whole subscriber base.",
      "Feature velocity keeps slowing down because developers double as testers.",
      "You've delayed a release before because there was no one available to properly validate it in time.",
    ],
    industryName: "SaaS",
  },
  {
    slug: "fintech",
    label: "FinTech",
    kicker: "Built for FinTech & payments teams",
    intro:
      "A miscalculation isn't a cosmetic bug — it's a compliance incident, a support escalation, and a trust problem all at once.",
    painPoints: [
      "A single rounding or calculation error can trigger real financial and compliance consequences.",
      "Every release touches money movement, so \u201cprobably fine\u201d isn't good enough.",
      "Manual testing can't keep up with the edge cases payment flows actually need.",
      "Audit and compliance reviews demand a level of test rigor one engineer can't sustain alone.",
      "Transaction logic needs regression coverage on every release, not just the big ones.",
    ],
    industryName: "FinTech",
  },
  {
    slug: "healthtech",
    label: "HealthTech",
    kicker: "Built for HealthTech & clinical software teams",
    intro:
      "Downtime or bad data in a health product doesn't just cost revenue — it affects patient care and regulatory standing.",
    painPoints: [
      "Bugs in patient-facing or clinical workflows carry real compliance and safety risk.",
      "Data integrity has to be verified constantly, not just checked at launch.",
      "Reliability expectations are higher than typical SaaS, but your QA resourcing isn't.",
      "Every release needs sign-off you can actually trust, not just a quick smoke test.",
      "A testing gap is a different kind of risk when patients or providers are on the other end of the product.",
    ],
    industryName: "HealthTech",
  },
  {
    slug: "edtech",
    label: "EdTech",
    kicker: "Built for EdTech platforms",
    intro:
      "Your traffic doesn't grow steadily — it spikes hard at semester start and enrollment, exactly when you can least afford downtime.",
    painPoints: [
      "Usage spikes hard at semester start and enrollment periods, right when bugs hurt most.",
      "A broken feature during finals week or enrollment is a different kind of emergency.",
      "Your product has to work reliably across a wide range of student and instructor devices.",
      "One engineer can't validate every workflow before each academic-calendar deadline.",
      "Support load balloons every time a release ships something untested into a high-traffic window.",
    ],
    industryName: "EdTech",
  },
  {
    slug: "restaurant-tech",
    label: "Restaurant Tech",
    kicker: "Built for restaurant & hospitality tech teams",
    intro:
      "A bug in your ordering or POS flow doesn't wait for a sprint retro — it's a lost order at 7pm on a Friday.",
    painPoints: [
      "A POS or ordering bug during peak hours means lost orders and frustrated customers in real time.",
      "Kitchen and loyalty systems have to stay in sync — one broken integration cascades everywhere.",
      "Your busiest hours are exactly when you can least afford untested code in production.",
      "Multi-location rollouts multiply the ways a small bug can go wrong.",
      "One engineer can't manually test every device, printer, and integration combination you support.",
    ],
    industryName: "Restaurant Tech",
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}