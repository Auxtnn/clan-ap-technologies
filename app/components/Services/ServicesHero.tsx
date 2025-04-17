"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const ServiceHero = () => {
  return (
    <section className="pt-32 pb-16 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-grid-pattern" />
        </div>
        
        {/* Abstract shapes */}
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-500/5 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-100 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/10 text-black rounded-full text-sm font-medium">
              Our Expertise
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive QA<br />
            <span className="text-yellow-500">Testing Services</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From automated testing to performance optimization, we deliver the expertise you need to ensure flawless software delivery and exceptional user experiences.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <motion.button
                className="bg-black text-white px-8 py-4 rounded-full font-bold relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get a Free Consultation</span>
                <motion.span 
                  className="absolute inset-0 bg-yellow-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>
            
            <Link href="#services-list">
              <motion.button
                className="border-2 border-black bg-transparent px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Animated service icons */}
        <motion.div
          className="flex justify-center mt-16 gap-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex space-x-12">
            {serviceIcons.map((icon, index) => (
              <motion.div
                key={index}
                className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: index * 0.2
                }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Service icons
const serviceIcons = [
  "🔍", // Automated Testing
  "📱", // Mobile Testing
  "🛡️", // Security Testing
  "⚡", // Performance Testing
  "🔌", // API Testing
  "👁️", // Manual Testing
];

export default ServiceHero;