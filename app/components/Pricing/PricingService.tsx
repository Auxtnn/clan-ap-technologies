import React from "react";
import { PackageCard } from "./PackageCard";

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

export const ServiceSection = ({
  title,
  description,
  packages,
  category,
}: {
  title: string;
  description: string;
  packages: Package[];
  category: string;
}) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
