// components/profile/page.tsx
import React from 'react';
import AccountDetails from './components/accountdetails';
import ActivityFeed from './components/activity';
import ProfileDetails from './components/profiledetails';

const ProfilePage: React.FC = () => {
  const profile = {
    name: 'Tanmay Sarkar',
    email: 'sarkartanmay393@gmail.com',
    bio: 'As a computer science enthusiast, I aspire to be the architect of innovations that shape the future. My journey as a beautiful computer science student is a canvas where each line of code paints a masterpiece, contributing to projects that will inspire and define generations to come.',
    img: '',
    csp: 'Stadard Plan',
    status: 'Activated',
    work: 'Software Engineer',
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-500 mb-8">Your Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AccountDetails />
          <ActivityFeed />
          <ProfileDetails profile={profile} /> {/* Pass the profile data as a prop */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
