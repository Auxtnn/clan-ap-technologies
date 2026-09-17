import Image from "next/image";
import { partners } from "./partners";

export default function PartnerLogos() {
  return (
    <section className="bg-[#FFFDF9] px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 text-center [font-family:var(--font-mono-data)] text-xs text-black/40">
          Trusted by engineering teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.path}
              alt={partner.name}
              width={120}
              height={40}
              className="h-7 w-auto grayscale transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}