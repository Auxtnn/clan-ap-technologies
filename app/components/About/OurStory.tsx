"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const OurStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log("Is section in view:", isInView); // Debugging line

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with simpler animation for testing */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 relative rounded-xl overflow-hidden shadow-xl">
              {/* Debugging placeholder - shows if image fails to load */}
              <div className="w-full h-96 bg-gray-200 relative flex items-center justify-center">
                <Image
                  src="/images/about.jpg"
                  alt="ClanAP Technologies founding team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Year overlay */}
              <div className="absolute -bottom-2 -left-2">
                <div className="bg-yellow-500 text-black text-xl md:text-2xl font-bold py-3 px-6 rounded-lg shadow-lg">
                  Est. 2020
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content with simpler animation */}
          <div>
            <div className="mb-6">
              <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium">
                Our Beginning
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              From Startup to Industry Leader
            </h2>

            <div className="space-y-4">
              <p className="text-gray-600">
                ClanAP Technologies began in 2020 when our founder Manpreet
                Bains recognized a critical gap in the software development
                industry: comprehensive quality assurance that could keep pace
                with modern development practices.
              </p>

              <p className="text-gray-600">
                What started as a small team of passionate QA engineers has
                grown into a global operation and a team of professional QA
                specialists. Throughout our journey, we've remained true to our
                founding principle: software quality is non-negotiable.
              </p>

              <p className="text-gray-600">
                Today, we're proud to work with companies ranging from
                innovative startups to Fortune 500 enterprises, helping them
                deliver exceptional software experiences through rigorous
                testing methodologies and cutting-edge QA practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
