// components/pricing/page.tsx
import React from 'react';
import PriceCard from './components/pricecard';

const PricingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-black-500 mb-8">Our Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PriceCard
            title="Basic Plan"
            price={29.99}
            features={['Feature 1', 'Feature 2', 'Feature 3']}
          />
          <PriceCard
            title="Standard Plan"
            price={49.99}
            features={['Feature 1', 'Feature 2', 'Feature 3']}
          />
          <PriceCard
            title="Premium Plan"
            price={79.99}
            features={['Feature 1', 'Feature 2', 'Feature 3']}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
