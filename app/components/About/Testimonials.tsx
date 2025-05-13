"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isInView]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gray-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-grid-pattern" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium">
              Client Stories
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Don't take our word for it – hear from the companies we've helped
            deliver exceptional software.
          </motion.p>
        </div>

        {/* Testimonials carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction === 1 ? 200 : -200,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction === 1 ? -200 : 200,
                  position: "absolute",
                }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="bg-white rounded-xl shadow-sm w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left side - Content */}
                  <div className="p-8">
                    <div className="text-5xl text-yellow-500 opacity-20">"</div>
                    <p className="text-lg text-gray-600 my-6">
                      {testimonials[currentIndex].quote}
                    </p>

                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 relative overflow-hidden">
                        {testimonials[currentIndex].image ? (
                          <Image
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].author}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <span className="text-lg font-bold">
                              {testimonials[currentIndex].author[0]}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="ml-4">
                        <div className="font-bold">
                          {testimonials[currentIndex].author}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonials[currentIndex].role},{" "}
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Company logo */}
                  <div className="bg-gray-50 p-8 flex items-center justify-center">
                    <div className="w-48 h-24 relative">
                      {testimonials[currentIndex].logo ? (
                        <Image
                          src={testimonials[currentIndex].logo}
                          alt={`${testimonials[currentIndex].company} logo`}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 border border-gray-200 rounded p-4">
                          <span className="text-lg font-bold">
                            {testimonials[currentIndex].company}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-between absolute top-1/2 left-4 right-4 -translate-y-1/2 z-10">
              <motion.button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none text-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
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
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none text-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
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

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-yellow-500 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial data
const testimonials = [
  {
    author: "Alessio Ricco",
    role: "CTO",
    company: "Dashy Dash",
    image: "/images/testimonials/alessio.jpg",
    logo: "/images/clients/dashy-dash.svg",
    quote:
      "Manpreet from ClanAP Technologies played a crucial role as a Quality Assurance Specialist at Dashy Dash, showcasing exceptional precision and professionalism. His meticulous testing and attention to detail significantly reduced defects, enhancing the efficiency and quality of software delivery.",
  },
  {
    author: "Aaron Friedlander",
    role: "Head of Engineering",
    company: "Passes",
    image: "/images/testimonials/aaron.jpg",
    logo: "/images/clients/passes.svg",
    quote:
      "Manpreet from ClanAP Technologies joined our team to build out an automated test suite using Playwright. He did a fantastic job, constantly demonstrating his ability to create & implement efficient and robust automated test suites and effectively identifying defects and potential issues throughout the application.",
  },
  {
    author: "Christian Delpero",
    role: "CISO",
    company: "eins+null GmbH & Co",
    image: "/images/testimonials/christian.jpg",
    logo: "/images/clients/einsnull.svg",
    quote:
      "Manpreet from ClanAP Technologies has worked as a freelancer for our company on a project for my department. His task was the development of automated E2E testing in Cypress. I highly recommend Manpreet as he is very easy to work with and produces great results. He writes excellent code that is easy to understand and maintain for later use.",
  },
  {
    author: "Fred Tzeng",
    role: "CTO",
    company: "Analyst Intelligence",
    image: "/images/testimonials/fred.jpg",
    logo: "/images/clients/analyst-intelligence.svg",
    quote:
      "Manpreet from ClanAP Technologies came in to our E2E automation project at its infancy stage and built it up into a full-fledged automation machine. While he was new to the cutting-edge Playwright framework, he quickly became proficient at it in short amount of time. He's very professional, easy to work with, solves problems independently, and his tests always worked!",
  },
];

export default Testimonials;
