import React from "react";
import { Phone, Mail, Calendar } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Let's discuss your project and find the perfect solution for your
          business needs
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <Phone className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Free Consultation
            </h3>
            <p className="text-gray-300 mb-4">30-minute strategy call</p>
            <button className="text-yellow-500 hover:text-yellow-400 font-semibold">
              Schedule Call
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <Mail className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Custom Quote</h3>
            <p className="text-gray-300 mb-4">
              Tailored pricing for your needs
            </p>
            <button className="text-yellow-500 hover:text-yellow-400 font-semibold">
              Get Quote
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <Calendar className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Portfolio Review
            </h3>
            <p className="text-gray-300 mb-4">See our work and testimonials</p>
            <button className="text-yellow-500 hover:text-yellow-400 font-semibold">
              View Portfolio
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Project Today
          </button>
          <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
