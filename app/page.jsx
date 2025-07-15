import React from "react";
import GameCard from "./components/gamecard";
import Navbar from "./components/navbar";

const games = [
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Adventure Quest",
    description: "Embark on an epic adventure through mysterious lands.",
  },
  {
    image: "/LifeIsStrange.png",
    title: "Space Explorer",
    description: "Explore the vast universe and discover new planets.",
    about: "https://lifeisstrange.square-enix-games.com/en-us",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1465101046530-73398c7f28ca.webp",
    title: "Mystery Mansion",
    description: "Solve puzzles and uncover secrets in the mansion.",
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
    <div className="min-h-screen bg-white">
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
