import React from 'react';

const AccountDetails = () => {
  const profile = {
    name: 'Ojaswa Varshney',
    email: 'ojaswavarshney27@gmail.com',
    bio: 'As a computer science enthusiast, I aspire to be the architect of innovations that shape the future. My journey as a beautiful computer science student is a canvas where each line of code paints a masterpiece, contributing to projects that will inspire and define generations to come.',
    img: '',
    csp: 'Standard Plan',
    status: 'Activated'
  };

  return (
    <div className="w-full rounded-md flex justify-center items-center m-auto p-6 my-4 border-[0px] bg-[rgb(127,0,0,0.2)]">
      <div className="w-1/2 justify-end">
        <p className="text-xl mr-4">
          <span className="text-xl font-[600]">{profile.csp}</span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <hr className="w-[48px] rotate-90" />
      </div>
      <div className="w-1/2 justify-start">
        <p className="text-xl mr-4">
          <span className="text-xl font-[600]">{profile.status}</span>
        </p>
      </div>
    </div>
  );
};

export default AccountDetails;
