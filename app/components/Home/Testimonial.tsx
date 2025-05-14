"use client";

import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

interface ProgressBarProps {
  autoplaySpeed: number;
  isPlaying: boolean;
  slideIndex: number;
}

// Progress Bar Component for autoplay visualization
const ProgressBar = ({
  autoplaySpeed,
  isPlaying,
  slideIndex,
}: ProgressBarProps) => {
  const [width, setWidth] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Animation function for smooth progress
  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / autoplaySpeed, 1);

    setWidth(progress * 100);

    if (progress < 1 && isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    // Reset animation when slide changes or play state changes
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    startTimeRef.current = null;
    setWidth(0);

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, slideIndex, autoplaySpeed]);

  return (
    <div className="w-full h-1 bg-gray-100 rounded-full mt-10 overflow-hidden">
      <div
        className="h-full bg-yellow-500 rounded-full"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<Slider | null>(null);
  const autoplaySpeed = 6000;
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to safely clear any existing autoplay timeouts
  const clearAutoplayTimeout = () => {
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
      autoplayTimeoutRef.current = null;
    }
  };

  // Function to safely restart autoplay
  const restartAutoplay = () => {
    clearAutoplayTimeout();
    setIsAutoPlaying(false);

    // Force a small delay before restarting to ensure state updates properly
    autoplayTimeoutRef.current = setTimeout(() => {
      if (sliderRef.current) {
        setIsAutoPlaying(true);
        // Explicitly restart Slick's autoplay
        sliderRef.current.slickPlay();
      }
    }, 100);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      clearAutoplayTimeout();
    };
  }, []);

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

  // Ensure slider autoplays correctly after manual navigation
  useEffect(() => {
    if (isAutoPlaying && sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, [isAutoPlaying]);

  // Custom Previous Arrow component that matches existing design
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={(e) => {
          if (onClick) {
            onClick(e);
            restartAutoplay();

            // Restart the progress bar and autoplay after full cycle
            autoplayTimeoutRef.current = setTimeout(() => {
              setIsAutoPlaying(true);
            }, autoplaySpeed);
          }
        }}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none text-black border border-gray-100 absolute top-1/2 left-0 z-10 -translate-y-1/2 transform"
        style={{ left: "-5px" }}
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
      </button>
    );
  };

  // Custom Next Arrow component that matches existing design
  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={(e) => {
          if (onClick) {
            onClick(e);
            restartAutoplay();

            // Restart the progress bar and autoplay after full cycle
            autoplayTimeoutRef.current = setTimeout(() => {
              setIsAutoPlaying(true);
            }, autoplaySpeed);
          }
        }}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none text-black border border-gray-100 absolute top-1/2 right-0 z-10 -translate-y-1/2 transform"
        style={{ right: "-5px" }}
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
      </button>
    );
  };

  // Get the total number of slides based on responsive layout
  const totalSlides =
    isMobile || isTablet
      ? testimonials.length
      : Math.ceil(testimonials.length / 2);

  // Custom Dots component with proper TypeScript typing
  const renderCustomDots = () => {
    return (
      <div className="custom-dots flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (sliderRef.current) {
                sliderRef.current.slickGoTo(index);
                restartAutoplay();

                // Restart the progress bar and autoplay after full cycle
                autoplayTimeoutRef.current = setTimeout(() => {
                  setIsAutoPlaying(true);
                }, autoplaySpeed);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSlide ? "bg-yellow-500 w-8" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    );
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

  // Define slider settings
  const settings = {
    dots: false, // We'll use our own custom dots
    infinite: true,
    speed: 500,
    slidesToShow: isMobile || isTablet ? 1 : 2,
    slidesToScroll: 1,
    autoplay: isAutoPlaying,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_: number, next: number) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        <div className="relative lg:w-11/12 mx-auto">
          <div
            className="slider-container"
            style={{ height: getContainerHeight() }}
          >
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id}>
                  <div
                    className="mx-2 bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex flex-col h-full"
                    style={{ height: getContainerHeight() }}
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
                </div>
              ))}
            </Slider>
          </div>

          {/* Custom Progress Bar */}
          <ProgressBar
            autoplaySpeed={autoplaySpeed}
            isPlaying={isAutoPlaying}
            slideIndex={activeSlide}
          />

          {/* Custom Dots Navigation */}
          {renderCustomDots()}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
