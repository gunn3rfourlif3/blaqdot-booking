import React from 'react';
import { Check, Music, Star } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, featured = false }) => {
  return (
    <div 
      className={`
        rounded-lg p-8 relative overflow-hidden
        ${featured 
          ? 'bg-gradient-to-br from-indigo-600 to-indigo-800 transform scale-105 shadow-xl' 
          : 'bg-gray-700 hover:bg-gray-600'
        }
        transition-all duration-300
      `}
    >
      {featured && (
        <div className="absolute top-4 right-4">
          <Star className="w-6 h-6 text-yellow-400 fill-current" />
        </div>
      )}
      <div className="flex items-center gap-3 mb-4">
        <Music className={`w-6 h-6 ${featured ? 'text-white' : 'text-indigo-400'}`} />
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-bold">ZAR{price}</span>
        <span className="text-gray-300">/session</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className={`w-5 h-5 ${featured ? 'text-white' : 'text-green-400'}`} />
            <span className={featured ? 'text-gray-100' : 'text-gray-300'}>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        className={`
          w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
          ${featured
            ? 'bg-white text-indigo-600 hover:bg-gray-100'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }
        `}
      >
        Select Package
      </button>
    </div>
  );
};

export default PricingCard;