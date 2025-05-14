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
        <div className="text-4xl text-yellow-600 inline-flex p-3 rounded-full bg-yellow-100 items-center justify-center mr-3">
          {icon}
        </div>

        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};
