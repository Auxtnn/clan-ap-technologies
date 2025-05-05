"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PartnerLogos from "./PartnerLogos";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  highlight: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Manpreet from Clan-AP Technologies played a crucial role as a Quality Assurance (QA) Specialist at Dashy Dash, showcasing exceptional precision and professionalism. His meticulous testing and attention to detail significantly reduced defects, enhancing the efficiency and quality of software delivery.",
    author: "Alessio Ricco",
    role: "CTO",
    image: "/images/alessio.png",
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
    image: "/images/aaron.png",
    highlight: "Efficient automated test suites",
  },
  {
    id: 3,
    quote:
      "Manpreet from Clan-AP Technologies has worked as a freelancer for our company on a project for my department. His task was the development of automated E2E testing in Cypress. I highly recommend Manpreet as he is very easy to work with and produces great results. He writes excellent code that is easy to understand and maintain for later use.",
    author: "Christian Delpero",
    role: "CISO",
    company: "eins+null GmbH & Co",
    image: "/images/chris.png",
    highlight: "Excellent, maintainable code",
  },
  {
    id: 4,
    quote:
      "Manpreet from Clan-AP Technologies came in to our E2E automation project at its infancy stage and built it up into a full-fledged automation machine. While he was new to the cutting-edge Playwright framework, he quickly became proficient at it in short amount of time. He's very professional, easy to work with, solves problems independently, and his tests always worked!",
    author: "Fred Tzeng",
    role: "CTO",
    image: "/images/fred.png",
    company: "Analyst Intelligence",
    highlight: "Built full-fledged automation",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  // Responsive layout detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check initially
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Get the total number of slides based on responsive layout
  const totalSlides = isMobile
    ? testimonials.length
    : Math.ceil(testimonials.length / 2);

  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 6000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, totalSlides]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  // Modified variants with smaller x distance and better transition properties
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  // Get current testimonials to show based on device
  const getCurrentTestimonials = () => {
    if (isMobile) {
      // For mobile, show only one testimonial
      return [testimonials[currentIndex]];
    } else {
      // For desktop, show two testimonials per slide
      const startIndex = currentIndex * 2;
      return testimonials.slice(startIndex, startIndex + 2).filter(Boolean);
    }
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
          {/* Fixed height container with background to prevent white flash */}
          <div
            ref={carouselContainerRef}
            className="overflow-hidden mx-auto bg-white"
            style={{ height: isMobile ? "450px" : "350px" }}
          >
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="flex flex-col lg:flex-row gap-6 h-full"
              >
                {getCurrentTestimonials().map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-6 transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Highlight badge */}
                    <div className="mb-4">
                      <span className="inline-block py-1 px-3 bg-yellow-500/10 text-yellow-600 rounded-full text-xs font-medium">
                        {testimonial.highlight}
                      </span>
                    </div>

                    {/* Quote - with flex-grow to push author to bottom */}
                    <div className="relative flex-grow overflow-y-auto">
                      <div className="absolute -top-2 -left-2 text-4xl text-yellow-500 opacity-20">
                        "
                      </div>
                      <p className="text-gray-700 mb-4 relative pl-3">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author info - positioned at bottom */}
                    <div className="flex items-center mt-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                          width={40}
                          height={40}
                        />
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
          </div>

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
              key={currentIndex + isAutoPlaying.toString()}
            />
          </div>

          {/* Navigation buttons - positioned outside fixed height container */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 px-1 sm:px-2 md:px-4 pointer-events-none">
            <motion.button
              onClick={handlePrevious}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none text-black border border-gray-100 pointer-events-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-5 sm:h-5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none text-black border border-gray-100 pointer-events-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-5 sm:h-5"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-yellow-500 w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Partner logos */}
        <PartnerLogos />
      </div>
    </section>
  );
};

export default TestimonialsSection;
