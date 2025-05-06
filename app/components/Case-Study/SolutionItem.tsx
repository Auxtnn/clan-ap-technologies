import React from "react";

interface SolutionItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Solution: React.FC<SolutionItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-yellow-500">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};
