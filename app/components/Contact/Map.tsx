"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Map = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-12 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Our Location</h2>
          <p className="text-gray-600">
            Visit our office or connect with us remotely. We're here to help
            with your QA testing needs.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full h-[500px] relative shadow-xl"
      >
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13714.511282025527!2d76.6004872423495!3d30.75695423394772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb6c8296b563%3A0xd516ea8f77e9fc5d!2sClan-AP%20Technologies!5e0!3m2!1sen!2sng!4v1744885738672!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter contrast-[1.1] brightness-[1.05]"
          ></iframe>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="bg-white rounded-lg shadow-lg p-6 -mt-20 relative z-10 max-w-lg mx-auto border border-gray-100">
          <h3 className="text-xl font-bold mb-2">Chandigarh Office</h3>
          <p className="text-gray-700 mb-4">
            SCO 167-168, Sector 9-C, Madhya Marg
            <br />
            Chandigarh, India 160009
          </p>
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>+91 1234 567890</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
