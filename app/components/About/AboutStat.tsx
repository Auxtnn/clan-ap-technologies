"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// Import icons from Lucide React
import {
  Award,
  Rocket,
  Globe,
  Wrench,
  Users,
  Smartphone,
  Timer,
  Handshake,
} from "lucide-react";
import React from "react";

const Achievements = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, {
    once: true,
    amount: 0.2,
  });

  const achievements = [
    {
      title: "Top Rated Plus on Upwork – Agency & Freelancer",
      description:
        "Both our agency and founder, Manpreet Bains, hold Top Rated Plus status on Upwork, a recognition earned through consistent delivery, long-term client relationships, and high satisfaction ratings.",
      icon: Award,
    },
    {
      title: "Successfully Delivered 100+ QA Projects Across Industries",
      description:
        "Delivered full-cycle manual and automation testing for clients in HealthTech, FinTech, SaaS, and E-commerce domains across multiple platforms.",
      icon: Rocket,
    },
    {
      title: "Global Client Footprint",
      description:
        "Trusted by clients across the US, UK, Canada, and Europe for high-quality QA processes and reliable team engagement models.",
      icon: Globe,
    },
    {
      title: "Expertise in Modern Automation Tools",
      description:
        "Built and maintained robust automation frameworks using Playwright, Cypress, WebdriverIO, and API tools like Postman, tailored to both agile startups and mature enterprises.",
      icon: Wrench,
    },
    {
      title: "Team of 10+ Skilled QA Engineers",
      description:
        "Scaled into a QA-driven company with a dedicated in-house team offering manual, automation, API, and performance testing, enabling parallel execution and faster delivery cycles.",
      icon: Users,
    },
    {
      title: "End-to-End QA Ownership for Web & Mobile Projects",
      description:
        "Provided complete QA ownership from requirement analysis and test strategy to test execution, bug reporting, and CI/CD integration.",
      icon: Smartphone,
    },
    {
      title: "Optimized Test Execution with CI Tools",
      description:
        "Leveraged tools like GitHub Actions, CircleCI, and AWS to automate over 2500 test cases in staging and pre-live environments, reducing regression cycles and boosting deployment confidence.",
      icon: Timer,
    },
    {
      title: "Client-Centric Communication & Transparent Delivery",
      description:
        "Maintained clear sprint-based reporting, collaborative workflows, and proactive QA support aligned with agile development processes.",
      icon: Handshake,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="md:pt-20 md:pb-20 pt-14 pb-10 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-grid-pattern" />
        </div>

        {/* Abstract shapes */}
        <motion.div
          className="absolute top-40 left-10 w-56 h-56 rounded-full bg-yellow-500/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium">
              Recognition
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Clan-AP Technologies – Key Achievements
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Driving excellence in QA services through global delivery, advanced
            automation, and client-focused solutions
          </motion.p>
        </div>

        {/* Achievements timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 hidden md:block" />

          <div className="space-y-12 relative">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.3,
                  delay: 0.3 + index * 0.1,
                }}
              >
                {/* For desktop view - alternating sides */}
                <div className="hidden md:flex items-center">
                  {index % 2 === 0 ? (
                    <>
                      {/* Empty space on left for even indexes (right-side content) */}
                      <div className="w-1/2"></div>

                      {/* Center node */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-yellow-500 border-4 border-white shadow"></div>
                      </div>

                      {/* Content on right */}
                      <div className="w-1/2 pl-12">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                          <div className="flex items-center mb-4">
                            <div className="text-yellow-500 mr-4 bg-yellow-500/20 rounded-full p-2">
                              {React.createElement(achievement.icon, {
                                size: 24,
                                className: "stroke-2",
                              })}
                            </div>
                            <div>
                              <h3 className="font-bold text-xl">
                                {achievement.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content on left */}
                      <div className="w-1/2 pr-12 text-right">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 ml-auto">
                          <div className="flex items-center justify-end mb-4">
                            <div>
                              <h3 className="font-bold text-xl">
                                {achievement.title}
                              </h3>
                            </div>
                            <div className="text-yellow-500 ml-4 bg-yellow-500/20 rounded-full p-2">
                              {React.createElement(achievement.icon, {
                                size: 24,
                                className: "stroke-2",
                              })}
                            </div>
                          </div>
                          <p className="text-gray-600">
                            {achievement.description}
                          </p>
                        </div>
                      </div>

                      {/* Center node */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-yellow-500 border-4 border-white shadow"></div>
                      </div>

                      {/* Empty space on right */}
                      <div className="w-1/2"></div>
                    </>
                  )}
                </div>

                {/* For mobile view - stacked */}
                <div className="flex md:hidden items-start">
                  {/* Left timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-yellow-500 border-4 border-white shadow"></div>
                    {index < achievements.length - 1 && (
                      <div className="w-1 h-24 bg-gray-100"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="ml-6 bg-white rounded-xl shadow-sm p-5 border border-gray-100 flex-grow">
                    <div className="flex items-center mb-2">
                      <h3 className="font-bold text-lg">{achievement.title}</h3>
                      <div className="text-yellow-500 ml-2 bg-yellow-500/20 rounded-full p-2">
                        {React.createElement(achievement.icon, {
                          size: 20,
                          className: "stroke-2",
                        })}
                      </div>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16" ref={statsRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.05,
                }}
              >
                <div className="absolute -right-5 -top-5 w-20 h-20 bg-yellow-500/10 rounded-full"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats data
const stats = [
  { value: "75+", label: "Projects Completed" },
  { value: "10+", label: "Skilled QA Engineers" },
  { value: "25000+", label: "Test Cases Automated" },
  { value: "4", label: "Global Regions Served" },
];

export default Achievements;
