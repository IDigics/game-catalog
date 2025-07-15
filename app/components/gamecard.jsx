import React from "react";

function GameCard({ image, title, description, About }) {
  return (
    <div className="bg-[#2d1a4d] border-2 border-[#22123a] rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 w-80">
      <figure className="p-4 flex justify-center">
        <img
          src={image}
          alt={title}
          className="h-40 w-40 object-cover rounded-lg border-2 border-purple-900 shadow"
        />
      </figure>
      <div className="card-body px-7 pb-4 relative">
        <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          {title}
          <span className="bg-purple-700 text-xs px-2 py-1 rounded-full">
            NEW
          </span>
        </h2>
        <p className="text-sm text-gray-200 mb-4">{description}</p>
        <div className="flex gap-2 mb-8">
          <span className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-xs">
            Adventure
          </span>
          <span className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-xs">
            Puzzle
          </span>
        </div>
        <a
          href={About}
          className="absolute bottom-4 right-4 bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded text-xs shadow transition"
        >
          About
        </a>
      </div>
    </div>
  );
}

export default GameCard;
