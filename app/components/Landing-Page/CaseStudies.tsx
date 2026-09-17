import { caseStudyHighlights } from "./caseStudyHighlights";

export default function CaseStudies() {
  return (
    <section className="bg-[#FFFDF9] px-5 pb-24 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="[font-family:var(--font-display)] mb-10 text-4xl font-black tracking-tight md:text-5xl">
          Results
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {caseStudyHighlights.map((study) => (
            <div key={study.id} className="flex flex-col justify-between gap-7 rounded-xl border border-black/10 p-7">
              <div>
                <span className="[font-family:var(--font-mono-data)] text-sm text-amber-600">{study.category}</span>
                <h3 className="mt-3 [font-family:var(--font-display)] text-2xl font-bold tracking-tight">
                  {study.client}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-black/65">{study.problem}</p>
              </div>
              <div className="flex gap-8 border-t border-black/10 pt-5">
                {study.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="[font-family:var(--font-display)] text-4xl font-extrabold">{stat.value}</div>
                    <div className="mt-1.5 text-sm text-black/55">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}