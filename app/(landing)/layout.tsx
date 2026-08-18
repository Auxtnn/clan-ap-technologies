import Image from "next/image";
import { DISCOVERY_CALL_URL, MAIN_SITE_URL } from "./constants";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href={MAIN_SITE_URL} className="flex-shrink-0">
            <Image
              src="/images/logo3.png"
              alt="Clan-AP Technologies"
              width={130}
              height={90}
              className="h-8 w-auto"
              priority
            />
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={MAIN_SITE_URL}
              className="hidden rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-amber-500 hover:text-amber-600 sm:inline-block"
            >
              Visit main site
            </a>
            <a
              href={DISCOVERY_CALL_URL}
              className="rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-yellow-500/20 transition-transform hover:scale-[1.02]"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Clan-AP Technologies Private Limited</p>
        <a href={MAIN_SITE_URL} className="mt-1 inline-block text-gray-400 underline hover:text-amber-600">
          clanap.com
        </a>
      </footer>
    </div>
  );
}