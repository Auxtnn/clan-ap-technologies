import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { DISCOVERY_CALL_URL, MAIN_SITE_URL } from "./constants";
import { EmailIconLink } from "./EmailContact";

const socialLinks = [
  { name: "X", href: "https://x.com/ClanapTech", icon: <FaXTwitter size={18} /> },
  { name: "Instagram", href: "https://www.instagram.com/clan.ap_technologies/", icon: <FaInstagram size={18} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/clan-ap-technologies", icon: <FaLinkedin size={18} /> },
  { name: "Facebook", href: "https://www.facebook.com/clanAPtechnologies", icon: <FaFacebook size={18} /> },
  
];



export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`bg-white`}
     
    >
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
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-amber-500 hover:text-amber-600 sm:inline-block"
            >
              Visit main site
            </a>
            <a
              href={DISCOVERY_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-yellow-500/20 transition-transform hover:scale-[1.02]"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="relative z-10 border-t border-gray-100 py-8 text-center text-sm text-gray-400">
    <div className="relative z-50 mb-4 flex justify-center gap-5">
    {socialLinks.map((social) => (
      <a
        key={social.name}
        href={social.href}
        aria-label={social.name}
        title={social.name}
        className="inline-flex h-9 w-9 cursor-pointer items-center justify-center text-gray-500 transition-colors hover:text-amber-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        {social.icon}
      </a>
    ))}
    <EmailIconLink />
  </div>
        <p>© {new Date().getFullYear()} Clan-AP Technologies Private Limited</p>
        <a href={MAIN_SITE_URL} className="mt-1 inline-block text-gray-400 underline hover:text-amber-600">
          clanap.com
        </a>
      </footer>
    </div>
  );
}
