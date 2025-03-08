import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sign = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000//api/SignInUsers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      alert("Signup successful!");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Signup failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-4 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-400 text-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-400 text-lg"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-400 text-lg"
            required
          />
          <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition transform hover:scale-105">
            Sign Up
          </button>
        </form>
        <p className="text-center text-md text-gray-700 mt-6">
          Already have an account? 
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Sign;