"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

interface RelatedService {
  title: string;
  description: string;
  icon: any;
  link: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

const RelatedServices = ({ services }: RelatedServicesProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      className="py-20 bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDg4IDUwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjM0LDE3OSw4LDAuMTUpIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTQ0IDhsMS0uMzMzVjAiLz48cGF0aCBkPSJNNDQgMTZ2LThsLTkuMDYzLTVMNDQgOE0zNC45MzggMi45NDdMMjYgOGw4LjkzOCA1LjA1M00yNiA4djEwbDguOTM4IDUuMDUzTTM0LjkzOCAyMy4wNTNMNDQgMTh2LTIiLz48cGF0aCBkPSJNMzQuOTM4IDIzLjA1M0wzNCAyMy4zM0wxNiA0MC42N2wxIC4zMzNMMzQgMjMuMzM0IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMzQgMjMuMzM0djE2LjY2N0w0NCA0NSIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTI2IDE4bC0uOTM4LjU0TDkgNGwtLjA2Mi0uMDdMMjYgMTh6TTkgNHYxMEwxNyAxOGw5LTUuMDEgOC45MzgtNS4wNDNMMjYgM3Y1eiIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTE3IDE4djEwbDgtNS4wMTIiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0yNSAyM2wxLjA2Mi0uNjI2TDQ0IDMydi0uMDAxTDI1IDIzek00NCAzMnYxMGwtMTAgNS41TDI1IDQyLjY2NlYzMy4wMkw0NCAzMnoiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0zNCAwdjIuOThMMjYgM3Y1bC05LjA2MiA1LjA0LTkgNC45NkwwIDE0VjRoLS4wMzJMOSA0TTAgMTRsMTYgOS0xLjAzMi42TDAgMTRNMTYgMjN2MTBsLTE2LTlNMTYgMzN2MTBsOSA1LjAwMk0yNSA0M3Y1bDkuMDYyLTUuMDAyTTM0IDQ4djJsOS41LTUuNTAyTDQ0IDQydi0uMDAxTTQ0IDMydi0uMDAxTDQ1IDMyVjQyTDQ0IDQyLjcxIi8+PHBhdGggZD0iTTQ1IDQybDE2LjA5My05LjAwMUw2MiAzM3YxMGwtMTcgOS40OThWNDh6IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNDQuOTM4IDhoLjEyNEw1NCAzLjExOFYzTDQ1IDh6TTU0IDN2MTBsLTkuMDYzIDUiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik00NC45MzggMThsOS4wNjItNUw1NCAxM3YtLjA0MUw2MiA4di0uMDAxTDU0IDN2LjAwMXpNNjIgOHYxMGwtOC45MzggNS4wNTNNNTMuMDYzIDIzLjA1M0w0NSAyOGwtMSA0Ljc1TTQ1IDMyaC4wMzFMNjIgMjMiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik01My4wNjMgMjMuMDUzbC4wMyAyLjE4NyA3Ljg3Ni00LjI5NC4wMy0xLjg5My03LjkzNiAzLjk5OXpNNjEgMjB2MTMiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik04MyAxNHYtLjAxMkw3MyAzLjk4OCIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTczIDR2MTBsOSA1LjQxIiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNODIgMTl2MTBsLTggNC0uMDYzLjA3LTggNC41ODYtLjAzLS42NTYiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik02NSAzM2wtLjA2My0uMzU0TDgyIDE5IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNjUgMzNsLjA2My4zNTQtLjEyNS0uMzc3VjMzbC0zLS4wMjN2MTBsLTE3LjAzMiA5Ljk5OCIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PC9nPjwvc3ZnPg==')]"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 lg:w-11/12">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium mb-4">
              Explore More
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Related Services
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our other services that complement this offering for a
            comprehensive QA strategy.
          </motion.p>
        </div>

        {/* Related services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
              }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center text-2xl mb-4">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {service.description}
              </p>

              {/* Link */}
              <Link href={service.link} className="mt-auto">
                <div className="inline-flex items-center text-black font-medium hover:text-yellow-500 transition-colors duration-300">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
