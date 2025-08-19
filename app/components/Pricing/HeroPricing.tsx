import React from "react";
import { ArrowRight, Shield, Zap, Target, RefreshCw } from "lucide-react";

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-yellow-50 to-yellow-100 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl pt-16 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Quality-Assured Solutions for{" "}
            <span className="text-yellow-500 relative">
              Every Business Need
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-500 opacity-50"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
            From comprehensive QA testing to full-scale development with{" "}
            <span className="font-semibold text-yellow-600">
              zero-bug guarantee
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
              Get Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
              View All Services
            </button>
          </div>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Zero-Bug Guarantee",
                desc: "Perfect code, guaranteed",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Faster Delivery",
                desc: "No handoff delays",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Single Vendor",
                desc: "One team, one guarantee",
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: "Continuous Quality",
                desc: "Built into every line",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-yellow-500 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
