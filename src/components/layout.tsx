// components/layout.tsx
import React from 'react';
import Navbar from './navbar';
import backgroundImage from '../images/abc.png';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const goToHome = () => {
    console.log('Navigating to Home');
    window.location.href = '/'; // Replace with the actual path for the home page
  };

  const goToPricing = () => {
    console.log('Navigating to Pricing');
    window.location.href = '/pricing'; // Replace with the actual path for the pricing page
  };

  const goToProfile = () => {
    console.log('Navigating to Profile');
    window.location.href = '/profile'; // Replace with the actual path for the profile page
  };

  return (
    <div
  className="w-screen h-screen flex items-center justify-center"
//   style={{
//     background: `url(${backgroundImage})`, // Use the imported image variable
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     opacity: 1000,
//   }}
    >
      <main className="w-full h-full flex flex-col ">
        <Navbar goToHome={goToHome} goToPricing={goToPricing} goToProfile={goToProfile} />
        <div className="overflow-auto flex-1">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
