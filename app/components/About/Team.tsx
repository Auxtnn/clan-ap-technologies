"use client";

import { JSX, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const OurTeam = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const toggleMemberDetails = (member: TeamMember | null) => {
    setSelectedMember(member);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 bg-yellow-500/20 text-black rounded-full text-sm font-medium">
              Meet Our Experts
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Leadership Team
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our leadership brings decades of combined experience in quality
            assurance, software development, and business strategy.
          </motion.p>
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
              }}
              onClick={() => toggleMemberDetails(member)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                {/* Image */}
                <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                  <div className="w-full h-64 bg-gray-200 relative">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-lg font-bold">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                  <div className="flex space-x-3">
                    {member.socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team overview stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + index * 0.1,
              }}
            >
              <div className="text-3xl font-bold text-yellow-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member details modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleMemberDetails(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start">
                  {/* Image */}
                  <div className="w-24 h-24 rounded-full bg-gray-200 relative overflow-hidden mr-6 flex-shrink-0">
                    {selectedMember.image ? (
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-lg font-bold">
                          {selectedMember.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-xl">
                          {selectedMember.name}
                        </h3>
                        <p className="text-gray-500">{selectedMember.role}</p>
                      </div>

                      <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => toggleMemberDetails(null)}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex space-x-3 my-3">
                      {selectedMember.socialLinks.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-yellow-500 transition-colors"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-2">About</h4>
                  <p className="text-gray-600 mb-4">{selectedMember.bio}</p>

                  {selectedMember.expertise && (
                    <>
                      <h4 className="font-semibold text-lg mb-2">Expertise</h4>
                      <ul className="list-disc pl-5 text-gray-600 mb-4">
                        {selectedMember.expertise.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Team member data
interface SocialLink {
  platform: string;
  url: string;
  icon: JSX.Element;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  location: string;
  education?: string[];
  expertise?: string[];
  socialLinks: SocialLink[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Manpreet Bains",
    role: "Founder & CEO",
    image: "/images/team.jpg",
    location: "Chandigarh, India",
    bio: "Manpreet founded ClanAP Technologies after working as a Senior Software Engineer at Bebo Technologies. With extensive experience in software development and quality assurance, he leads the company's technical direction and overall business strategy.",
    education: [
      "Post Graduate Diploma in Computer Applications, Panjab University, Chandigarh (2019-2020)",
      "Bachelor of Engineering in Computer Engineering (2008-2012)",
    ],
    expertise: [
      "Software Quality Assurance",
      "Test Automation Frameworks",
      "Software Development",
      "QA Leadership",
    ],
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ),
      },
      {
        platform: "Twitter",
        url: "https://twitter.com",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.008 10.008 0 01-3.127 1.184c-.899-.959-2.18-1.559-3.594-1.559-2.719 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.122-4.092-.207-7.72-2.166-10.149-5.145C1.214 3.818.977 4.681.977 5.6c0 1.71.87 3.217 2.189 4.102-.807-.025-1.566-.248-2.228-.616v.062c0 2.386 1.697 4.376 3.95 4.827-.413.112-.85.171-1.297.171-.317 0-.625-.03-.927-.08a4.935 4.935 0 004.604 3.417c-1.687 1.32-3.813 2.105-6.115 2.105-.398 0-.79-.022-1.175-.069a13.95 13.95 0 007.548 2.212c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637a10.013 10.013 0 002.45-2.550L24 4.59l-.047-.02z" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Arshdeep Kaur",
    role: "Co-Founder",
    image: "/images/team.jpg",
    location: "Chandigarh, India",
    bio: "Arshdeep co-founded ClanAP Technologies and brings strong expertise in software engineering and quality assurance. With her background in Computer Engineering from Panjab University, she helps drive innovation and technical excellence across the company.",
    education: [
      "Bachelor of Engineering in Computer Engineering, Panjab University (2008-2012)",
    ],
    expertise: [
      "Software Engineering",
      "Quality Assurance Strategy",
      "Technical Leadership",
      "Product Development",
    ],
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Vinay Kumar",
    role: "Software QA Engineer",
    image: "/images/team.jpg",
    location: "Bijnor, UP, India",
    bio: "Vinay brings extensive knowledge in software quality assurance with his Master's in Computer Applications. He specializes in implementing robust testing methodologies and automation frameworks to ensure exceptional software quality.",
    education: [
      "Master of Computer Applications, DEWAN V S Institute of Engineering and Technology, Meerut (2019-2022)",
      "BCA in Computer Applications, CCS University (2016-2019)",
    ],
    expertise: [
      "Test Automation",
      "Manual Testing",
      "Test Case Development",
      "Defect Tracking",
    ],
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Harshpreet Singh",
    role: "Quality Assurance Engineer",
    image: "/images/team.jpg",
    location: "Ambala, HR, India",
    bio: "Harshpreet is a skilled QA Engineer with expertise in ensuring software quality. With his degree in Computer Science, he focuses on identifying defects, implementing test automation, and contributing to the overall quality assurance process.",
    education: [
      "Bachelor's of Computer Applications in Computer Science, Shri Atmanand Jain Institute of Management and Technology (2020-2023)",
    ],
    expertise: [
      "Functional Testing",
      "Regression Testing",
      "Test Planning",
      "Quality Assurance",
    ],
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ),
      },
    ],
  },
];

// Team stats
const teamStats = [
  { value: "8+", label: "Team Members" },
  { value: "1", label: "Global Office" },
  { value: "4+", label: "States in India" },
  { value: "3+", label: "Languages Spoken" },
];

export default OurTeam;
