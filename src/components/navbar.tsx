// components/navbar.tsx
import React from 'react';

interface NavbarProps {
  goToHome: () => void;
  goToPricing: () => void;
  goToProfile: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ goToHome, goToPricing, goToProfile }) => {
  return (
    <div className="w-full h-16 flex bg-black bg-opacity-25 items-center space-x-4 p-4 sm:px-8 text-xl">
      <h3 className="md:mr-8 font-bold text-2xl text-white">Genoshi</h3>
      <button onClick={goToHome} className="text-white">Home</button>
      <button onClick={goToPricing} className="text-white">Pricing</button>
      <button onClick={goToProfile} className="text-white">Profile</button>
    </div>
  );
};

export default Navbar;
