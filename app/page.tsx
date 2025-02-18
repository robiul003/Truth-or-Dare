"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  { id: 1, type: "Truth", img: "/jack-the-queen.jpg" },
  { id: 2, type: "Truth", img: "/jack-the-queen.jpg" },
  { id: 3, type: "Dare", img: "/joker.jpg" },
  { id: 4, type: "Dare", img: "/joker.jpg" },
];

export default function Home() {
  const [spread, setSpread] = useState(false);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const handleSpread = () => setSpread(true);
  
  const handleFlip = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Title */}
      <h1 className="text-6xl spooky-font text-red-600 mb-2">Truth or Dare</h1>
      <h2 className="text-2xl text-gray-400 mb-8">Choose Wisely</h2>

      {/* Cards Section */}
      <div className="relative flex" onClick={handleSpread}>
        {!spread ? (
          <motion.div
            className="absolute w-[200px] h-[280px] bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Click to Play
          </motion.div>
        ) : (
          <div className="flex gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="relative w-[200px] h-[280px] cursor-pointer rounded-lg bg-gray-800"
                onClick={() => handleFlip(card.id)}
                animate={{ rotateY: flippedCards[card.id] ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                {!flippedCards[card.id] && (
                  <motion.div className="absolute w-full h-full rounded-lg bg-gray-900 flex items-center justify-center backface-hidden">
                    <p className="text-xl">?</p>
                  </motion.div>
                )}

                {/* Back Side */}
                {flippedCards[card.id] && (
                  <motion.div
                    className="absolute w-full h-full rounded-lg flex flex-col items-center justify-center backface-hidden"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <img src={card.img} alt={card.type} className="w-full h-full object-cover rounded-lg" />
                    <p className="absolute bottom-2 text-xl font-bold bg-black px-2 py-1 rounded">{card.type}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
