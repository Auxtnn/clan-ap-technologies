"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const targetRef = useRef(null);

  // Terminal animation state
  const [terminalLines, setTerminalLines] = useState([]);
  const [activeLine, setActiveLine] = useState(0);

  // Add lines sequentially for terminal animation
  useEffect(() => {
    const totalLines = 6;
    const interval = setInterval(() => {
      setTerminalLines((prev) => {
        if (prev.length >= totalLines) {
          clearInterval(interval);
          return prev;
        }
        return [...prev, prev.length];
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  // Animate the active line
  useEffect(() => {
    if (terminalLines.length === 0) return;

    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % terminalLines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [terminalLines.length]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Clean, minimal background with subtle brand color wave */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main wave shape */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            viewBox="0 0 1440 800"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <path
              d="M0,0 L1440,0 L1440,300 Q1080,450 720,350 Q360,250 0,350 L0,0 Z"
              fill="#FEFAF5"
            />
            <path
              d="M0,800 L1440,800 L1440,350 Q1080,250 720,330 Q360,410 0,310 L0,800 Z"
              fill="#FEFAF5"
            />
            <path
              d="M1440,0 L1440,800 L1200,800 Q1250,600 1200,400 Q1150,200 1200,0 L1440,0 Z"
              fill="#FEF3D7"
              opacity="0.6"
            />
            <path
              d="M0,0 L0,800 L240,800 Q200,600 240,400 Q280,200 240,0 L0,0 Z"
              fill="#FEF3D7"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Subtle dot pattern */}
        <div className="absolute right-10 top-40 opacity-30">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <g opacity="0.6">
              {[...Array(5)].map((_, row) =>
                [...Array(5)].map((_, col) => (
                  <circle
                    key={`dot-${row}-${col}`}
                    cx={10 + col * 15}
                    cy={10 + row * 15}
                    r="2"
                    fill="#D97706"
                  />
                ))
              )}
            </g>
          </svg>
        </div>

        <div className="absolute left-20 bottom-40 opacity-30">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <g opacity="0.6">
              {[...Array(5)].map((_, row) =>
                [...Array(5)].map((_, col) => (
                  <circle
                    key={`dot-${row}-${col}`}
                    cx={10 + col * 15}
                    cy={10 + row * 15}
                    r="2"
                    fill="#D97706"
                  />
                ))
              )}
            </g>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left content - 7 columns */}
          <div className="lg:col-span-7">
            <motion.span
              className="inline-block py-2 px-6 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Excellence in Software Testing
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Perfect Your{" "}
              <span className="text-amber-600">Software Quality</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We embed top-tier QA practices throughout the entire development
              lifecycle, ensuring flawless execution and exceptional user
              experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link href="/contact">
                <motion.button
                  className="bg-amber-600 text-white px-8 py-4 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  Get Started
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  className="border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-amber-500 hover:text-amber-600 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  Our Services
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right content - Terminal - 5 columns */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Terminal */}
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="flex items-center bg-gray-800 px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm font-mono">
                    qa-automation.sh
                  </div>
                </div>

                <div className="p-5 font-mono text-sm h-64 overflow-hidden bg-gray-900">
                  {/* Terminal content */}
                  <div className="space-y-3">
                    {terminalLines.map((index) => (
                      <TerminalLine
                        key={index}
                        index={index}
                        isActive={activeLine === index}
                      />
                    ))}

                    {/* Blinking cursor */}
                    <motion.div
                      className="w-2.5 h-5 bg-amber-500 inline-block"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  </div>
                </div>
              </div>

              {/* Success badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-green-500 text-white font-bold px-4 py-2 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                Tests Passed!
              </motion.div>

              {/* Progress bar */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <motion.div
                  className="h-full bg-amber-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 2.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: { repeat: Infinity, duration: 2 },
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="#D97706"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

// Terminal line component
const TerminalLine = ({ index, isActive }) => {
  const lines = [
    {
      prefix: "$",
      text: "Initializing QA testing suite...",
      color: "text-green-400",
    },
    {
      prefix: ">",
      text: "Running automated test cases...",
      color: "text-gray-300",
    },
    { prefix: ">", text: "Validating UI components", color: "text-gray-300" },
    {
      prefix: ">",
      text: "Security vulnerability scan complete",
      color: "text-gray-300",
    },
    {
      prefix: ">",
      text: "Performance benchmark: 97/100",
      color: "text-amber-400",
    },
    {
      prefix: "$",
      text: "All tests passed successfully ✓",
      color: "text-green-400",
    },
  ];

  const line = lines[index];

  return (
    <motion.div
      className={`${line.color} flex items-start`}
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="mr-2 text-gray-500">{line.prefix}</span>
      <span>{line.text}</span>
      {isActive && (
        <motion.span
          className="ml-2 inline-block h-2 w-2 bg-amber-500 rounded-full"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      )}
    </motion.div>
  );
};

export default HeroSection;
