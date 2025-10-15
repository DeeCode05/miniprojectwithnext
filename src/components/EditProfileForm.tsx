"use client";

import React, { useState, useEffect } from "react";

interface EditProfileProps {
  workerId: string;
}

const EditProfile: React.FC<EditProfileProps> = ({ workerId }) => {
  const [formData, setFormData] = useState({
    skills: "",
    experience: "",
    description: "",
    profilePic: "",
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      fetch(`/api/worker/${workerId}`)
        .then((res) => res.json())
        .then((data) =>
          setFormData({
            skills: data.skills,
            experience: data.experience,
            description: data.description,
            profilePic: data.profilePic || "",
          })
        );
    }
  }, [workerId, open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/worker/${workerId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) alert("Profile updated!");
    else alert("Failed to update profile");
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {/* Mini Card / Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-black text-white p-3 rounded-lg shadow hover:bg-gray-800 transition"
      >
        {open ? "Close Edit Profile" : "Edit Profile"}
      </button>

      {/* Collapsible Form */}
      {open && (
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black shadow-md rounded-lg p-4 mt-3 w-full max-w-sm flex flex-col gap-3"
        >
          <h2 className="text-lg font-semibold border-b border-gray-200 pb-1">
            Edit Profile
          </h2>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Skills"
            className="p-2 border border-gray-300 rounded text-sm"
          />
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Experience"
            className="p-2 border border-gray-300 rounded text-sm"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="p-2 border border-gray-300 rounded text-sm resize-none h-16"
          />
          <input
            type="text"
            name="profilePic"
            value={formData.profilePic}
            onChange={handleChange}
            placeholder="Profile Image URL"
            className="p-2 border border-gray-300 rounded text-sm"
          />
          <button
            type="submit"
            className="bg-black text-white hover:bg-gray-800 p-2 rounded text-sm border border-red-600/10"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProfile;
