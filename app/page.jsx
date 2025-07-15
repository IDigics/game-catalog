import React from "react";
import GameCard from "./components/gamecard";
import Navbar from "./components/Navbar";

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
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#242020] bg-cover bg-center">
      <Navbar />
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {games.map((game, idx) => (
            <GameCard
              key={idx}
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
