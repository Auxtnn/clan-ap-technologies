"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: "Case Studies", href: "#" },
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

  const buttonVariants = {
    hover: {
      scale: 1.1,
      background: "linear-gradient(90deg, #FFD966, #FFD966)",
      boxShadow: "0 0 15px rgba(255, 217, 102, 0.5)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-xl shadow-xl"
          : "backdrop-blur-md bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDg4IDUwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjM0LDE3OSw4LDAuMTUpIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTQ0IDhsMS0uMzMzVjAiLz48cGF0aCBkPSJNNDQgMTZ2LThsLTkuMDYzLTVMNDQgOE0zNC45MzggMi45NDdMMjYgOGw4LjkzOCA1LjA1M00yNiA4djEwbDguOTM4IDUuMDUzTTM0LjkzOCAyMy4wNTNMNDQgMTh2LTIiLz48cGF0aCBkPSJNMzQuOTM4IDIzLjA1M0wzNCAyMy4zM0wxNiA0MC42N2wxIC4zMzNMMzQgMjMuMzM0IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMzQgMjMuMzM0djE2LjY2N0w0NCA0NSIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTI2IDE4bC0uOTM4LjU0TDkgNGwtLjA2Mi0uMDdMMjYgMTh6TTkgNHYxMEwxNyAxOGw5LTUuMDEgOC45MzgtNS4wNDNMMjYgM3Y1eiIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTE3IDE4djEwbDgtNS4wMTIiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0yNSAyM2wxLjA2Mi0uNjI2TDQ0IDMydi0uMDAxTDI1IDIzek00NCAzMnYxMGwtMTAgNS41TDI1IDQyLjY2NlYzMy4wMkw0NCAzMnoiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0zNCAwdjIuOThMMjYgM3Y1bC05LjA2MiA1LjA0LTkgNC45NkwwIDE0VjRoLS4wMzJMOSA0TTAgMTRsMTYgOS0xLjAzMi42TDAgMTRNMTYgMjN2MTBsLTE2LTlNMTYgMzN2MTBsOSA1LjAwMk0yNSA0M3Y1bDkuMDYyLTUuMDAyTTM0IDQ4djJsOS41LTUuNTAyTDQ0IDQydi0uMDAxTTQ0IDMydi0uMDAxTDQ1IDMyVjQyTDQ0IDQyLjcxIi8+PHBhdGggZD0iTTQ1IDQybDE2LjA5My05LjAwMUw2MiAzM3YxMGwtMTcgOS40OThWNDh6IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNDQuOTM4IDhoLjEyNEw1NCAzLjExOFYzTDQ1IDh6TTU0IDN2MTBsLTkuMDYzIDUiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik00NC45MzggMThsOS4wNjItNUw1NCAxM3YtLjA0MUw2MiA4di0uMDAxTDU0IDN2LjAwMXpNNjIgOHYxMGwtOC45MzggNS4wNTNNNTMuMDYzIDIzLjA1M0w0NSAyOGwtMSA0Ljc1TTQ1IDMyaC4wMzFMNjIgMjMiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik01My4wNjMgMjMuMDUzbC4wMyAyLjE4NyA3Ljg3Ni00LjI5NC4wMy0xLjg5My03LjkzNiAzLjk5OXpNNjEgMjB2MTMiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik04MyAxNHYtLjAxMkw3MyAzLjk4OCIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTczIDR2MTBsOSA1LjQxIiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNODIgMTl2MTBsLTggNC0uMDYzLjA3LTggNC41ODYtLjAzLS42NTYiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik02NSAzM2wtLjA2My0uMzU0TDgyIDE5IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNjUgMzNsLjA2My4zNTQtLjEyNS0uMzc3VjMzbC0zLS4wMjN2MTBsLTE3LjAzMiA5Ljk5OCIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PC9nPjwvc3ZnPg==')]"
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
                width={200}
                height={80}
                className="h-12 w-auto transition-transform"
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
              <Link
                href="/contact"
                className="bg-black hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-medium text-lg tracking-wide transition-all duration-300"
              >
                <motion.span variants={buttonVariants}>Contact Us</motion.span>
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
            <Link
              href="/contact"
              className="bg-black hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg tracking-wide uppercase transition-all duration-300"
            >
              <motion.span variants={buttonVariants}>Contact Us</motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
