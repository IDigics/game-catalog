import React from "react";

function GameCard({ image, title, description, About, category }) {
  return (
    <div className="bg-[#121212] border-2 border-[#CCFFFF] rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 w-80">
      <figure className="p-4 flex justify-center">
        <img
          src={image}
          alt={title}
          className="h-40 w-40 object-cover rounded-lg border-2 border-[#CCFFFF] shadow"
        />
      </figure>
      <div className="card-body px-7 pb-4 relative">
        <h2 className="text-lg font-bold text-[#CCFFCC] mb-2 flex items-center gap-2 text-center">
          {title}
        </h2>
        <p className="text-sm text-[#B3B3B3] mb-4">{description}</p>
        <div className="flex gap-2 mb-8">
          <span className="bg-[#CCFFFF] text-[#000000] px-2 py-1 rounded text-xs">
            {category}
          </span>
        </div>
        <a
          href={About}
          className="absolute bottom-4 right-4 bg-[#CCFFFF] hover:bg-[#FF9933] text-[#000000] px-5 py-2 rounded text-xs shadow transition"
        >
          About
        </a>
      </div>
    </div>
  );
}

export default GameCard;
