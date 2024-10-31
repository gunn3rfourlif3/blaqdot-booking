import React from 'react';

interface StudioInfoProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StudioInfo: React.FC<StudioInfoProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 group">
      <div className="inline-block p-3 bg-gray-700 rounded-full mb-4 group-hover:bg-indigo-600 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default StudioInfo;