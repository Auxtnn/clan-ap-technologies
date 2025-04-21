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
      className="relative min-h-screen pt-10 flex items-center overflow-hidden bg-gradient-to-br from-amber-50/80 via-yellow-50/90 to-orange-50/80"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Strong gradient mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-100 via-orange-50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-100 via-amber-50 to-transparent" />

        {/* Bold pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* More prominent flowing shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            viewBox="0 0 1200 800"
            className="w-full h-full"
            preserveAspectRatio="xMinYMin slice"
          >
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#eab308" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#fb923c" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 C400,100 600,400 400,600 Q200,800 0,800 Z"
              fill="url(#gradient1)"
            />
            <path
              d="M1200,0 C800,200 600,400 800,700 Q1000,800 1200,800 Z"
              fill="url(#gradient2)"
            />
          </svg>
        </div>

        {/* Stronger animated orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.25) 0%, rgba(245,158,11,0.15) 50%, transparent 70%)",
            filter: "blur(30px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.2) 0%, rgba(234,179,8,0.12) 50%, transparent 70%)",
            filter: "blur(25px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        {/* More visible code snippets */}
        <motion.div
          className="absolute hidden md:block top-1/4 right-1/3 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 text-xs font-mono"
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: [-3, 3, -3],
            opacity: [0.8, 1, 0.8],
            rotate: [0, 0.5, 0, -0.5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <span className="text-amber-600">const</span>{" "}
          <span className="text-orange-500">quality</span> ={" "}
          <span className="text-yellow-600">await</span>{" "}
          <span className="text-gray-700">ensureExcellence();</span>
        </motion.div>

        {/* More visible wave lines */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10">
          <motion.svg
            viewBox="0 0 800 600"
            className="w-full h-full absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 2 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.path
                key={i}
                d={`M0,${150 + i * 30} C200,${130 + i * 30} 400,${
                  170 + i * 30
                } 800,${150 + i * 30}`}
                fill="none"
                stroke={i % 2 === 0 ? "#fbbf24" : "#f59e0b"}
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0.5 }}
                animate={{
                  y: [0, -3 + i * 0.5, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.svg>
        </div>
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
                className="inline-block py-2 px-6 bg-yellow-500/10 text-yellow-700 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-yellow-500/20"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Excellence in Software Testing
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Perfect Your <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Software Quality
                <motion.span
                  className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-yellow-400/30 via-amber-400/20 to-orange-400/30 w-full rounded-full blur-sm"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
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
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold relative overflow-hidden group shadow-xl shadow-yellow-500/20"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  className="border-2 border-amber-500 bg-white/80 backdrop-blur-sm text-amber-700 px-8 py-4 rounded-xl font-bold hover:bg-amber-50 hover:border-amber-600 transition-all duration-300 shadow-sm"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 20px -10px rgba(245, 158, 11, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Services
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right content - Dark Terminal - 5 columns */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Enhanced decorative glow */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-300/30 to-yellow-300/20 rounded-full blur-3xl z-0"
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
                className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-br from-orange-300/30 to-amber-300/20 rounded-full blur-2xl z-0"
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

              {/* Enhanced dark terminal */}
              <motion.div
                className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 relative z-10"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                whileHover={{
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.4)",
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <div className="flex items-center bg-gray-800 px-4 py-3 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm font-mono">
                    qa-automation.sh
                  </div>
                </div>

                <div className="p-6 font-mono text-sm h-72 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
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
                      className="w-3 h-5 bg-amber-500"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  </div>
                </div>

                {/* Terminal tabs */}
                <div className="absolute top-14 right-4 flex space-x-1">
                  <motion.div
                    className="px-3 py-1 rounded-t bg-gray-800 text-xs text-gray-400 cursor-pointer"
                    whileHover={{ backgroundColor: "#374151" }}
                  >
                    automation.js
                  </motion.div>
                  <motion.div
                    className="px-3 py-1 rounded-t bg-gray-700 text-xs text-gray-500 cursor-pointer"
                    whileHover={{ backgroundColor: "#374151" }}
                  >
                    main.js
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced success badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-5 py-2.5 rounded-lg shadow-lg z-20"
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

              {/* Enhanced completion meter */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-gray-200 rounded-full overflow-hidden z-20 shadow-inner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-full"
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
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-amber-400 flex justify-center pt-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-amber-500"
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
      color: "text-yellow-400",
    },
    { prefix: ">", text: "Validating UI components", color: "text-yellow-400" },
    {
      prefix: ">",
      text: "Security vulnerability scan complete",
      color: "text-yellow-400",
    },
    {
      prefix: ">",
      text: "Performance benchmark: 97/100",
      color: "text-yellow-400",
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
          className="ml-2 inline-block h-2 w-2 bg-amber-500 rounded-full"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      )}
    </motion.div>
  );
};

export default HeroSection;
