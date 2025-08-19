"use client";

import React from "react";
import { Smartphone, TrendingUp, Lock, Bot, BarChart3 } from "lucide-react";
interface AddonService {
  icon: React.ReactNode;
  name: string;
  price: string;
  description: string;
}

export const AddonServices = () => {
  const addons: AddonService[] = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      name: "Performance Optimization",
      price: "$2,500 - $8,000",
      description:
        "Speed optimization, caching implementation, database tuning",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      name: "Security Audit",
      price: "$3,500 - $12,000",
      description:
        "Penetration testing, vulnerability assessment, security hardening",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      name: "Automation Setup",
      price: "$4,000 - $15,000",
      description: "CI/CD pipeline, automated testing, deployment automation",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      name: "Mobile App Optimization",
      price: "$2,000 - $6,000",
      description: "App store optimization, performance tuning, UX enhancement",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      name: "Conversion Optimization",
      price: "$3,000 - $10,000",
      description:
        "A/B testing, user journey optimization, conversion funnel analysis",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Add-On Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your project with our specialized services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {addons.map((addon, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-yellow-500 mb-4">{addon.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {addon.name}
              </h3>
              <div className="text-lg font-semibold text-yellow-500 mb-3">
                {addon.price}
              </div>
              <p className="text-gray-600">{addon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
