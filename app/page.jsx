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
  },
  {
    image: "/LifeIsStrange.png",
    title: "Life is Strange",
    description: "Experience a gripping story with choices that matter.",
    about: "https://lifeisstrange.square-enix-games.com/en-us",
  },
  {
    image: "/warframe.jpeg",
    title: "Warframe",
    description:
      "Join the fight against the Grineer and save the Origin System.",
    about: "https://www.warframe.com/",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1506744038136-46273834b3fb.webp",
    title: "Racing Rivals",
    description: "Compete in high-speed races and become the champion.",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1519125323398-675f0ddb6308.webp",
    title: "Zombie Survival",
    description: "Survive waves of zombies in a post-apocalyptic world.",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1529626455594-4ff0802cfb7e.webp",
    title: "Fantasy Kingdom",
    description: "Build your kingdom and defend it from invaders.",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1551963831-b3b1ca40c98e.webp",
    title: "Puzzle Master",
    description: "Challenge your mind with tricky puzzles and riddles.",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1551782450-a2132b4ba21d.webp",
    title: "Stealth Ops",
    description: "Complete secret missions using stealth and strategy.",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1522770179533-24471fcdba45.webp",
    title: "Island Escape",
    description: "Find clues and escape from a mysterious island.",
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
