"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    title: "QA Mastery",
    description:
      "Years of expertise in quality assurance methodologies and best practices.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
  },
  {
    title: "Cost Efficiency",
    description:
      "Reduce development costs by identifying issues early in the development cycle.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    title: "QA Craftmanship",
    description:
      "Meticulous attention to detail and dedication to software excellence.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    title: "Automation Excellence",
    description:
      "Cutting-edge automated testing frameworks that ensure consistent, reliable results.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
  },
  {
    title: "Transparency Insights",
    description:
      "Clear reporting and metrics that provide visibility into your product's quality.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    title: "Resilience Assurance",
    description:
      "Guarantee that your software can withstand real-world stress and edge cases.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDg4IDUwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjM0LDE3OSw4LDAuMTUpIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTQ0IDhsMS0uMzMzVjAiLz48cGF0aCBkPSJNNDQgMTZ2LThsLTkuMDYzLTVMNDQgOE0zNC45MzggMi45NDdMMjYgOGw4LjkzOCA1LjA1M00yNiA4djEwbDguOTM4IDUuMDUzTTM0LjkzOCAyMy4wNTNMNDQgMTh2LTIiLz48cGF0aCBkPSJNMzQuOTM4IDIzLjA1M0wzNCAyMy4zM0wxNiA0MC42N2wxIC4zMzNMMzQgMjMuMzM0IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMzQgMjMuMzM0djE2LjY2N0w0NCA0NSIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTI2IDE4bC0uOTM4LjU0TDkgNGwtLjA2Mi0uMDdMMjYgMTh6TTkgNHYxMEwxNyAxOGw5LTUuMDEgOC45MzgtNS4wNDNMMjYgM3Y1eiIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTE3IDE4djEwbDgtNS4wMTIiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0yNSAyM2wxLjA2Mi0uNjI2TDQ0IDMydi0uMDAxTDI1IDIzek00NCAzMnYxMGwtMTAgNS41TDI1IDQyLjY2NlYzMy4wMkw0NCAzMnoiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0zNCAwdjIuOThMMjYgM3Y1bC05LjA2MiA1LjA0LTkgNC45NkwwIDE0VjRoLS4wMzJMOSA0TTAgMTRsMTYgOS0xLjAzMi42TDAgMTRNMTYgMjN2MTBsLTE2LTlNMTYgMzN2MTBsOSA1LjAwMk0yNSA0M3Y1bDkuMDYyLTUuMDAyTTM0IDQ4djJsOS41LTUuNTAyTDQ0IDQydi0uMDAxTTQ0IDMydi0uMDAxTDQ1IDMyVjQyTDQ0IDQyLjcxIi8+PHBhdGggZD0iTTQ1IDQybDE2LjA5My05LjAwMUw2MiAzM3YxMGwtMTcgOS40OThWNDh6IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNDQuOTM4IDhoLjEyNEw1NCAzLjExOFYzTDQ1IDh6TTU0IDN2MTBsLTkuMDYzIDUiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik00NC45MzggMThsOS4wNjItNUw1NCAxM3YtLjA0MUw2MiA4di0uMDAxTDU0IDN2LjAwMXpNNjIgOHYxMGwtOC45MzggNS4wNTNNNTMuMDYzIDIzLjA1M0w0NSAyOGwtMSA0Ljc1TTQ1IDMyaC4wMzFMNjIgMjMiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik01My4wNjMgMjMuMDUzbC4wMyAyLjE4NyA3Ljg3Ni00LjI5NC4wMy0xLjg5My03LjkzNiAzLjk5OXpNNjEgMjB2MTMiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik04MyAxNHYtLjAxMkw3MyAzLjk4OCIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTczIDR2MTBsOSA1LjQxIiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNODIgMTl2MTBsLTggNC0uMDYzLjA3LTggNC41ODYtLjAzLS42NTYiIHN0cm9rZS1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik02NSAzM2wtLjA2My0uMzU0TDgyIDE5IiBzdHJva2Utb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNjUgMzNsLjA2My4zNTQtLjEyNS0uMzc3VjMzbC0zLS4wMjN2MTBsLTE3LjAzMiA5Ljk5OCIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PC9nPjwvc3ZnPg==')]"
    >
      <div className="container mx-auto px-4 lg:w-11/12">
        {/* Section header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.span
            className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
          >
            Our Advantages
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Our approach to quality assurance sets us apart and delivers
            exceptional results for our clients.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex items-start p-5 rounded-lg bg-white border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="rounded-full p-2 bg-yellow-500/10 text-yellow-500 mr-4 flex-shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
