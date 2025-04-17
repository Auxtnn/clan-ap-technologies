"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (3.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Generate multiple particles with different sizes and delays
  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 4 + 2; // Random size between 2-6px
      const angle = Math.random() * Math.PI * 2; // Random angle
      const distance = 70 + Math.random() * 60; // Random distance from center
      const delay = Math.random() * 1.5; // Random delay
      const duration = 2 + Math.random() * 2; // Random duration

      // Determine color based on index - using yellow and black theme
      let color;
      if (i % 3 === 0) color = "#F59E0B"; // Yellow-500
      else if (i % 3 === 1) color = "#000000"; // Black
      else color = "#F59E0B80"; // Semi-transparent yellow

      return { size, angle, distance, delay, duration, color };
    });
  };

  const particles = generateParticles(30);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute h-full w-full bg-[linear-gradient(to_right,#F59E0B_1px,transparent_1px),linear-gradient(to_bottom,#F59E0B_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          {/* Enhanced background elements */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_70%)]"></div>

            {/* Animated circuit-like lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 100 100"
            >
              <motion.path
                d="M10,50 Q30,30 50,50 T90,50"
                stroke="#F59E0B"
                strokeWidth="0.2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 0.5,
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                  },
                }}
              />
              <motion.path
                d="M10,60 Q40,80 70,40 T90,60"
                stroke="#F59E0B"
                strokeWidth="0.2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 0.5,
                  transition: {
                    duration: 3,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                  },
                }}
              />
              <motion.path
                d="M10,40 Q50,10 80,40 T90,40"
                stroke="#F59E0B"
                strokeWidth="0.2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 0.5,
                  transition: {
                    duration: 3,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                  },
                }}
              />
            </svg>
          </motion.div>

          {/* Animated floating elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-10 h-10 rounded bg-yellow-500/10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 45, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-yellow-500/10"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute top-1/3 left-1/4 w-12 h-12 rounded-lg border border-yellow-500/30"
            animate={{
              y: [0, 15, 0],
              x: [0, 15, 0],
              rotate: [0, 90, 0],
              transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute bottom-1/3 right-1/4 w-14 h-14 rounded-full border border-yellow-500/30"
            animate={{
              scale: [1, 1.1, 1],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Code fragments floating in background */}
          <motion.div
            className="absolute top-1/5 left-1/5 text-xs font-mono text-yellow-500/20"
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.3, 0.2],
              transition: { duration: 8, repeat: Infinity },
            }}
          >
            QA.verifyIntegrity();
          </motion.div>

          <motion.div
            className="absolute bottom-1/5 right-1/5 text-xs font-mono text-yellow-500/20"
            animate={{
              y: [0, 10, 0],
              opacity: [0.2, 0.3, 0.2],
              transition: { duration: 7, repeat: Infinity, delay: 1 },
            }}
          >
            assert.equal(actual, expected);
          </motion.div>

          {/* Main centered animation container */}
          <div className="flex flex-col items-center justify-center">
            {/* Central animation */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Hexagon shape - QA testing concept */}
              <motion.div
                className="absolute w-64 h-64"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{
                  opacity: 0.15,
                  rotate: 360,
                  transition: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon
                    points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="0.5"
                  />
                </svg>
              </motion.div>

              {/* Pulsing outer ring */}
              <motion.div
                className="absolute w-64 h-64 rounded-full border-2 border-yellow-500/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />

              {/* Rotating rings */}
              <motion.div
                className="absolute w-56 h-56 rounded-full border border-yellow-500/40"
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Dots on the ring */}
                <motion.div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-yellow-500" />
                <motion.div className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-yellow-500" />
                <motion.div className="absolute left-0 top-1/2 w-3 h-3 -mt-1.5 rounded-full bg-yellow-500" />
                <motion.div className="absolute right-0 top-1/2 w-3 h-3 -mt-1.5 rounded-full bg-yellow-500" />
              </motion.div>

              <motion.div
                className="absolute w-48 h-48 rounded-full border border-yellow-500/40"
                animate={{
                  rotate: -360,
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Dots on the counter-rotating ring */}
                <motion.div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-yellow-500" />
                <motion.div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-yellow-500" />
                <motion.div className="absolute left-0 top-1/2 w-2 h-2 -mt-1 rounded-full bg-yellow-500" />
                <motion.div className="absolute right-0 top-1/2 w-2 h-2 -mt-1 rounded-full bg-yellow-500" />
              </motion.div>

              {/* Center elements */}
              <div className="relative">
                {/* Center circle */}
                <motion.div
                  className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-500/90 to-yellow-500/70 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.5)]"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                  }}
                >
                  {/* QA symbol */}
                  <motion.div
                    className="text-2xl font-bold text-black"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.3, duration: 0.5 },
                    }}
                  >
                    QA
                  </motion.div>
                </motion.div>

                {/* Outer spinning hexagon */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-36 h-36 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, opacity: 0, rotate: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 0.7,
                    rotate: 90,
                    transition: { duration: 1, delay: 0.3, ease: "easeOut" },
                  }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon
                      points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                    />
                  </svg>
                </motion.div>

                {/* Particles */}
                {particles.map((particle, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 rounded-full"
                    style={{
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      backgroundColor: particle.color,
                    }}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: Math.cos(particle.angle) * particle.distance,
                      y: Math.sin(particle.angle) * particle.distance,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      transition: {
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 1,
                        ease: "easeInOut",
                      },
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Text animation */}
            <div className="overflow-hidden mt-8">
              <motion.div
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.7, delay: 0.6, ease: "easeOut" },
                }}
              >
                <h2 className="text-4xl font-bold tracking-wide">
                  <span className="text-yellow-500">CLAN-AP</span>
                  <span className="text-white"> TECHNOLOGIES</span>
                </h2>
                <h3 className="text-xl font-medium text-yellow-500/80 mt-1 tracking-widest">
                  QUALITY ASSURANCE EXPERTS
                </h3>
              </motion.div>
            </div>

            {/* Highlights */}
            <motion.div
              className="mt-6 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.9, duration: 0.7 },
              }}
            >
              <motion.div
                className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.7)]"
                animate={{
                  scale: [1, 1.3, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                }}
              />
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  transition: {
                    duration: 1.5,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                }}
              />
              <motion.div
                className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.7)]"
                animate={{
                  scale: [1, 1.3, 1],
                  transition: {
                    duration: 1.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                }}
              />
            </motion.div>

            {/* Progress bar */}
            <div className="mt-8 w-80 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-600 to-yellow-500"
                initial={{ width: 0 }}
                animate={{
                  width: "100%",
                  transition: { duration: 3, ease: "easeInOut" },
                }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="mt-4 text-yellow-500 font-medium tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.5 },
              }}
            >
              <motion.span
                animate={{
                  opacity: [1, 0.4, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                TESTING SYSTEMS
              </motion.span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
