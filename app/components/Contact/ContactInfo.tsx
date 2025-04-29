"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

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
      value: "Clan-AP Technologies office, Khanpur – 140301, Punjab, India",
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
      href: "https://www.linkedin.com/company/81815969/admin/dashboard",
      icon: <FaLinkedin size={20} />,
    },
    {
      name: "Twitter",
      href: "https://x.com/ClanapTech",
      icon: <FaXTwitter size={20} />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/clanAPtechnologies",
      icon: <FaFacebook size={20} />,
    },

    {
      name: "Instagram",
      href: "https://www.instagram.com/clanap_technologies/",
      icon: <FaInstagram size={20} />,
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
              href={social.href}
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
          <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
          <p>Saturday - Sunday: Closed</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactInfo;
