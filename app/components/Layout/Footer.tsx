"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa6";
import { useMobileMenu } from "./MobileMenuContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showButton, setShowButton] = useState(false);
  const { mobileMenuOpen } = useMobileMenu();

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      href: "https://www.linkedin.com/company/81815969/admin/dashboard",
      icon: <FaLinkedin size={20} />,
    },
    {
      name: "Twitter",
      href: "https://x.com/ClanapTech",
      icon: <FaXTwitter size={20} />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/clanAPtechnologies",
      icon: <FaFacebook size={20} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/clanap_technologies/",
      icon: <FaInstagram size={20} />,
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

  // Animation variants for the return to top button
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.1,
      boxShadow: "0px 5px 15px rgba(255, 217, 102, 0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Return to top button - hide when mobile menu is open */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-3 rounded-full shadow-lg z-50"
        onClick={scrollToTop}
        initial="hidden"
        animate={showButton && !mobileMenuOpen ? "visible" : "hidden"}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        aria-label="Return to top"
      >
        <FaArrowUp size={20} />
      </motion.button>

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
          <motion.div variants={itemVariants} className="z-10">
            <Link href="/" className="block mb-6 inline-block">
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Footer navigation sections */}
          {footerSections.map((section) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="z-10"
            >
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name} className="relative">
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#FFD966] transition-colors duration-300 inline-block relative z-10 w-auto"
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
              &copy; {currentYear} Clan-AP Technologies. All rights reserved.
            </div>

            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="hover:text-[#FFD966] transition-colors duration-300 inline-block"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#FFD966] transition-colors duration-300 inline-block"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
