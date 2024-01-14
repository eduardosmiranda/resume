import React from 'react';

const Background = () => {
  const svgCount = 40;
  const minGap = 50;
  const svgs = [];

  const calculateDistance = (pos1, pos2) => {
    const dx = pos1.left - pos2.left;
    const dy = pos1.top - pos2.top;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const isMinGapValid = (position, existingPositions) => {
    for (const existingPosition of existingPositions) {
      const distance = calculateDistance(position, existingPosition);
      if (distance < minGap) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < svgCount; i++) {
    let position;
    do {
      // Generate random positions
      position = {
        top: Math.random() * 200,
        left: Math.random() * 98,
      };
    } while (!isMinGapValid(position, svgs));

    const rotation = Math.floor(Math.random() * 360);
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
     

    const svgStyle = {
      transform: `rotate(${rotation}deg)`,
      fill: "#E8E8E4",
      width: '50px',
      height: '60px',
      position: 'absolute',
      top: `${position.top}%`,
      left: `${position.left}%`,
      zIndex: "-1"
    };

    svgs.push(
      <svg
        key={i}
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 16"
        style={svgStyle}
      >
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
        />
      </svg>
    );
  }

  return <div className="backgroundAbout">{svgs}</div>;
};

export default Background;


