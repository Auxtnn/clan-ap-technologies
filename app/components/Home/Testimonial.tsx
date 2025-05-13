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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  // Responsive layout detection
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    // Check initially
    checkDeviceType();

    // Add resize listener
    window.addEventListener("resize", checkDeviceType);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  // Get the total number of slides based on responsive layout
  const totalSlides =
    isMobile || isTablet
      ? testimonials.length
      : Math.ceil(testimonials.length / 2);

  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
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
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  // Get current testimonials to show based on device
  const getCurrentTestimonials = () => {
    if (isMobile || isTablet) {
      // For mobile and tablet, show only one testimonial
      return [testimonials[currentIndex]];
    } else {
      // For desktop, show two testimonials per slide
      const startIndex = currentIndex * 2;
      return testimonials.slice(startIndex, startIndex + 2).filter(Boolean);
    }
  };

  // Get container height based on device type
  const getContainerHeight = () => {
    if (isMobile) {
      return "470px";
    } else if (isTablet) {
      return "310px";
    } else {
      return "350px";
    }
  };

  return (
    <section className="pt-10 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-grid-pattern" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
          className="relative lg:w-11/12 mx-auto"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Fixed height container with background to prevent white flash */}
          <div
            ref={carouselContainerRef}
            className="overflow-hidden mx-auto bg-white"
            style={{ height: getContainerHeight() }}
          >
            <div className="flex flex-col lg:flex-row gap-4 h-full">
              {getCurrentTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex flex-col h-full"
                >
                  {/* Highlight badge */}
                  <div className="mb-4">
                    <span className="inline-block py-1 px-3 bg-yellow-500/10 text-yellow-600 rounded-full text-xs font-medium">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Redesigned quote section with quotes at beginning and end */}
                  <div className="relative flex-grow overflow-y-auto">
                    <div className="flex items-start">
                      <span className="text-3xl text-yellow-500 leading-none mr-1">
                        ❝
                      </span>
                    </div>

                    <p className="text-gray-700 md:text-base text-sm leading-[1.35rem] px-2">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-start justify-end">
                      <span className="text-3xl text-yellow-500 leading-none">
                        ❞
                      </span>
                    </div>
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
            </div>
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
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-yellow-500 w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
