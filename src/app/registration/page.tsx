"use client";

import React, { useState } from "react";

const RegisterProfessional = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    skills: "",
    experience: "",
    idProof: null as File | null,
    certificate: null as File | null,
    description: "",
  });

  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const validateForm = () => {
    const validationErrors: string[] = [];

    // Required fields
    if (!formData.fullName.trim())
      validationErrors.push("Full Name is required.");
    if (!formData.email.trim()) validationErrors.push("Email is required.");
    if (!formData.phone.trim()) validationErrors.push("Phone is required.");
    if (!formData.password.trim())
      validationErrors.push("Password is required.");
    if (!formData.confirmPassword.trim())
      validationErrors.push("Confirm Password is required.");
    if (!formData.address.trim()) validationErrors.push("Address is required.");
    if (!formData.city.trim()) validationErrors.push("City is required.");
    if (!formData.state.trim()) validationErrors.push("State is required.");
    if (!formData.pincode.trim()) validationErrors.push("Pincode is required.");
    if (!formData.skills.trim()) validationErrors.push("Skills are required.");
    if (!formData.experience.trim())
      validationErrors.push("Experience is required.");
    if (!formData.idProof) validationErrors.push("ID Proof is required.");

    // Password match
    if (formData.password !== formData.confirmPassword) {
      validationErrors.push("Passwords do not match.");
    }

    // Phone validation (Indian format example)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      validationErrors.push("Invalid phone number format.");
    }

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data ready for backend:", formData);
      alert("Registration successful! (Check console for data)");
      // Send to backend API
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-start p-4 pt-16"
      style={{ backgroundImage: "url('/professional-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/20 bg-opacity-50 backdrop-blur-sm"></div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 max-w-3xl w-full space-y-6 overflow-auto z-10"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Register as a Professional
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Fill in all details accurately for verification
        </p>

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="bg-red-100 text-[#e61717] p-3 rounded-lg space-y-1">
            <ul>
              {errors.map((err, idx) => (
                <li key={idx}>• {err}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Personal Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {/* Address Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="address"
            placeholder="Full Address"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
            value={formData.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>

        {/* Professional Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="skills"
            placeholder="Skills (Plumbing, Electrician, etc.)"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
            value={formData.skills}
            onChange={handleChange}
          />
          <input
            type="text"
            name="experience"
            placeholder="Experience (e.g. 3 years)"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>

        {/* File Uploads */}
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex flex-col p-3 border rounded-lg cursor-pointer hover:bg-[#a8c6d8] transition">
            Upload ID Proof *
            <input
              type="file"
              name="idProof"
              className="hidden"
              onChange={handleFileChange}
            />
            {formData.idProof && (
              <span className="mt-2 text-sm">{formData.idProof.name}</span>
            )}
          </label>
          <label className="flex flex-col p-3 border rounded-lg cursor-pointer hover:bg-[#a8c6d8] transition">
            Upload Certificate (optional)
            <input
              type="file"
              name="certificate"
              className="hidden"
              onChange={handleFileChange}
            />
            {formData.certificate && (
              <span className="mt-2 text-sm">{formData.certificate.name}</span>
            )}
          </label>
        </div>

        {/* Additional Description */}
        <textarea
          name="description"
          placeholder="Brief description about yourself"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e61717]"
          value={formData.description}
          onChange={handleChange}
        />

        {/* Preview Toggle */}
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          className="w-full bg-gray-200 text-gray-800 p-3 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          {showPreview
            ? "Hide Preview & Verification Checklist"
            : "Show Preview & Verification Checklist"}
        </button>

        {/* Preview & Verification Checklist */}
        {showPreview && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-50 space-y-2">
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              Preview of Your Details
            </h2>
            <ul className="space-y-1 text-gray-600">
              <li>
                <strong>Full Name:</strong> {formData.fullName}
              </li>
              <li>
                <strong>Email:</strong> {formData.email}
              </li>
              <li>
                <strong>Phone:</strong> {formData.phone}
              </li>
              <li>
                <strong>Address:</strong> {formData.address}, {formData.city},{" "}
                {formData.state} - {formData.pincode}
              </li>
              <li>
                <strong>Skills:</strong> {formData.skills}
              </li>
              <li>
                <strong>Experience:</strong> {formData.experience}
              </li>
              <li>
                <strong>ID Proof:</strong>{" "}
                {formData.idProof?.name || "Not uploaded"}
              </li>
              <li>
                <strong>Certificate:</strong>{" "}
                {formData.certificate?.name || "Not uploaded"}
              </li>
              <li>
                <strong>Description:</strong> {formData.description || "None"}
              </li>
            </ul>
            <p className="text-[#e61717] font-semibold mt-2">
              Please review all details carefully before submitting.
            </p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#e61717] text-white p-3 rounded-lg font-semibold hover:bg-black transition"
        >
          Register
        </button>
      </form>

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#a8c6d8] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a8c6d8] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </div>
  );
};

export default RegisterProfessional;
