const services = [
  { title: "Automated Testing", body: "Accelerate your testing process with sophisticated automation that ensures comprehensive coverage and faster release cycles." },
  { title: "Mobile Testing", body: "Ensure your mobile applications perform flawlessly across all devices, operating systems, and screen sizes." },
  { title: "Security Testing", body: "Protect your software from vulnerabilities with thorough security testing methodologies and compliance verification." },
  { title: "Performance Testing", body: "Optimize your application's speed, responsiveness, and stability under various load conditions and user scenarios." },
  { title: "API Testing", body: "Validate the functionality, reliability, and security of your APIs with comprehensive endpoint testing and integration verification." },
  { title: "Manual Testing", body: "Leverage human intuition and exploratory testing to identify issues that automated tests might miss and validate user experience." },
  { title: "Database Testing", body: "Ensure data integrity, performance, and security with comprehensive database testing, validation, and optimization." },
  { title: "UI/UX Testing", body: "Validate user interface design, accessibility, and overall user experience to ensure intuitive and engaging applications." },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FFFDF9] px-5 pb-24 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="[font-family:var(--font-display)] max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Eight testing disciplines, one accountable team
          </h2>
          <span className="[font-family:var(--font-mono-data)] text-xs text-black/45">08 services</span>
        </div>
        <div className="grid grid-cols-1 border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="border-b border-r border-black/10 p-7 transition-colors hover:bg-amber-50/60"
            >
              <div className="mb-3 [font-family:var(--font-mono-data)] text-xs text-black/40">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2 [font-family:var(--font-display)] text-xl font-bold tracking-tight">
                {service.title}
              </h3>
              <p className="text-xl leading-relaxed text-black/62">{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}