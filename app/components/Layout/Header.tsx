"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "./MobileMenuContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our AI Approach", href: "/ai-in-qa" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];

  const navVariants:Variants= {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const logoVariants:Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
    },
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white backdrop-blur-xl shadow-xl" : ""
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 md:px-5 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 mr-6 lg:mr-0 flex-shrink-0"
          >
            <Link href="/">
              <Image
                src="/images/logo3.png"
                alt="ClanAP Technologies"
                width={140}
                height={100}
                className="h-8 md:h-8 lg:h-10 w-auto transition-transform"
                priority
                loading="eager"
              />
            </Link>
          </motion.div>

          <motion.nav
            className="hidden lg:flex items-center flex-1 justify-end"
            variants={navVariants}
          >
            <div className="flex flex-nowrap items-center gap-5 xl:gap-8">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative block whitespace-nowrap py-1.5 font-medium tracking-wide uppercase text-sm xl:text-base transition-colors duration-300 group ${
                        active ? "text-brand" : "text-black hover:text-brand"
                      }`}
                    >
                      {link.name}
                      {active ? (
                        <motion.span
                          layoutId="nav-active-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand shadow-[0_2px_8px_rgba(237,140,1,0.45)]"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : (
                        <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-brand/40 transition-all duration-300 group-hover:w-full" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div variants={itemVariants} className="ml-2 xl:ml-4 flex-shrink-0">
                <Link href="/contact" aria-current={isActive("/contact") ? "page" : undefined}>
                  <motion.button
                    className={`${isActive("/contact") ? "ring-2 ring-brand ring-offset-2 ring-offset-white " : ""}bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-xl font-bold relative overflow-hidden group shadow-xl shadow-yellow-500/20 whitespace-nowrap px-5 py-2.5 text-sm xl:px-8 xl:py-3 xl:text-base`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Contact Us</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.nav>

          <motion.button
            variants={itemVariants}
            className="lg:hidden relative z-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-8 h-6">
              <motion.span
                className="absolute top-0 left-0 w-full h-1 bg-black rounded"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-2.5 left-0 w-full h-1 bg-black rounded"
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-black rounded"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      <motion.div
        className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white overflow-y-auto"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : "-100%",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col items-center justify-center min-h-full py-24">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                x: mobileMenuOpen ? 0 : -50,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + 0.3,
                ease: "easeOut",
              }}
              className="my-4"
            >
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative inline-flex flex-col items-center text-2xl font-bold tracking-wide uppercase transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-brand"
                    : "text-black hover:text-brand"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="mt-1.5 h-[3px] w-8 rounded-full bg-brand shadow-[0_2px_8px_rgba(237,140,1,0.45)]" />
                )}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: mobileMenuOpen ? 1 : 0,
              x: mobileMenuOpen ? 0 : -50,
            }}
            transition={{
              duration: 0.4,
              delay: navLinks.length * 0.1 + 0.3,
              ease: "easeOut",
            }}
            className="mt-8"
          >
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.button
                className={`${isActive("/contact") ? "ring-2 ring-brand ring-offset-2 ring-offset-white " : ""}bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold relative overflow-hidden group shadow-xl shadow-yellow-500/20`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Contact Us</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;