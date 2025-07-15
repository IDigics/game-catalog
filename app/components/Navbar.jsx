"use client";
import React, { useState } from "react";

function Navbar() {
  const [clickCount, setClickCount] = useState(0);

  const handleGameReviewClick = (e) => {
    e.preventDefault();
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 5) {
      window.location.href =
        "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"; // Traditional browser redirect
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#121212] border-2 text-[#CCFFFF] px-20 py-4 flex items-center justify-between shadow-lg">
      <div className="font-bold text-2xl tracking-wide text-[#CCFFFF]">
        <a
          href="/"
          onClick={handleGameReviewClick}
          className="hover:text-[#FF9933] transition"
        >
          Game Review
        </a>
      </div>
      <div className="flex gap-8 text-lg">
        <a href="/" className="hover:text-[#FF9933] transition">
          Home
        </a>
        <a href="/about" className="hover:text-[#FF9933] transition">
          About
        </a>
        <a href="/contact" className="hover:text-[#FF9933] transition">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
