"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Define partner interface
interface Partner {
  name: string;
  path: string;
}

const PartnerLogos = () => {
  // Combine all logos into a single array
  const partners: Partner[] = [
    { name: "Analyst", path: "/images/partners/analyst.png" },
    { name: "Joules", path: "/images/partners/joules.png" },
    { name: "Scaura", path: "/images/partners/scaura.png" },
    { name: "Bittewallet", path: "/images/partners/bittewallet.png" },
    { name: "Cinelytic", path: "/images/partners/cinelytic.png" },
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

  // Each logo item with properly typed props
  const LogoItem = ({ partner }: { partner: Partner }) => (
    <div className="flex-shrink-0 w-32 h-16 mx-4 relative flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src={partner.path}
          alt={`${partner.name} logo`}
          fill
          className="object-contain"
          // Apply grayscale filter
          style={{
            filter: "grayscale(100%) brightness(0.4)",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="pt-12 mt-6 border-t border-gray-100">
      <p className="text-center text-gray-500 text-sm mb-8">
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

export default PartnerLogos;
