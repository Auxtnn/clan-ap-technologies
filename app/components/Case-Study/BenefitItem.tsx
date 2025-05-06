import React from "react";

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Benefit: React.FC<BenefitItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};
