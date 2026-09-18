interface ProblemSectionProps {
  intro?: string;
  painPoints: string[];
}

const defaultIntro =
  "Most teams don't have a QA problem on paper. They have one engineer stretched across four disciplines, a hiring pipeline that's been open since spring, and a release night nobody sleeps through.";

export default function ProblemSection({ intro, painPoints }: ProblemSectionProps) {
  return (
    <section className="bg-[#FFFDF9] px-5 py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-balance [font-family:var(--font-display)] text-4xl font-black leading-[1.02] tracking-tight md:text-5xl">
            Every release is a gamble you didn&apos;t agree to take.
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-black/62">{intro ?? defaultIntro}</p>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-black/62">
            None of this shows up in a sprint retro. It shows up as a
            developer debugging instead of shipping, a customer who churns
            quietly, and a QA req that&apos;s been open long enough that
            everyone stopped mentioning it in standup.
          </p>
        </div>
        <div className="flex flex-col">
          {painPoints.map((point, i) => (
            <div key={point} className="flex gap-5 border-t border-black/10 py-6 last:border-b">
              <span className="pt-0.5 [font-family:var(--font-mono-data)] text-sm text-amber-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xl text-black/80">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}