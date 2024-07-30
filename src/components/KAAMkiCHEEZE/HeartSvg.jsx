import React from 'react';

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="heart-icon"
    width="40"
    height="40"
    enableBackground={'white'}
   

  >
    <rect x="0" y="0" width="24" height="24" fill="white" />
    <defs>
      <linearGradient id="stroke-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "orange", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "blue", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "yellow", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4} // Adjust the strokeWidth as needed
      stroke="url(#stroke-gradient)"
      d="M12 21.5l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.68L12 21.5z"
    />
  </svg>
);

export default HeartIcon;
