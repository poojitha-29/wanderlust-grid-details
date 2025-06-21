import React, { useState } from 'react';

const images = [
  '/images/perk1.jpg',
  '/images/perk2.jpg',
  '/images/perk3.jpg',
  '/images/perk4.jpg',
  '/images/perk6.jpg',
  
];

export function PerksCarousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <img
        src={images[index]}
        alt={`Perk ${index + 1}`}
        className="w-full h-[400px] object-cover rounded-xl shadow-md"
      />
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-2xl px-3 py-1 rounded-full shadow hover:bg-white"
        aria-label="Previous Image"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-2xl px-3 py-1 rounded-full shadow hover:bg-white"
        aria-label="Next Image"
      >
        ›
      </button>
    </div>
  );
}
