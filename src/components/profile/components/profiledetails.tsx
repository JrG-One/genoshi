import React from 'react';

interface ProfileDetailsProps {
  profile: {
    name: string;
    email: string;
    bio: string;
    img: string;
    work: string;
  };
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profile }) => {
  return (
    <div className="rounded-md flex flex-col md:flex-row gap-8 border-[1px] bg-dark-tremor-background-subtle bg-opacity-0 px-1">
      <div className="flex flex-col items-center justify-center pt-2 sm:pt-0">
        <img
          width={128}
          height={128}
          className="rounded-md w-fit h-fit"
          src={profile.img}
          alt="profile_img"
        />
      </div>
      <div className="flex flex-col gap-1 px-2">
        <div className="text-xl font-[400]">{profile.name}</div>
        <div className="text-xl font-[400]">{profile.email}</div>
        <div className="text-md font-[400]">{profile.bio}</div>
        <div className="text-md font-[400]">{profile.work}</div>
      </div>
      <a href="/profile/edit" className="h-fit w-fit p-2">
        {/* Your Edit Icon SVG goes here */}
      </a>
    </div>
  );
};

export default ProfileDetails;
