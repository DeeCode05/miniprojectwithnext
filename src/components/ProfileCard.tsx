"use client";

import React from "react";

interface ProfileCardProps {
  fullName: string;
  email: string;
  phone: string;
  skills: string;
  experience: string;
  description: string;
  profilePic?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  fullName,
  email,
  phone,
  skills,
  experience,
  description,
  profilePic,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex gap-6 items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold">{fullName}</h2>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Skills:</strong> {skills}
        </p>
        <p>
          <strong>Experience:</strong> {experience}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
