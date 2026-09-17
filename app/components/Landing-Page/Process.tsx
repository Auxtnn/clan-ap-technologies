const steps = [
  { label: "Day 1", title: "Discovery call", body: "30 minutes on your stack, release cadence, and where quality hurts today." },
  { label: "Week 1", title: "Test strategy", body: "A plan built around your product: risk areas, coverage targets, tooling." },
  { label: "Week 2+", title: "Execution in your sprints", body: "We work inside your rituals, your board, and your CI, not beside them." },
  { label: "Weekly", title: "Clear Reporting", body: "Coverage, defect trends, and release readiness your team understands." },
  { label: "Ongoing", title: "Continuous improvement", body: "The team scale as the product and the org grow." },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#FFFDF9] px-5 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-balance [font-family:var(--font-display)] mb-14 max-w-xl text-4xl font-black tracking-tight md:text-5xl">
          What happens after you reach out
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step.title}>
              <div className="mb-4 flex items-center gap-6">
                <span
                  className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${
                    i === 0 ? "bg-gradient-to-r from-amber-500 to-yellow-500" : "bg-black/20"
                  }`}
                />
                {i < steps.length - 1 && <span className="h-px flex-1 bg-black/15" />}
              </div>
              <div className={`mb-2 [font-family:var(--font-mono-data)] text-xs ${i === 0 ? "text-amber-600" : "text-black/45"}`}>
                {step.label}
              </div>
              <h3 className="mb-2 [font-family:var(--font-display)] text-xl font-bold tracking-tight">{step.title}</h3>
              <p className="text-lg leading-relaxed text-black/60">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}