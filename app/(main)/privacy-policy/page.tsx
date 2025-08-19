"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-2 bg-white relative overflow-hidden">
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
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="mb-6">
              <nav className="flex justify-center" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2">
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
                        Privacy Policy
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>

            <motion.div
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Clan-AP Technologies{" "}
              <p className="text-yellow-500">Privacy Policy</p>
            </motion.div>

            <motion.div
              className="text-sm text-gray-600 mb-8 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span>Effective Date: August 2020</span>

              <span>Company: Clan-AP Technologies (Registered in India)</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container lg:w-11/12 mx-auto px-4 py-12">
        <div className=" mx-auto">
          <div className="bg-white shadow-sm rounded-xl p-6 md:p-10 mb-8">
            <p className="text-gray-700 mb-6">
              At Clan-AP Technologies, we are committed to protecting the
              privacy of our clients, users, and visitors. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you engage with our website and QA services.
            </p>

            <p className="text-gray-700 mb-8">
              By using our services, you consent to the data practices described
              in this policy.
            </p>

            {/* Content */}
            <div>
              <section id="section-1" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    1
                  </span>
                  Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, email, phone
                    number, billing address, company name.
                  </li>
                  <li>
                    <strong>Project Information:</strong> Access credentials,
                    system architecture details, API documentation, test data.
                  </li>
                  <li>
                    <strong>Usage Information:</strong> Website activity, IP
                    address, browser type, and other technical data.
                  </li>
                </ul>
              </section>

              <section id="section-2" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    2
                  </span>
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the collected data to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Provide, operate, and maintain our QA services.</li>
                  <li>
                    Communicate regarding project status, proposals, and
                    invoices.
                  </li>
                  <li>Improve our website and customer experience.</li>
                  <li>Comply with legal obligations and industry standards.</li>
                </ul>
              </section>

              <section id="section-3" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    3
                  </span>
                  Confidentiality of Client Data
                </h2>
                <p className="text-gray-700">
                  All data, credentials, and application-related materials
                  shared with us for testing purposes are treated as strictly
                  confidential. We do not use or share this data outside the
                  scope of the agreed engagement. Data access is restricted to
                  authorized personnel only.
                </p>
              </section>

              <section id="section-4" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    4
                  </span>
                  Data Sharing and Disclosure
                </h2>
                <p className="text-gray-700 mb-4">
                  We do not sell or rent your personal or project information to
                  third parties. Information may only be shared under the
                  following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>With your explicit consent.</li>
                  <li>With subcontractors under signed NDAs.</li>
                  <li>
                    To comply with legal obligations or regulatory requirements.
                  </li>
                  <li>To enforce our Terms of Service.</li>
                </ul>
              </section>

              <section id="section-5" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    5
                  </span>
                  Data Storage & Security
                </h2>
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security practices to protect
                  your data from unauthorized access, alteration, disclosure, or
                  destruction. These include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Encrypted communication via HTTPS.</li>
                  <li>Restricted internal access control.</li>
                  <li>
                    Secure storage of credentials during test execution (where
                    applicable).
                  </li>
                </ul>
              </section>

              <section id="section-6" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    6
                  </span>
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700">
                  Our website may use cookies to enhance your browsing
                  experience, analyze traffic, and understand visitor behavior.
                  You can control cookie preferences through your browser
                  settings.
                </p>
              </section>

              <section id="section-7" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    7
                  </span>
                  Data Retention
                </h2>
                <p className="text-gray-700">
                  We retain client data only for as long as necessary to fulfill
                  the intended purpose or as required by law. Upon project
                  completion, sensitive data may be securely deleted upon
                  written request.
                </p>
              </section>

              <section id="section-8" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    8
                  </span>
                  Your Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  Depending on your jurisdiction, you may have rights to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Access, correct, or delete your data.</li>
                  <li>Withdraw consent at any time.</li>
                  <li>Request data portability or restrict processing.</li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, please contact us at
                  contact@clanap.com.
                </p>
              </section>

              <section id="section-9" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    9
                  </span>
                  International Transfers
                </h2>
                <p className="text-gray-700">
                  If you are accessing our services from outside India, please
                  note that your data may be transferred to and stored on
                  servers in India or other countries where our partners or
                  tools operate.
                </p>
              </section>

              <section id="section-10" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    10
                  </span>
                  Changes to This Policy
                </h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy periodically. The revised
                  version will be posted on our website with the updated
                  "Effective Date." Continued use of our services after changes
                  signifies acceptance of the updated policy.
                </p>
              </section>

              <section id="section-11" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    11
                  </span>
                  Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have questions or concerns about this Privacy Policy or
                  our data practices, please reach out to:
                </p>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="mb-2">Clan-AP Technologies</div>
                  <div className="flex items-start mb-3">
                    <span className="text-xl mr-3">📍</span>
                    <div>
                      <p className="text-gray-700">
                        Clan-AP Technologies office, Khanpur – 140301, Punjab,
                        India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mb-3">
                    <span className="text-xl mr-3">📧</span>
                    <div>
                      <a
                        href="mailto:contact@clanap.com"
                        className="text-yellow-600 hover:text-yellow-700"
                      >
                        contact@clanap.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start mb-3">
                    <span className="text-xl mr-3">📞</span>
                    <div>
                      <a
                        href="tel:+917814320230"
                        className="text-yellow-600 hover:text-yellow-700"
                      >
                        +91 78143 20230
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl mr-3">🌐</span>
                    <div>
                      <a
                        href="https://www.clanap.com"
                        className="text-yellow-600 hover:text-yellow-700"
                      >
                        www.clanap.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Last Updated & Print */}
          <div className="flex justify-between items-center mb-16">
            <p className="text-sm text-gray-500">Last updated: April 2025</p>
            <button
              onClick={() => window.print()}
              className="flex items-center text-sm text-gray-600 hover:text-yellow-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                  clipRule="evenodd"
                />
              </svg>
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
