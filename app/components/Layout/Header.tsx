"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMobileMenu } from "./MobileMenuContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

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
    { name: "Case Studies", href: "case-studies" },
    { name: "Blog", href: "/blog" },
  ];

  const navVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const logoVariants = {
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
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="ClanAP Technologies"
                width={100}
                height={80}
                className="h-8 w-auto transition-transform"
                priority
                loading="eager"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-10"
            variants={navVariants}
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  href={link.href}
                  className="relative text-black font-medium text-lg tracking-wide uppercase transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-xl font-bold relative overflow-hidden group shadow-xl shadow-yellow-500/20"
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
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            className="md:hidden relative z-20"
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

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden absolute top-0 left-0 w-full h-screen bg-white"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : "-100%",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
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
                className="text-2xl font-bold tracking-wide uppercase text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
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
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <motion.button
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold relative overflow-hidden group shadow-xl shadow-yellow-500/20"
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
