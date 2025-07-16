"use client";
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#121212] border-2 text-[#CCFFFF] px-20 py-4 flex items-center justify-between shadow-lg">
      <div className="flex justify-center items-center font-bold text-2xl tracking-wide text-[#CCFFFF]">
        <Link href="/" className="hover:text-[#FF9933] transition">
          Game Review
        </Link>
      </div>
      <div className="flex items-center gap-8 text-lg">
        <Link href="/" className="hover:text-[#FF9933] transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#FF9933] transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#FF9933] transition">
          Contact
        </Link>
        <Link href="/login">
          <button className="bg-[#CCFFFF] text-[#000000] font-semibold px-4 py-2 rounded-lg hover:bg-[#FF9933] transition">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
