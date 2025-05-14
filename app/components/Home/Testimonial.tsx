"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
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

interface ProgressBarProps {
  autoplaySpeed: number;
  isPlaying: boolean;
  slideIndex: number;
}

interface CustomArrowProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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

// Progress Bar Component - Fixed to properly reset at the end of each slide
const ProgressBar = ({
  autoplaySpeed,
  isPlaying,
  slideIndex,
}: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const progressTimerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const previousSlideIndexRef = useRef<number>(slideIndex);

  useEffect(() => {
    // Check if the slide has changed
    if (previousSlideIndexRef.current !== slideIndex) {
      // Reset progress when slide changes
      setProgress(0);
      startTimeRef.current = null;
      previousSlideIndexRef.current = slideIndex;
    }

    // Clean up previous animation frame
    if (progressTimerRef.current !== null) {
      cancelAnimationFrame(progressTimerRef.current);
      progressTimerRef.current = null;
    }

    if (!isPlaying) return;

    // Animation function with proper typing
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const calculatedProgress = Math.min(elapsed / autoplaySpeed, 1);

      setProgress(calculatedProgress);

      if (calculatedProgress < 1 && isPlaying) {
        progressTimerRef.current = requestAnimationFrame(animate);
      } else if (calculatedProgress >= 1) {
        // Ensure progress stays at 100% briefly before the slide changes
        setTimeout(() => {
          // Only reset if we're still on the same slide
          if (previousSlideIndexRef.current === slideIndex) {
            setProgress(0);
            startTimeRef.current = null;
            if (isPlaying) {
              progressTimerRef.current = requestAnimationFrame(animate);
            }
          }
        }, 50);
      }
    };

    progressTimerRef.current = requestAnimationFrame(animate);

    return () => {
      if (progressTimerRef.current !== null) {
        cancelAnimationFrame(progressTimerRef.current);
        progressTimerRef.current = null;
      }
    };
  }, [isPlaying, slideIndex, autoplaySpeed]);

  return (
    <div className="w-full h-1 bg-gray-100 rounded-full mt-10 overflow-hidden">
      <div
        className="h-full bg-yellow-500 rounded-full transition-duration-300"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const sliderRef = useRef<Slider | null>(null);
  const autoplaySpeed = 6000;
  const displayedActiveSlideRef = useRef<number>(0);

  // Setup resize observer for responsive layout
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Create resize handler using debounce pattern
    let timeoutId: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoize device type calculations
  const { isMobile, isTablet, totalSlides, containerHeight } = useMemo(() => {
    const width = dimensions.width;
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;
    const totalSlides =
      isMobile || isTablet
        ? testimonials.length
        : Math.ceil(testimonials.length / 2);

    let containerHeight: string;
    if (isMobile) {
      containerHeight = "470px";
    } else if (isTablet) {
      containerHeight = "310px";
    } else {
      containerHeight = "350px";
    }

    return { isMobile, isTablet, totalSlides, containerHeight };
  }, [dimensions.width]);

  // Update displayedActiveSlide for proper dot highlighting
  useEffect(() => {
    if (isMobile || isTablet) {
      // On mobile and tablet, active slide index maps directly
      displayedActiveSlideRef.current = activeSlide;
    } else {
      // On desktop, each slide shows 2 testimonials, so we need to adjust
      displayedActiveSlideRef.current = Math.floor(activeSlide / 2);
    }
  }, [activeSlide, isMobile, isTablet]);

  // Handle autoplay pause/resume
  const pauseAutoplay = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const resumeAutoplay = useCallback(() => {
    if (sliderRef.current) {
      setIsAutoPlaying(true);
      sliderRef.current.slickPlay();
    }
  }, []);

  // Navigation handlers - memoized to prevent unnecessary re-renders
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;

    pauseAutoplay();

    // On desktop, calculate the previous slide properly to ensure we show the previous set of testimonials
    if (!isMobile && !isTablet && sliderRef.current) {
      const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
      // Ensure we move to the previous set of testimonials (2 at a time)
      const prevSlide = Math.floor((currentSlide - 2) / 2) * 2;
      sliderRef.current.slickGoTo(
        prevSlide >= 0 ? prevSlide : testimonials.length - 2
      );
      setActiveSlide(prevSlide >= 0 ? prevSlide : testimonials.length - 2);
    } else {
      sliderRef.current.slickPrev();

      // Update active slide synchronously with current slider state
      setTimeout(() => {
        if (sliderRef.current && sliderRef.current.innerSlider) {
          const newIndex = sliderRef.current.innerSlider.state.currentSlide;
          setActiveSlide(newIndex);
        }
      }, 0);
    }

    // Resume autoplay after a delay
    setTimeout(resumeAutoplay, 100);
  }, [pauseAutoplay, resumeAutoplay, isMobile, isTablet]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;

    pauseAutoplay();

    // On desktop, calculate the next slide properly to ensure we show the next set of testimonials
    if (!isMobile && !isTablet && sliderRef.current) {
      const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
      // Ensure we move to the next set of testimonials (2 at a time)
      const nextSlide = Math.ceil((currentSlide + 1) / 2) * 2;
      sliderRef.current.slickGoTo(nextSlide);
      setActiveSlide(nextSlide);
    } else {
      sliderRef.current.slickNext();

      // Update active slide synchronously with current slider state
      setTimeout(() => {
        if (sliderRef.current && sliderRef.current.innerSlider) {
          const newIndex = sliderRef.current.innerSlider.state.currentSlide;
          setActiveSlide(newIndex);
        }
      }, 0);
    }

    // Resume autoplay after a delay
    setTimeout(resumeAutoplay, 100);
  }, [pauseAutoplay, resumeAutoplay, isMobile, isTablet]);

  const handleDotClick = useCallback(
    (index: number) => {
      if (!sliderRef.current) return;

      pauseAutoplay();

      // Calculate the actual slide to navigate to based on the dot index
      let actualSlideIndex = index;
      if (!isMobile && !isTablet) {
        // For desktop view where we show 2 testimonials per slide,
        // multiply dot index by 2 to get the actual slide index
        actualSlideIndex = index * 2;
      }

      sliderRef.current.slickGoTo(actualSlideIndex);
      setActiveSlide(actualSlideIndex);

      // Resume autoplay after a delay
      setTimeout(resumeAutoplay, 100);
    },
    [pauseAutoplay, resumeAutoplay, isMobile, isTablet]
  );

  // Custom Previous Arrow component
  const CustomPrevArrow = ({ onClick }: CustomArrowProps) => (
    <button
      onClick={(e) => {
        e.preventDefault();
        handlePrev();
        if (onClick) onClick(e);
      }}
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none text-black border border-gray-100 absolute top-1/2 left-0 z-10 -translate-y-1/2 transform"
      style={{ left: "-5px" }}
      aria-label="Previous testimonial"
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

  // Custom Next Arrow component
  const CustomNextArrow = ({ onClick }: CustomArrowProps) => (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleNext();
        if (onClick) onClick(e);
      }}
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none text-black border border-gray-100 absolute top-1/2 right-0 z-10 -translate-y-1/2 transform"
      style={{ right: "-5px" }}
      aria-label="Next testimonial"
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

  // Custom Dots component
  const CustomDots = () => {
    // Compute dots based on view type
    const displayedActiveSlide =
      isMobile || isTablet ? activeSlide : Math.floor(activeSlide / 2);

    return (
      <div className="custom-dots flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === displayedActiveSlide
                ? "bg-yellow-500 w-8"
                : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={index === displayedActiveSlide ? "true" : "false"}
          />
        ))}
      </div>
    );
  };

  // Memoize slider settings to prevent unnecessary re-renders
  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: isMobile || isTablet ? 1 : 2,
      slidesToScroll: isMobile || isTablet ? 1 : 2, // On desktop, scroll 2 slides at a time
      autoplay: isAutoPlaying,
      autoplaySpeed: autoplaySpeed,
      pauseOnHover: true,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
      beforeChange: (_: number, next: number) => {
        setActiveSlide(next);
      },
      afterChange: (current: number) => {
        setActiveSlide(current);
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
    }),
    [isMobile, isTablet, isAutoPlaying, autoplaySpeed]
  );

  // Memoize the testimonial items to prevent unnecessary re-renders
  const testimonialItems = useMemo(
    () =>
      testimonials.map((testimonial) => (
        <div key={testimonial.id} className="focus-visible:outline-none">
          <div
            className="mx-2 bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex flex-col h-full"
            style={{ height: containerHeight }}
          >
            {/* Highlight badge */}
            <div className="mb-4">
              <span className="inline-block py-1 px-3 bg-yellow-500/10 text-yellow-600 rounded-full text-xs font-medium">
                {testimonial.highlight}
              </span>
            </div>

            {/* Quote section */}
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
                <span className="text-3xl text-yellow-500 leading-none">❞</span>
              </div>
            </div>

            {/* Author info */}
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
                <div className="font-bold text-sm">{testimonial.author}</div>
                <div className="text-xs text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      )),
    [containerHeight]
  );

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
          <div className="slider-container" style={{ height: containerHeight }}>
            <Slider ref={sliderRef} {...settings}>
              {testimonialItems}
            </Slider>
          </div>

          {/* Custom Progress Bar */}
          <ProgressBar
            autoplaySpeed={autoplaySpeed}
            isPlaying={isAutoPlaying}
            slideIndex={activeSlide}
          />

          {/* Custom Dots Navigation */}
          <CustomDots />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
