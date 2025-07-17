"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";

export default function SignUpForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      // Replace with your actual API endpoint
      await axios.post("/api/signup", { email, password });
      setSuccess("Signup successful!");
      // Redirect or perform other actions
    } catch (err: any) {
      setError(err?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="bg-[#121212] border-2 border-[#CCFFFF] rounded-xl shadow-xl p-8 w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-[#CCFFFF] mb-8">
        Sign Up
      </h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {success && (
        <div className="text-green-500 text-center mb-4">{success}</div>
      )}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
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
