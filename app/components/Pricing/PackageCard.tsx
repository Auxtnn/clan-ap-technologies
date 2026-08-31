"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import Link from "next/link";

interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  idealFor: string;
  popular?: boolean;
  features: string[];
  perfectFor: string[];
  technologies?: string[];
}

export const PackageCard = ({
  pkg,
  index,
  inView,
}: {
  pkg: Package;
  index: number;
  inView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: 0.1 + index * 0.1,
        type: "spring",
        stiffness: 90,
      }}
      className={`group relative bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
        pkg.popular
          ? "border-yellow-500/60 shadow-yellow-500/10"
          : "border-gray-100 hover:border-yellow-500/30"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-yellow-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {pkg.popular && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-500" />
      )}

      {pkg.popular && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
            <Star className="w-3 h-3" />
            Most Popular
          </span>
        </div>
      )}

      <motion.div
        className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-yellow-500/10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      />

      <div className="p-7">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-black mb-1 group-hover:text-yellow-500 transition-colors duration-300">
            {pkg.name}
          </h3>
          <p className="text-gray-500 text-sm">{pkg.idealFor}</p>
        </div>

        <div className="mb-6">
          <div className="text-4xl font-black text-black mb-1">{pkg.price}</div>
          <div className="text-gray-500 text-sm">{pkg.duration}</div>
        </div>

        <div className="w-full h-px bg-gray-100 mb-6" />

        <div className="space-y-3 mb-6">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            What&apos;s Included
          </p>
          <ul className="space-y-2.5">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 mb-6">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Perfect For
          </p>
          <ul className="space-y-1.5">
            {pkg.perfectFor.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-600 text-sm"
              >
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {pkg.technologies && (
          <div className="space-y-3 mb-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {pkg.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 bg-yellow-500/10 rounded-full text-yellow-600 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <Link
          href="https://calendly.com/manpreetbains_clan-ap_technologies/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
              pkg.popular
                ? "bg-yellow-500 text-black hover:bg-black hover:text-white"
                : "border-2 border-black bg-transparent text-black hover:bg-black hover:text-white"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
        </Link>
      </div>

      <div className="absolute bottom-0 left-[10%] right-[10%] h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
};
