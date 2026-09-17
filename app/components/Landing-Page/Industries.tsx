const industries = [
  { name: "SaaS", detail: "Protecting recurring revenue with deployments that don't break renewal conversations." },
  { name: "FinTech", detail: "Zero tolerance for calculation or transaction errors, verified every release." },
  { name: "HealthTech", detail: "Compliance, reliability, and data integrity held to the standard auditors expect." },
  { name: "EdTech", detail: "Load-tested for peak enrollment, when every student arrives at once." },
  { name: "Restaurant Tech", detail: "Orders and transactions flowing through the dinner rush without a hiccup." },
  { name: "Every Other Vertical", detail: "Whatever you're building, if it ships software, we test it like our own reputation depends on it." },
];

export default function Industries({ highlightName }: { highlightName?: string }) {
  return (
    <section className="bg-[#FFFDF9] px-5 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="[font-family:var(--font-display)] mb-12 text-4xl font-black tracking-tight md:text-5xl">
          Where we go deep
        </h2>
        <div className="grid grid-cols-1 border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const isFeatured = ind.name === highlightName;
            return (
              <div
                key={ind.name}
                className={`flex flex-col gap-3 border-b border-r border-black/10 p-8 ${
                  isFeatured ? "bg-amber-50" : ""
                }`}
              >
                <span
                  className={`[font-family:var(--font-mono-data)] text-xs ${
                    isFeatured ? "text-amber-600" : "text-black/40"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`[font-family:var(--font-display)] text-2xl font-extrabold tracking-tight ${
                    isFeatured ? "text-amber-700" : "text-black"
                  }`}
                >
                  {ind.name}
                </h3>
                <p className={`text-lg leading-relaxed ${isFeatured ? "text-amber-700/80" : "text-black/62"}`}>
                  {ind.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}