"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // For demonstration, we'll just log the credentials.
    // In a real app, you'd send this to an authentication endpoint.

    try {
      const response = await fetch("http://192.168.1.83:3000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("Login successful!");
        // Redirect to login page or perform other actions upon successful signup
      } else {
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during Login");
    }
  };

  return (
    <div className="bg-[#121212] border-4 border-[#CCFFFF] rounded-xl shadow-xl p-8 w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-[#CCFFFF] mb-8">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#CCFFFF]"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9933] focus:border-[#FF9933] sm:text-sm bg-[#2d2d2d] text-white"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#CCFFFF]"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9933] focus:border-[#FF9933] sm:text-sm bg-[#2d2d2d] text-white"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#000000] bg-[#CCFFFF] hover:bg-[#FF9933] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9933] transition"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
