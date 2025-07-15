import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#121212] border-2 text-[#CCFFFF] px-20  py-4 flex items-center justify-between shadow-lg">
      <div className="font-bold text-2xl tracking-wide text-[#CCFFFF]">
        Game niggers
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
