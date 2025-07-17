"use client";

import { useState } from "react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added confirm password field

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://192.168.1.83:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("Signup successful!");
        // Redirect to login page or perform other actions upon successful signup
      } else {
        const errorData = await response.json();
        alert(`Signup failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup");
    }
  };

  return (
    <div className="bg-[#121212] border-2 border-[#CCFFFF] rounded-xl shadow-xl p-8 w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-[#CCFFFF] mb-8">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#CCFFFF]"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md text-[#CCFFFF]"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#CCFFFF]"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md text-[#CCFFFF]"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-[#CCFFFF]"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md text-[#CCFFFF]"
          />
        </div>
        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#000000] bg-[#CCFFFF] hover:bg-[#FF9933] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9933] transition"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
