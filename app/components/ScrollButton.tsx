'use client'; // Needed for React hooks in Next.js 13+ App Router

import React from 'react';

interface ScrollButtonProps {
  scrollAmount?: number; // Pixels to scroll down
  text?: string; // Button text
}

export default function ScrollButton({ scrollAmount = 300, text = "Get Started" }: ScrollButtonProps) {
  const handleScroll = () => {
    window.scrollBy({ top: scrollAmount, left: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScroll}
      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg transition"
    >
      {text}
    </button>
  );
}
