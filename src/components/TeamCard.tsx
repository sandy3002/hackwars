"use client";

import { useState } from 'react';

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative w-64 h-96 bg-black rounded-md shadow-md flex flex-col items-center justify-center px-6 py-8 transition-all duration-300 ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800">
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 14l-5-5m0 0l-5 5m5-5V3"></path>
        </svg>
      </div>

      <div className="absolute top-12 left-12 flex items-center justify-center w-16 h-16 rounded-full bg-gray-800">
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
          <line x1="12" y1="2" x2="12" y2="4"></line>
        </svg>
      </div>

      < div className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800">
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 8v8m4-4H8"></path>
        </svg>
      </div>

      <h2 className="mt-4 text-white text-lg font-semibold">Card Title</h2>
      <p className="text-gray-400 text-sm text-center">This is a description of the card content. It provides additional information.</p>
    </div>
  );
};

export default Card;