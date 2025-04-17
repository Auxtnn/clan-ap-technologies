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
      className="relative min-h-screen pt-16 flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient accent */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-yellow-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-gray-100/50 to-transparent rounded-full blur-2xl"></div>

        {/* Abstract shapes with refined animations */}
        <motion.div
          className="absolute top-[15%] right-[20%] w-32 h-32 rounded-full border-8 border-gray-100/70"
          initial={{ scale: 0, rotate: -90 }}
          animate={{
            scale: [0.9, 1, 0.95, 1],
            rotate: [0, 10, 5, 10],
            opacity: [0.3, 0.5, 0.4, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-[20%] left-[15%] w-48 h-48 rounded-full border-12 border-gray-50/80"
          initial={{ scale: 0 }}
          animate={{
            scale: [0.85, 0.9, 0.85, 0.9],
            opacity: [0.2, 0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Refined grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] z-0">
          <div className="h-full w-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        {/* Subtle code snippets */}
        <motion.div
          className="absolute top-24 right-[35%] p-3 bg-black rounded-md text-white text-xs font-mono opacity-10 shadow-xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: [-5, 5, -5],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          await TestRunner.execute();
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-[25%] p-3 bg-black rounded-md text-white text-xs font-mono opacity-10 shadow-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: [5, -5, 5],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, -1, 0, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "loop",
            delay: 2,
          }}
        >
          QA.verifyIntegrity(system);
        </motion.div>

        {/* Minimal decorative text elements */}
        <motion.div
          className="absolute top-[30%] left-[5%] text-xs font-bold text-black opacity-5"
          animate={{
            opacity: [0.05, 0.1, 0.05],
            y: [-3, 3, -3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          QA TESTING
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] right-[5%] text-xs font-bold text-black opacity-5"
          animate={{
            opacity: [0.05, 0.1, 0.05],
            y: [3, -3, 3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        >
          QUALITY ASSURANCE
        </motion.div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 lg:w-11/12 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content - 7 columns */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <motion.span
                className="inline-block py-1.5 px-4 bg-yellow-500/10 text-black rounded-full text-sm font-medium mb-6"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Excellence in Software Testing
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Perfect Your <br />
              <motion.span
                className="text-yellow-500 relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Software Quality
                <motion.span
                  className="absolute -bottom-2 left-0 h-2 bg-yellow-500/20 w-full rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              We embed top-tier QA practices throughout the entire development
              lifecycle, ensuring flawless execution and exceptional user
              experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link href="/contact">
                <motion.button
                  className="bg-black text-white px-8 py-4 rounded-full font-bold relative overflow-hidden group shadow-lg"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.span
                    className="absolute inset-0 bg-yellow-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  className="border-2 border-black bg-transparent text-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Services
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right content - Interactive Terminal - 5 columns */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Enhanced decorative elements behind terminal */}
              <motion.div
                className="absolute top-6 -right-6 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-yellow-500/10 rounded-full blur-lg z-0"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  delay: 1,
                }}
              />

              {/* Terminal with improved styling */}
              <motion.div
                className="bg-black rounded-2xl shadow-2xl overflow-hidden border border-gray-800 relative z-10"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <div className="flex items-center bg-gray-900 px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm font-mono">
                    qa-automation.sh
                  </div>
                </div>

                <div className="p-6 font-mono text-sm h-72 overflow-hidden bg-gradient-to-b from-black to-gray-900">
                  {/* Terminal content with typing effect */}
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
                      className="w-3 h-5 bg-yellow-500"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  </div>
                </div>

                {/* Terminal tabs */}
                <div className="absolute top-12 right-4 flex space-x-1">
                  <motion.div
                    className="px-2 py-1 rounded-t bg-gray-800 text-xs text-gray-400 cursor-pointer"
                    whileHover={{ backgroundColor: "#1F2937" }}
                  >
                    automation.js
                  </motion.div>
                  <motion.div
                    className="px-2 py-1 rounded-t bg-gray-900 text-xs text-gray-300 cursor-pointer"
                    whileHover={{ backgroundColor: "#1F2937" }}
                  >
                    main.js
                  </motion.div>
                </div>
              </motion.div>

              {/* Improved floating success badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-green-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg z-20"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{
                  opacity: [0, 1, 1, 1, 0],
                  scale: [0.8, 1, 1, 1, 0.8],
                  rotate: [-5, 0, 0, 0, -5],
                }}
                transition={{
                  duration: 5,
                  times: [0, 0.1, 0.5, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 8,
                }}
              >
                Tests Passed!
              </motion.div>

              {/* Enhanced animated completion meter */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-gray-200 rounded-full overflow-hidden z-20 shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 15,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Refined scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 8, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-yellow-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
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
      color: "text-blue-400",
    },
    { prefix: ">", text: "Validating UI components", color: "text-blue-400" },
    {
      prefix: ">",
      text: "Security vulnerability scan complete",
      color: "text-blue-400",
    },
    {
      prefix: ">",
      text: "Performance benchmark: 97/100",
      color: "text-blue-400",
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
      className={`${line.color} flex items-center`}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="mr-2">{line.prefix}</span>
      <span>{line.text}</span>
      {isActive && (
        <motion.span
          className="ml-2 inline-block h-2 w-2 bg-yellow-500 rounded-full"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      )}
    </motion.div>
  );
};

export default HeroSection;
