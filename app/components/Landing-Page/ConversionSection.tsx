"use client";

import { useState } from "react";

export const DISCOVERY_CALL_URL = process.env.DISCOVERY_URL;

const callReassurances = [
  "30 minutes, no pressure, no sales script",
  "You'll leave with a view of your riskiest release paths either way",
  "No obligation to continue working with us after",
];

export default function ConversionSection() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [sent, setSent] = useState(false);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this to a real endpoint. Right now this only flips local
    // state, no request is sent anywhere and nothing is captured yet.
    setSent(true);
  };

  return (
    <section id="book" className="bg-[#140a00] px-5 py-24 text-[#FFFDF9] md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 p-9">
          <div>
            <h2 className="text-balance [font-family:var(--font-display)] text-4xl font-black tracking-tight md:text-5xl">
              Book your free discovery call
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/62">
              A conversation with a QA lead about your product, your release
              cadence, and where quality is actually breaking down today.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {callReassurances.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                  <span className="text-base text-white/75">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <a
             href={DISCOVERY_CALL_URL}
              target="_blank"
  rel="noopener noreferrer"

            className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-yellow-500/20 transition-transform hover:scale-[1.02]"
          >
            Book Your Free Discovery Call
          </a>
        </div>

    <div id="audit" className="rounded-2xl border-t-[3px] border-amber-400 bg-white/[0.04] p-9">
          <h3 className="[font-family:var(--font-display)] text-3xl font-extrabold tracking-tight">
            Get your free QA audit
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-white/62">
            Not ready to talk yet? Send us a few details and we&apos;ll
            return a written assessment of your coverage gaps.
          </p>

          <form onSubmit={handleAuditSubmit} className="mt-8 flex flex-col gap-4">
            <div>
              <label htmlFor="audit-email" className="mb-1.5 block text-sm font-medium text-white/60">
                Work email
              </label>
              <input
                id="audit-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-white/20 bg-white/[0.06] px-4 py-3.5 text-base text-white placeholder:text-white/35"
              />
            </div>
            <div>
              <label htmlFor="audit-company" className="mb-1.5 block text-sm font-medium text-white/60">
                Product or company name
              </label>
              <input
                id="audit-company"
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Inc."
                className="w-full rounded-lg border border-white/20 bg-white/[0.06] px-4 py-3.5 text-base text-white placeholder:text-white/35"
              />
            </div>
            <div>
              <label htmlFor="audit-website" className="mb-1.5 block text-sm font-medium text-white/60">
                Website or app link
              </label>
              <input
                id="audit-website"
                type="url"
                required
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://"
                className="w-full rounded-lg border border-white/20 bg-white/[0.06] px-4 py-3.5 text-base text-white placeholder:text-white/35"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-lg bg-[#FFFDF9] px-6 py-3.5 text-base font-semibold text-[#140a00] transition-transform hover:scale-[1.01]"
            >
              Request audit
            </button>
          </form>

          {sent && (
            <p className="mt-4 [font-family:var(--font-mono-data)] text-sm text-green-400">
              Request received, a QA lead replies within one business day.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}