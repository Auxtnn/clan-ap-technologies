"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Partner {
  name: string;
  path: string;
}

const PartnerLogosServices = () => {
  const [filterStyle, setFilterStyle] = useState<string>("yellow-tint");

  const filterStyles = {
    "yellow-tint":
      "brightness(0) invert(1) sepia(50%) hue-rotate(10deg) brightness(105%) contrast(95%)",
    "yellow-glow":
      "drop-shadow(0 0 3px rgba(255, 217, 102, 0.8)) brightness(0) invert(1)",
    "yellow-amber":
      "brightness(0) invert(82%) sepia(42%) saturate(694%) hue-rotate(332deg) brightness(101%) contrast(101%)",
    "white-only": "brightness(0) invert(1)",
    "white-with-glow":
      "brightness(0) invert(1) drop-shadow(0 0 2px rgba(255, 255, 255, 0.7))",
  };

  // Combine all logos into a single array
  const partners: Partner[] = [
    { name: "Analyst", path: "/images/partners/analyst.png" },
    { name: "Joules", path: "/images/partners/joules.png" },
    { name: "Scaura", path: "/images/partners/scaura.png" },
    { name: "Bittewallet", path: "/images/partners/bittewallet.png" },
    { name: "Cinelytic", path: "/images/partners/cinelytic.png" },
    { name: "Passes", path: "/images/partners/passes.svg" },
    { name: "Steerhealth", path: "/images/partners/steer-health.png" },
    { name: "Dashy", path: "/images/partners/dashy.png" },
    { name: "Flatirons", path: "/images/partners/flatirons.png" },
    { name: "Uprise", path: "/images/partners/uprise.png" },
    { name: "Wholesome", path: "/images/partners/wholesome.png" },
    { name: "Yayloh", path: "/images/partners/yayloh.png" },
    { name: "Ll", path: "/images/partners/ll.png" },
    { name: "Ideally", path: "/images/partners/ideally.png" },
  ];

  // Create duplicate array for seamless infinite scrolling
  const duplicatedPartners = [...partners, ...partners];

  // Refs for animation with proper types
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  // Animation function for smooth scrolling
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const speed = 0.5; // Adjust speed as needed

    const scroll = () => {
      scrollPosition += speed;

      // Reset position to create infinite loop effect
      if (scrollPosition >= scrollContainer.clientWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const LogoItem = ({ partner }: { partner: Partner }) => (
    <div className="flex-shrink-0 w-32 h-16 mx-4 relative flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src={partner.path}
          alt={`${partner.name} logo`}
          fill
          className="object-contain"
          style={{
            filter: filterStyles[filterStyle as keyof typeof filterStyles],
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="pt-12 mt-6 border-t border-gray-800">
      <p className="text-center text-gray-300 text-sm mb-8">
        Trusted by innovative companies worldwide
      </p>

      {/* Marquee container */}
      <div className="overflow-hidden w-full">
        {/* Inner scrolling container */}
        <div
          ref={scrollRef}
          className="flex whitespace-nowrap"
          style={{ width: "fit-content" }}
        >
          {duplicatedPartners.map((partner, index) => (
            <LogoItem key={`${partner.name}-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogosServices;
