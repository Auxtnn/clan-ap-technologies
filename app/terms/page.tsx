"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfService() {
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
                        Terms of Service
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
              <p className="text-yellow-500">Terms of Service</p>
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
      <div className="container mx-auto lg:w-11/12 px-4 py-12">
        <div className=" mx-auto">
          <div className="bg-white shadow-sm rounded-xl p-6 md:p-10 mb-8">
            <p className="text-gray-700 mb-6">
              Welcome to Clan-AP Technologies ("we", "our", or "us"). These
              Terms of Service ("Terms") govern your access to and use of our
              website and quality assurance (QA) services provided via
              [www.clanap.com] (the "Site"). By using our services, you agree to
              be bound by these Terms and all applicable laws.
            </p>

            {/* Content */}
            <div>
              <section id="section-1" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    1
                  </span>
                  Use of Services
                </h2>
                <p className="text-gray-700">
                  You agree to use our services only for lawful purposes and in
                  accordance with applicable laws and regulations of the
                  Republic of India. Misuse, unauthorized access, or reverse
                  engineering of our tools, content, or systems is strictly
                  prohibited.
                </p>
              </section>

              <section id="section-2" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    2
                  </span>
                  Scope of Services
                </h2>
                <p className="text-gray-700 mb-4">
                  Clan-AP Technologies offers a range of QA services including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Manual & Automated Testing</li>
                  <li>API & Performance Testing</li>
                  <li>Mobile, Desktop & Web Application Testing</li>
                  <li>Test Framework Setup</li>
                  <li>Continuous Testing Integration</li>
                </ul>
                <p className="text-gray-700">
                  We may modify or discontinue services at any time, with or
                  without notice.
                </p>
              </section>

              <section id="section-3" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    3
                  </span>
                  Confidentiality & Data Security
                </h2>
                <p className="text-gray-700">
                  All client data and project-specific information shared with
                  us will be kept strictly confidential. We follow internal data
                  protection protocols, and if required, execute NDAs to ensure
                  confidentiality.
                </p>
              </section>

              <section id="section-4" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    4
                  </span>
                  Client Responsibilities
                </h2>
                <p className="text-gray-700">
                  Clients must provide clear project briefs, system access, test
                  credentials, and timely communication. Delays in providing
                  required information or approvals may affect timelines and
                  deliverables.
                </p>
              </section>

              <section id="section-5" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    5
                  </span>
                  Payment Terms
                </h2>
                <p className="text-gray-700 mb-4">
                  Payments must be made as per mutually agreed terms, either
                  through milestone billing or periodic invoicing. All payments
                  must be made in INR or USD, as applicable. Taxes and charges
                  imposed under Indian law (like GST) will be applicable where
                  required.
                </p>
                <p className="text-gray-700">
                  Late payments may attract interest or temporary suspension of
                  services.
                </p>
              </section>

              <section id="section-6" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    6
                  </span>
                  Intellectual Property
                </h2>
                <p className="text-gray-700">
                  All testing outputs, reports, and documentation created by
                  Clan-AP Technologies during the engagement shall remain the
                  intellectual property of the client upon full payment. We
                  retain no ownership of client data, code, or content.
                </p>
              </section>

              <section id="section-7" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    7
                  </span>
                  Limitation of Liability
                </h2>
                <p className="text-gray-700">
                  Clan-AP Technologies will not be liable for any indirect,
                  incidental, or consequential losses. Our total liability is
                  limited to the amount paid for the services rendered during
                  the engagement period.
                </p>
              </section>

              <section id="section-8" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    8
                  </span>
                  Termination
                </h2>
                <p className="text-gray-700">
                  Either party may terminate the engagement by providing written
                  notice. Upon termination, the client is liable for payment of
                  work completed up to the termination date. Any pending
                  deliverables will be handed over post-payment.
                </p>
              </section>

              <section id="section-9" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    9
                  </span>
                  Governing Law & Jurisdiction
                </h2>
                <p className="text-gray-700">
                  These Terms shall be governed by and construed in accordance
                  with the laws of India. Any disputes arising from or in
                  connection with these Terms or our services shall be subject
                  to the exclusive jurisdiction of the courts of Mohali, Punjab,
                  India.
                </p>
              </section>

              <section id="section-10" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    10
                  </span>
                  Modifications to Terms
                </h2>
                <p className="text-gray-700">
                  We reserve the right to amend or update these Terms at our
                  discretion. Continued use of our services following any
                  changes will constitute acceptance of those changes.
                </p>
              </section>

              <section id="section-11" className="mb-8 scroll-mt-20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-700 flex items-center justify-center mr-3 text-sm">
                    11
                  </span>
                  Contact Information
                </h2>
                <p className="text-gray-700 mb-4">
                  For questions or concerns regarding these Terms, please
                  contact:
                </p>
                <div className="bg-gray-50 p-5 rounded-lg">
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
                    <span className="text-xl mr-3">📍</span>
                    <div>
                      <p className="text-gray-700">
                        Clan-AP Technologies office, Khanpur – 140301, Punjab,
                        India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
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
                </div>
              </section>
            </div>
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
  );
}
