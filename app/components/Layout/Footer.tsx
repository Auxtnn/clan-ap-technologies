"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "API Testing", href: "/services/api-testing" },
        { name: "Database Testing", href: "/services/database-testing" },
        { name: "Manual Testing", href: "/services/manual-testing" },
        { name: "UI/UX Testing", href: "/services/ui-ux-testing" },
      ],
    },
    {
      title: "Others",
      links: [
        { name: "Automated Testing", href: "/services/automated-testing" },
        { name: "Mobile Testing", href: "/services/mobile-testing" },
        { name: "Security Testing", href: "/services/security-testing" },
        { name: "Performance Testing", href: "/services/performance-testing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Case Studies", href: "#" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/81815969",
      icon: "linkedin",
    },
    { name: "Twitter", href: "#", icon: "twitter" },
    {
      name: "Facebook",
      href: "https://www.facebook.com/clanAPtechnologies",
      icon: "facebook",
    },
    { name: "GitHub", href: "#", icon: "github" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/clanap_technologies",
      icon: "instagram",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-dot-pattern" />
      </div>

      {/* Gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FFD966]/5 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Logo and company info */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="block mb-6">
              <Image
                src="/images/logo2.png"
                alt="ClanAP Technologies"
                width={130}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            <p className="text-gray-400 mb-6">
              Perfecting the entire software development lifecycle with top-tier
              QA practices.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#FFD966] transition-colors duration-300"
                  aria-label={link.name}
                >
                  <SocialIcon name={link.icon} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Footer navigation sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#FFD966] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright and bottom links */}
        <motion.div
          className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; {currentYear} ClanAP Technologies. All rights reserved.
            </div>

            <div className="flex space-x-6">
              <Link
                href="#"
                className="hover:text-[#FFD966] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-[#FFD966] transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-[#FFD966] transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Social icons component
const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      );
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      );
    case "github":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    default:
      return null;
  }
};

export default Footer;
