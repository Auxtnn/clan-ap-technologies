import type { Metadata } from "next";
import { ContactHero, ContactForm, ContactInfo, Map, FAQ } from "../components";

export const metadata: Metadata = {
  title: "Contact Us - ClanAP Technologies",
  description:
    "Get in touch with our QA testing experts. We're here to help you ensure exceptional software quality.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContactHero />
      <div className="container mx-auto px-4 lg:w-11/12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
      <Map />
      <FAQ />
    </main>
  );
}
