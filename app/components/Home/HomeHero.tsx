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

// Terminal line component with TypeScript interface
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

  // Updated particles initialization with proper types
  const particlesInit = useCallback(async (engine: Engine) => {
    // This is the correct way to initialize tsparticles
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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100"
    >
      {/* Neural Network Background - Entire hero section */}
      <div
        className="absolute inset-0 z-0"
        style={{ height: "100%", width: "100%" }}
      >
        {/* Base gradient with slight transparency */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 to-amber-100/90"></div>

        {/* Neural network overlay */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Hexagonal Grid Pattern */}
          <defs>
            <pattern
              id="hexPattern"
              patternUnits="userSpaceOnUse"
              width="30"
              height="52"
              patternTransform="scale(0.5) rotate(0)"
            >
              <path
                d="M30 0L15 26L0 0M0 52L15 26L30 52"
                stroke="#D97706"
                strokeOpacity="0.15"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />

          {/* Additional grid layer for depth */}
          <defs>
            <pattern
              id="gridPattern"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
              patternTransform="scale(0.5) rotate(15)"
            >
              <path
                d="M20 0L0 0M0 20L20 20M0 0L0 20M20 0L20 20"
                stroke="#F59E0B"
                strokeOpacity="0.05"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />

          {/* Major Neural Network Connections - These span the entire background */}
          {/* Horizontal and diagonal flows */}
          <motion.path
            d="M0,200 Q480,150 960,300 Q1440,450 1920,350"
            stroke="#D97706"
            strokeWidth="1.5"
            strokeOpacity="0.2"
            strokeDasharray="2,2"
            fill="none"
            animate={{
              d: [
                "M0,200 Q480,150 960,300 Q1440,450 1920,350",
                "M0,250 Q480,200 960,350 Q1440,500 1920,400",
                "M0,200 Q480,150 960,300 Q1440,450 1920,350",
              ],
            }}
            transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          />

          <motion.path
            d="M0,500 Q480,450 960,600 Q1440,750 1920,650"
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeOpacity="0.2"
            strokeDasharray="3,3"
            fill="none"
            animate={{
              d: [
                "M0,500 Q480,450 960,600 Q1440,750 1920,650",
                "M0,550 Q480,500 960,650 Q1440,800 1920,700",
                "M0,500 Q480,450 960,600 Q1440,750 1920,650",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <motion.path
            d="M0,800 Q480,750 960,900 Q1440,950 1920,850"
            stroke="#FCD34D"
            strokeWidth="1.5"
            strokeOpacity="0.2"
            strokeDasharray="4,2"
            fill="none"
            animate={{
              d: [
                "M0,800 Q480,750 960,900 Q1440,950 1920,850",
                "M0,850 Q480,800 960,950 Q1440,1000 1920,900",
                "M0,800 Q480,750 960,900 Q1440,950 1920,850",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Vertical connections between layers */}
          {[200, 600, 1000, 1400, 1800].map((x, i) => (
            <motion.path
              key={`vertical-${i}`}
              d={`M${x},100 C${x + 50},300 ${x - 50},600 ${x},900`}
              stroke="#D97706"
              strokeWidth="1"
              strokeOpacity="0.15"
              strokeDasharray="3,3"
              animate={{
                d: [
                  `M${x},100 C${x + 50},300 ${x - 50},600 ${x},900`,
                  `M${x},100 C${x - 50},300 ${x + 50},600 ${x},900`,
                  `M${x},100 C${x + 50},300 ${x - 50},600 ${x},900`,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Major Network Nodes - Spread across the background */}
          {/* Top layer nodes */}
          {[150, 450, 750, 1050, 1350, 1650].map((x, i) => (
            <motion.circle
              key={`node-top-${i}`}
              cx={x}
              cy={200 + (i % 3) * 50}
              r={5}
              fill="#D97706"
              fillOpacity={0.3}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + (i % 3),
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            />
          ))}

          {/* Middle layer nodes */}
          {[300, 600, 900, 1200, 1500, 1800].map((x, i) => (
            <motion.circle
              key={`node-middle-${i}`}
              cx={x}
              cy={500 + (i % 3) * 50}
              r={6}
              fill="#F59E0B"
              fillOpacity={0.3}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.5, 0.2],
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + (i % 2),
                ease: "easeInOut",
                delay: i * 0.5 + 1,
              }}
            />
          ))}

          {/* Bottom layer nodes */}
          {[200, 500, 800, 1100, 1400, 1700].map((x, i) => (
            <motion.circle
              key={`node-bottom-${i}`}
              cx={x}
              cy={800 + (i % 3) * 50}
              r={5}
              fill="#FCD34D"
              fillOpacity={0.3}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + (i % 4),
                ease: "easeInOut",
                delay: i * 0.6 + 2,
              }}
            />
          ))}

          {/* Data flow animations - spread throughout the network */}
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.circle
              key={`data-flow-${i}`}
              cx={0}
              cy={0}
              r={2}
              fill="#FFFFFF"
              animate={{
                cx: [i * 300, i * 300 + 300, i * 300 + 600, i * 300 + 900],
                cy: [200, 350, 500, 650],
                opacity: [0, 0.5, 0.5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}

          {[1, 2, 3, 4, 5].map((i) => (
            <motion.circle
              key={`data-flow-reverse-${i}`}
              cx={0}
              cy={0}
              r={2}
              fill="#FFFFFF"
              animate={{
                cx: [
                  1900 - i * 300,
                  1900 - i * 300 - 300,
                  1900 - i * 300 - 600,
                  1900 - i * 300 - 900,
                ],
                cy: [800, 650, 500, 350],
                opacity: [0, 0.5, 0.5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
                delay: i * 2 + 4,
              }}
            />
          ))}
        </svg>

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

      {/* Subtle color waves overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-60">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            viewBox="0 0 1440 800"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <path
              d="M0,0 L1440,0 L1440,300 Q1080,450 720,350 Q360,250 0,350 L0,0 Z"
              fill="rgba(254, 250, 245, 0.3)"
            />
            <path
              d="M0,800 L1440,800 L1440,350 Q1080,250 720,330 Q360,410 0,310 L0,800 Z"
              fill="rgba(254, 250, 245, 0.3)"
            />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-20 items-center">
          {/* Left content - 7 columns */}
          <div className="lg:col-span-7 relative">
            {/* Left side neural network background - More prominent */}
            <div className="absolute inset-0 -m-8 z-0 overflow-hidden rounded-xl">
              {/* Additional left-side network nodes */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Left side concentrated nodes */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <motion.circle
                    key={`left-node-${i}`}
                    cx={100 + (i % 4) * 80}
                    cy={100 + Math.floor(i / 4) * 150}
                    r={4 + (i % 3)}
                    fill="#D97706"
                    fillOpacity={0.4}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3 + (i % 3),
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  />
                ))}

                {/* Left side concentrated connections */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.path
                    key={`left-connection-${i}`}
                    d={`M${50 + i * 60},50 Q${120 + i * 30},200 ${
                      80 + i * 70
                    },350`}
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    strokeOpacity="0.2"
                    strokeDasharray="3,3"
                    fill="none"
                    animate={{
                      d: [
                        `M${50 + i * 60},50 Q${120 + i * 30},200 ${
                          80 + i * 70
                        },350`,
                        `M${50 + i * 60},50 Q${150 + i * 30},220 ${
                          80 + i * 70
                        },350`,
                        `M${50 + i * 60},50 Q${120 + i * 30},200 ${
                          80 + i * 70
                        },350`,
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 15,
                      ease: "easeInOut",
                      delay: i * 0.8,
                    }}
                  />
                ))}

                {/* Horizontal flow across the left side */}
                <motion.path
                  d="M0,150 Q150,120 300,180 Q450,240 600,200"
                  stroke="#D97706"
                  strokeWidth="1.5"
                  strokeOpacity="0.15"
                  strokeDasharray="4,4"
                  fill="none"
                  animate={{
                    d: [
                      "M0,150 Q150,120 300,180 Q450,240 600,200",
                      "M0,170 Q150,140 300,200 Q450,260 600,220",
                      "M0,150 Q150,120 300,180 Q450,240 600,200",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "easeInOut",
                  }}
                />

                {/* Data flow animations on left side */}
                {[1, 2, 3].map((i) => (
                  <motion.circle
                    key={`left-data-flow-${i}`}
                    cx={0}
                    cy={0}
                    r={2}
                    fill="#FFFFFF"
                    animate={{
                      cx: [50, 150, 250, 350],
                      cy: [100 + i * 50, 150 + i * 20, 200 - i * 30, 250],
                      opacity: [0, 0.7, 0.7, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "linear",
                      delay: i * 2,
                    }}
                  />
                ))}
              </svg>

              {/* Enhanced gradient for better content readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-sm"></div>
            </div>

            {/* Content - placed over the background */}
            <div className="relative z-10">
              <motion.span
                className="inline-block py-2 px-6 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium mb-6"
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
                className="flex flex-row gap-4 mb-10 md:mb-0"
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
                    className="group relative cursor-pointer" // Fixed: Added relative positioning
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
                      className="relative bg-white text-gray-700 border border-amber-300 px-8 py-4 rounded-lg font-medium" // Fixed: Added relative positioning
                      whileHover={{
                        borderColor: "#D97706",
                        color: "#D97706",
                      }}
                      // Removed y animation to prevent text shaking
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
                      className="absolute inset-0 rounded-lg border border-amber-200 opacity-0 group-hover:opacity-100 pointer-events-none" // Fixed: Added pointer-events-none
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
                className="absolute -top-3 -right-3 bg-green-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                Tests Passed!
              </motion.div>

              {/* Progress bar */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden shadow-md"
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

        {/* Left bottom corner - Neural network pattern (hidden on small screens) */}

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: { repeat: Infinity, duration: 2 },
          }}
        >
          <motion.div
            className="text-amber-700 text-sm font-medium mb-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Scroll Down
          </motion.div>
          <motion.div
            className="relative"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
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
            <motion.div
              className="absolute -inset-1 rounded-full bg-amber-500/20 blur-sm"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced mobile scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden overflow-visible z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div className="flex flex-col items-center">
            <motion.span
              className="text-amber-700 text-xs mb-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Scroll
            </motion.span>
            <motion.div
              className="h-5 w-5 rounded-full bg-amber-500/60 flex items-center justify-center"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.9, 0.5],
                boxShadow: [
                  "0 0 0 0 rgba(217, 119, 6, 0.4)",
                  "0 0 0 8px rgba(217, 119, 6, 0)",
                  "0 0 0 0 rgba(217, 119, 6, 0.4)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 2V10M6 10L2 6M6 10L10 6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
