// src/pages/PerksCarousel.tsx
import React, { useState } from 'react';

const images = [
  '/perk1.jpg',
  '/perk2.jpg',
  // add more perk image URLs here
];

export function PerksCarousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative">
      <img
        src={images[index]}
        alt={`Perk ${index + 1}`}
        className="w-full h-64 object-cover rounded-lg"
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
