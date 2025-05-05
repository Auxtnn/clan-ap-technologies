"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Fingerprint,
  Lightbulb,
  Users,
  Zap,
  Target,
} from "lucide-react";

const Values = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const values = [
    {
      title: "Excellence",
      description:
        "We pursue perfection in every test, report, and interaction, setting new standards for quality in everything we do.",
      icon: <Award size={24} />,
      color: "bg-blue-50 text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      title: "Integrity",
      description:
        "We maintain unwavering honesty in our assessments, providing transparent feedback even when it's challenging.",
      icon: <Fingerprint size={24} />,
      color: "bg-purple-50 text-purple-600",
      iconBg: "bg-purple-100",
    },
    {
      title: "Innovation",
      description:
        "We continuously evolve our methods and technologies to stay ahead of emerging testing challenges and opportunities.",
      icon: <Lightbulb size={24} />,
      color: "bg-yellow-50 text-yellow-600",
      iconBg: "bg-yellow-100",
    },
    {
      title: "Collaboration",
      description:
        "We work as an extension of our clients' teams, fostering open communication and mutual success.",
      icon: <Users size={24} />,
      color: "bg-green-50 text-green-600",
      iconBg: "bg-green-100",
    },
    {
      title: "Empowerment",
      description:
        "We invest in our team's growth, equipping them with skills and knowledge to excel in an evolving technological landscape.",
      icon: <Zap size={24} />,
      color: "bg-red-50 text-red-600",
      iconBg: "bg-red-100",
    },
    {
      title: "Client Focus",
      description:
        "We align our efforts with our clients' goals, ensuring our testing strategies drive meaningful business outcomes.",
      icon: <Target size={24} />,
      color: "bg-indigo-50 text-indigo-600",
      iconBg: "bg-indigo-100",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium">
              What Guides Us
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Core Values
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            These fundamental principles guide our actions, decisions, and
            interactions with clients, partners, and each other.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-64 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`p-6 ${value.color} flex-grow`}>
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${value.iconBg} flex items-center justify-center text-2xl mr-4`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
              <div className="h-1 bg-yellow-500 mt-auto" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="text-5xl text-yellow-500 absolute top-0 left-4 rotate-180">
            "
          </div>
          <blockquote className="relative z-10 text-lg text-gray-600 italic text-center">
            At Clan-AP Technologies, our values are not just guiding principles
            — they are embedded in every test we execute, every issue we
            resolve, and every solution we deliver. They form the cornerstone of
            the trust we cultivate with our clients and the integrity we uphold
            within our team.
          </blockquote>
          <div className="text-5xl text-yellow-500 absolute bottom-0 right-6">
            "
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
