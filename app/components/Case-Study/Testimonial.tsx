"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TestimonialProps {
  quote: any;
}

export const Testimonial: React.FC<TestimonialProps> = ({ quote }) => {
  return (
    <motion.div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 relative">
      <div className="text-5xl text-yellow-500 absolute top-0 left-4 rotate-180">
        "
      </div>
      <blockquote className="relative z-10 text-lg text-gray-700 italic text-center">
        {quote}
      </blockquote>

      <div className="text-5xl text-yellow-500 absolute bottom-0 right-6">
        "
      </div>
    </motion.div>
  );
};
