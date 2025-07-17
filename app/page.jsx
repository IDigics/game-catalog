"use client";
import React, { useState } from "react";
import GameCard from "../components/gamecard";

const games = [
  {
    image: "/eldenring.jpg",
    title: "elden ring",
    description:
      "journey through a interconnected world filled with danger and mystery.",
    about: "https://en.bandainamcoent.eu/elden-ring",
    category: "Action RPG",
  },
  {
    image: "/LifeIsStrange.png",
    title: "Life is Strange",
    description: "Experience a gripping story with choices that matter.",
    about: "https://lifeisstrange.square-enix-games.com/en-us",
    category: "Adventure",
  },
  {
    image: "/warframe.jpeg",
    title: "Warframe",
    description:
      "Join the fight against the Grineer and save the Origin System.",
    about: "https://www.warframe.com/",
    category: "Action",
  },
  {
    image: "/exp.jpeg",
    title: "Expedition 33",
    description: "Embark on a thrilling space adventure across the galaxy.",
    about: "https://www.expedition33.com/",
    category: "Sci-Fi",
  },
  {
    image: "/bolder.jpeg",
    title: "bolder's gate 3",
    description: "Explore the Forgotten Realms in this epic RPG.",
    about: "https://baldursgate3.game/",
    category: "Fantasy RPG",
  },
  {
    image: "/freefire.jpeg",
    title: "Free Fire",
    description: "Battle against players worldwide in this fast-paced shooter.",
    about: "https://ff.garena.com/",
    category: "Shooter",
  },
  {
    image: "/freefire.jpeg",
    title: "Free",
    description: "Battle against players worldwide in this fast-paced shooter.",
    about: "https://ff.garena.com/",
    category: "Shooter",
  },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dynamically extract unique categories
  const categories = [
    "All",
    ...Array.from(new Set(games.map((game) => game.category || "Adventure"))),
  ];

  // Filter games based on selected category
  const filteredGames =
    selectedCategory === "All"
      ? games
      : games.filter(
          (game) => (game.category || "Adventure") === selectedCategory
        );

  return (
    <div className="min-h-screen bg-[#040404] bg-cover bg-center">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition font-semibold ${
                selectedCategory === category
                  ? "bg-[#CCFFFF] text-[#000000]"
                  : "bg-transparent border-2 border-[#CCFFFF] text-[#CCFFFF] hover:bg-[#CCFFFF] hover:text-[#000000]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {filteredGames.map((game) => (
            <GameCard
              key={game.title}
              image={game.image}
              title={game.title}
              description={game.description}
              About={game.about}
              category={game.category || "Adventure"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
