"use client";

import { motion } from "framer-motion";

const ContactInfo = () => {
  const contactMethods = [
    {
      title: "Email",
      value: "contact@clanap.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "mailto:contact@clanap.com",
    },
    {
      title: "Phone",
      value: "+91 (781) 432-0230",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      link: "tel:+91781432-0230",
    },
    {
      title: "Head Office",
      value:
        "Clan-AP Technologies, near Omega City, Kharar, Punjab 140301, India",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      link: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://linkedin.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      link: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.008 10.008 0 01-3.127 1.184c-.899-.959-2.18-1.559-3.594-1.559-2.719 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.122-4.092-.207-7.72-2.166-10.149-5.145C1.214 3.818.977 4.681.977 5.6c0 1.71.87 3.217 2.189 4.102-.807-.025-1.566-.248-2.228-.616v.062c0 2.386 1.697 4.376 3.95 4.827-.413.112-.85.171-1.297.171-.317 0-.625-.03-.927-.08a4.935 4.935 0 004.604 3.417c-1.687 1.32-3.813 2.105-6.115 2.105-.398 0-.79-.022-1.175-.069a13.95 13.95 0 007.548 2.212c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637a10.013 10.013 0 002.45-2.550L24 4.59l-.047-.02z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      link: "https://github.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.162 6.839 9.488.5.092.682-.217.682-.481 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.909-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.548 1.377.204 2.394.1 2.647.64.699 1.028 1.593 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.917.678 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.18.577.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.link}
            target={method.title === "Head Office" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex items-start hover:text-yellow-500 transition-colors duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-white p-3 rounded-full shadow-sm mr-4">
              <div className="text-yellow-500">{method.icon}</div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{method.title}</h3>
              <p className="text-gray-600">{method.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-medium text-gray-900 mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-sm text-gray-600 hover:text-yellow-500 hover:shadow-md transition-all duration-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-medium text-gray-900 mb-4">Business Hours</h3>
        <motion.div
          className="text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
          <p>Saturday - Sunday: Closed</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactInfo;
