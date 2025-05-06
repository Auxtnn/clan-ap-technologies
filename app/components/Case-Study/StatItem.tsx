import React from "react";

interface StatItemProps {
  icon: React.ReactNode;
  value: any;
  label: string;
}

export const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{value}</h3>
      <p className="text-gray-700">{label}</p>
    </div>
  );
};
