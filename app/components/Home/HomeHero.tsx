"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import Engine from "react-tsparticles";
import { Container } from "tsparticles-engine";

interface TerminalLineProps {
  index: number;
  isActive: boolean;
}

const TerminalLine = ({ index, isActive }: TerminalLineProps) => {
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

const HeroSection = () => {
  const targetRef = useRef<HTMLElement | null>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // This ensures the particles are properly loaded
      console.log("Particles container loaded:", container);
    },
    []
  );

  // Terminal animation state
  const [terminalLines, setTerminalLines] = useState<number[]>([]);
  const [activeLine, setActiveLine] = useState(0);
  const [testPassed, setTestPassed] = useState(false);

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

  // Animate the active line and show test passed when all lines are complete
  useEffect(() => {
    if (terminalLines.length === 0) return;

    // Show the "Tests Passed!" badge when all lines are displayed
    if (terminalLines.length === 6) {
      setTimeout(() => {
        setTestPassed(true);
      }, 500);
    }

    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % terminalLines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [terminalLines.length]);

  // Particles configuration - simplified but effective
  const particlesOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 10,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#D97706", "#F59E0B", "#FCD34D"],
      },
      links: {
        color: "#D97706",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white py-20 md:py-16"
    >
      {/* Neural Network Background - Entire hero section */}
      <div
        className="absolute inset-0 z-0"
        style={{ height: "100%", width: "100%" }}
      >
        {/* Base background - changed from pale yellow to white */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Neural network overlay */}

        {/* Subtle particles overlay */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 5,
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left content - 7 columns */}
          <div className="lg:col-span-7 relative">
            {/* Content - placed over the background */}
            <div className="relative z-10">
              <motion.span
                className="inline-block py-2 mt-16 md:mt-0 px-4 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Excellence in Software Testing
              </motion.span>

              <motion.div
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Perfect Your{" "}
                <div className="text-amber-600">Software Quality</div>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We embed top-tier QA practices throughout the entire development
                lifecycle, ensuring flawless execution and exceptional user
                experiences.
              </motion.p>

              <motion.div
                className="flex flex-row gap-4 mb-6 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link href="/contact">
                  <motion.div
                    className="group relative cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-amber-500 opacity-30 blur-md group-hover:opacity-70 transition-opacity duration-300 "
                      animate={{
                        boxShadow: [
                          "0 0 20px 5px rgba(217, 119, 6, 0.3)",
                          "0 0 30px 10px rgba(217, 119, 6, 0.6)",
                          "0 0 20px 5px rgba(217, 119, 6, 0.3)",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.button
                      className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg w-full"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      animate={{
                        boxShadow: [
                          "0 10px 15px -3px rgba(217, 119, 6, 0.3), 0 4px 6px -2px rgba(217, 119, 6, 0.1)",
                          "0 20px 25px -5px rgba(217, 119, 6, 0.3), 0 10px 10px -5px rgba(217, 119, 6, 0.1)",
                          "0 10px 15px -3px rgba(217, 119, 6, 0.3), 0 4px 6px -2px rgba(217, 119, 6, 0.1)",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    >
                      Get Started
                    </motion.button>

                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-amber-400 opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </Link>
                <Link href="/services">
                  <motion.div
                    className="group relative cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-amber-200 opacity-20 blur-md group-hover:opacity-50 transition-opacity duration-300"
                      animate={{
                        boxShadow: [
                          "0 0 15px 2px rgba(253, 230, 138, 0.2)",
                          "0 0 25px 5px rgba(253, 230, 138, 0.4)",
                          "0 0 15px 2px rgba(253, 230, 138, 0.2)",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.button
                      className="relative bg-white text-gray-700 border border-amber-300 px-8 py-4 rounded-lg font-medium"
                      whileHover={{
                        borderColor: "#D97706",
                        color: "#D97706",
                      }}
                      animate={{
                        boxShadow: [
                          "0 4px 6px -1px rgba(253, 230, 138, 0.2), 0 2px 4px -1px rgba(253, 230, 138, 0.1)",
                          "0 10px 15px -3px rgba(253, 230, 138, 0.2), 0 4px 6px -2px rgba(253, 230, 138, 0.1)",
                          "0 4px 6px -1px rgba(253, 230, 138, 0.2), 0 2px 4px -1px rgba(253, 230, 138, 0.1)",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "easeInOut",
                      }}
                    >
                      Our Services
                    </motion.button>

                    {/* Subtle pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg border border-amber-200 opacity-0 group-hover:opacity-100 pointer-events-none"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
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
              <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-amber-200">
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

                <div className="p-5 font-mono text-sm h-72 overflow-hidden bg-gray-900">
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
              {testPassed && (
                <motion.div
                  className="absolute -top-3 -right-3 bg-green-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Tests Passed!
                </motion.div>
              )}

              {/* Progress bar */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-gray-200 rounded-full overflow-hidden shadow-md"
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

        {/* Mouse animation instead of scroll indicator */}
        <motion.div
          className="absolute md:bottom-10  hidden -bottom-20 left-1/2 -translate-x-1/2 z-20 md:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-8 h-14 border-2 border-amber-600 rounded-full flex justify-center p-1"
            animate={{
              boxShadow: [
                "0 0 0 rgba(217, 119, 6, 0.3)",
                "0 0 10px rgba(217, 119, 6, 0.5)",
                "0 0 0 rgba(217, 119, 6, 0.3)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div
              className="w-1.5 h-3 bg-amber-600 rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
