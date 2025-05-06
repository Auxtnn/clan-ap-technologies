"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ServiceDetailHeroProps {
  title: string;
  icon: any;
  description: string;
  image: string;
}

const ServiceDetailHero = ({
  title,
  icon,
  description,
  image,
}: ServiceDetailHeroProps) => {
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
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-100 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="mb-6">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2">
                  <li className="inline-flex items-center">
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-yellow-500 text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <Link
                        href="/services"
                        className="text-gray-600 hover:text-yellow-500 text-sm ml-1 md:ml-2"
                      >
                        Services
                      </Link>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-gray-500 ml-1 md:ml-2 text-sm font-medium">
                        {title}
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>

            {/* Icon */}
            <div className="mb-4">
              <div className="w-16 h-16 rounded-full text-yellow-500  bg-yellow-500/10 flex items-center justify-center text-3xl">
                {icon}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8">{description}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  className=" bg-yellow-500 text-white px-8 py-4 rounded-full font-bold relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.span
                    className="absolute inset-0 bg-yellow-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </Link>

              <a href="/case-studies">
                <motion.button
                  className="border-2 border-yellow-500 bg-transparent px-8 py-4 rounded-full font-bold hover:bg-yellow-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Case Studies
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-full rounded-2xl overflow-hidden">
              <div className=" aspect-[4/3] h-full w-full relative">
                <Image
                  src={image}
                  alt={`${title} service illustration`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative elements */}
              {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-yellow-500/10 mix-blend-overlay"></div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
