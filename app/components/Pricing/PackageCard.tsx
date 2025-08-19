import React from "react";
import { CheckCircle, Star } from "lucide-react";

interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  idealFor: string;
  popular?: boolean;
  features: string[];
  perfectFor: string[];
  technologies?: string[];
}

export const PackageCard = ({
  pkg,
  category,
}: {
  pkg: Package;
  category: string;
}) => {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
        pkg.popular ? "ring-4 ring-yellow-500 ring-opacity-50" : ""
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
          <div className="text-3xl font-bold text-yellow-500 mb-2">
            {pkg.price}
          </div>
          <div className="text-gray-600 mb-1">{pkg.duration}</div>
          <div className="text-sm text-gray-500">{pkg.idealFor}</div>
        </div>

        <div className="space-y-4 mb-8">
          <h4 className="font-semibold text-gray-900">What's Included:</h4>
          <ul className="space-y-3">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-3">Perfect For:</h4>
          <ul className="space-y-2">
            {pkg.perfectFor.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 text-sm flex items-center"
              >
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {pkg.technologies && (
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {pkg.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
            pkg.popular
              ? "bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg hover:shadow-xl"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
