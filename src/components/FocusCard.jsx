"use client";

import React, { useState } from "react";
import Image from "next/image";

const cn = (...classes) => classes.filter(Boolean).join(" ");

// Card Component
const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "relative h-60 md:h-96 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-neutral-900 transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <Image
      src={card.src}
      alt={card.title}
      fill
      className="absolute inset-0 object-cover"
    />
    <div
      className={cn(
        "absolute inset-0 flex items-end bg-black/50 px-4 py-8 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-200 md:text-2xl">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

// Cards Section Component with Embedded Data
const FocusCards = () => {
  const [hovered, setHovered] = useState(null);

  // Card Data Embedded Here
  const cards = [
    {
      title: "Book Your Puja",
      src: "/pujabook.png",
    },
    {
      title: "Explore Services",
      src: "/explorepuja.png",
    },
    {
      title: "Connect with Priests",
      src: "/preist.png",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 md:px-8">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-neutral-100 mb-6">
        Our Services
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 cursor-pointer">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
};

export default FocusCards;
