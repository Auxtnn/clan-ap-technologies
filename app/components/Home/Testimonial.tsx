"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Manpreet from Clan-AP Technologies played a crucial role as a Quality Assurance (QA) Specialist at Dashy Dash, showcasing exceptional precision and professionalism. His meticulous testing and attention to detail significantly reduced defects, enhancing the efficiency and quality of software delivery.",
    author: "Alessio Ricco",
    role: "CTO",
    company: "Dashy Dash",
    highlight: "Significantly reduced defects",
  },
  {
    id: 2,
    quote:
      "Manpreet Bains from Clan-AP Technologies joined our team to build out an automated test suite using Playwright. He did a fantastic job, constantly demonstrating his ability to create & implement efficient and robust automated test suites and effectively identifying defects and potential issues throughout the application.",
    author: "Aaron Friedlander",
    role: "Head of Engineering",
    company: "Passes",
    highlight: "Efficient automated test suites",
  },
  {
    id: 3,
    quote:
      "Manpreet from Clan-AP Technologies has worked as a freelancer for our company on a project for my department. His task was the development of automated E2E testing in Cypress. I highly recommend Manpreet as he is very easy to work with and produces great results. He writes excellent code that is easy to understand and maintain for later use.",
    author: "Christian Delpero",
    role: "CISO",
    company: "eins+null GmbH & Co",
    highlight: "Excellent, maintainable code",
  },
  {
    id: 4,
    quote:
      "Manpreet from Clan-AP Technologies came in to our E2E automation project at its infancy stage and built it up into a full-fledged automation machine. While he was new to the cutting-edge Playwright framework, he quickly became proficient at it in short amount of time. He's very professional, easy to work with, solves problems independently, and his tests always worked!",
    author: "Fred Tzeng",
    role: "CTO",
    company: "Analyst Intelligence",
    highlight: "Built full-fledged automation",
  },
];

const testimonialPairs: any[][] = [];
for (let i = 0; i < testimonials.length; i += 2) {
  if (i + 1 < testimonials.length) {
    testimonialPairs.push([testimonials[i], testimonials[i + 1]]);
  } else {
    testimonialPairs.push([testimonials[i]]);
  }
}

const TestimonialsSection = () => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentPairIndex(
        (prevIndex) => (prevIndex + 1) % testimonialPairs.length
      );
    }, 6000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonialPairs.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentPairIndex((prevIndex) =>
      prevIndex === 0 ? testimonialPairs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentPairIndex(
      (prevIndex) => (prevIndex + 1) % testimonialPairs.length
    );
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-grid-pattern" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium mb-4">
            Client Success
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our clients achieve measurable improvements in software quality,
            efficiency, and user satisfaction.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          <div className="overflow-hidden mx-auto">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentPairIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="flex flex-col lg:flex-row gap-6"
              >
                {testimonialPairs[currentPairIndex].map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-6 transition-all duration-300"
                  >
                    {/* Highlight badge */}
                    <div className="mb-4">
                      <span className="inline-block py-1 px-3 bg-yellow-500/10 text-yellow-600 rounded-full text-xs font-medium">
                        {testimonial.highlight}
                      </span>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-yellow-500 opacity-20">
                        "
                      </div>
                      <p className="text-gray-700 mb-4 relative pl-3">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author info */}
                    <div className="flex items-center mt-6">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-base font-bold text-gray-500">
                          {testimonial.author[0]}
                        </span>
                      </div>
                      <div className="ml-3">
                        <div className="font-bold text-sm">
                          {testimonial.author}
                        </div>
                        <div className="text-xs text-gray-500">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="w-full h-1 bg-gray-100 rounded-full mt-10 overflow-hidden">
              <motion.div
                className="h-full bg-yellow-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 6,
                  ease: "linear",
                  repeatType: "loop",
                  repeat: isAutoPlaying ? Infinity : 0,
                  repeatDelay: 0,
                }}
                key={currentPairIndex + isAutoPlaying.toString()}
              />
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 px-2">
            <motion.button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none text-black border border-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none text-black border border-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonialPairs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(index > currentPairIndex ? 1 : -1);
                setCurrentPairIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPairIndex ? "bg-yellow-500 w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial pair ${index + 1}`}
            />
          ))}
        </div>

        {/* Partner logos */}
        <div className="pt-12 mt-6 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm mb-6">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16">
            {/* Replace with actual logo SVGs or images */}

            <img src="/images/google.svg" className="h-6 w-20 " />
            <img src="/images/fedex.svg" className="h-6 w-20  " />
            <img src="/images/airbnb.svg" className="h-6 w-20  " />
            <img src="/images/hubspot.svg" className="h-6 w-20 " />
            <img src="/images/microsoft.svg" className="h-6 w-20  " />
            <img src="/images/walmart.svg" className="h-6 w-20 " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
