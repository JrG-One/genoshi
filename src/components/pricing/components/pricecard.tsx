// components/pricing/components/pricecard.tsx
import React from 'react';

interface PriceCardProps {
  title: string;
  price: number;
  features: string[];
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, features }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md transition-transform hover:scale-105 hover:bg-white hover:cursor-pointer">
      <h2 className="text-5xl font-semibold mb-4">{title}</h2>
      <p className="text-4xl font-bold mb-4">${price}/month</p>
      <ul className="list-disc pl-5">
        {features.map((feature, index) => (
          <li key={index} className="text-3xl text-gray-700">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
