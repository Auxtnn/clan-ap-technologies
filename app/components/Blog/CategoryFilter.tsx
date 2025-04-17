"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
}

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="mb-12 overflow-x-auto">
      <div className="flex space-x-2 pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
              activeCategory === category.id
                ? "bg-yellow-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
            {activeCategory === category.id && (
              <motion.span
                layoutId="categoryIndicator"
                className="absolute inset-0 rounded-full bg-yellow-500 -z-10"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Mobile dropdown (shown only on small screens) */}
      <div className="mt-4 md:hidden">
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;
