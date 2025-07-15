import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#22123a] text-white px-8 py-4 flex items-center justify-between shadow-lg">
      <div className="font-bold text-2xl tracking-wide text-purple-300">
        Game Catalog
      </div>
      <div className="flex gap-8 text-lg">
        <a href="/" className="hover:text-purple-400 transition">
          Home
        </a>
        <a href="/about" className="hover:text-purple-400 transition">
          About
        </a>
        <a href="/contact" className="hover:text-purple-400 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
