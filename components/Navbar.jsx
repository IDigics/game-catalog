"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    const newCount = clickCount + 1;

    if (newCount >= 5) {
      window.open("https://www.youtube.com/watch?v=khP8a1FLE_4", "_blank");
      setClickCount(0);
    } else {
      setClickCount(newCount);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#121212] border-2 text-[#CCFFFF] px-20 py-4 flex items-center justify-between shadow-lg">
      <div className="flex justify-center items-center font-bold text-2xl tracking-wide text-[#CCFFFF]">
        <a
          href="#"
          onClick={handleClick}
          className="hover:text-[#FF9933] transition cursor-pointer"
        >
          Game Review
        </a>
      </div>
      <div className="flex items-center gap-8 text-lg">
        <Link href="/" className="hover:text-[#FF9933] transition">
          Home
        </Link>
        <Link href="/login">
          <button className="bg-[#CCFFFF] text-[#000000] font-semibold px-4 py-2 rounded-lg hover:bg-[#FF9933] transition">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-[#CCFFFF] text-[#000000] font-semibold px-4 py-2 rounded-lg hover:bg-[#FF9933] transition">
            Sign Up
          </button>
        </Link>
        <button>
          {clickCount >= 2 ? <p>test3</p> : <p>test2</p>}
          test
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
