import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-16" }) => {
  // We generate 12 leaves for the circle effect
  const leaves = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i * 30) * (Math.PI / 180);
    const radius = 18;
    const cx = 24 + radius * Math.cos(angle);
    const cy = 24 + radius * Math.sin(angle);
    const rotation = i * 30 + 45; // Rotate leaf to follow the circle
    
    // Alternate colors between your primary and secondary greens
    const color = i % 2 === 0 ? '#4D7C55' : '#76B041'; 
    
    return (
      <ellipse
        key={i}
        cx={cx}
        cy={cy}
        rx="6"
        ry="3"
        fill={color}
        transform={`rotate(${rotation} ${cx} ${cy})`}
        opacity="0.9"
      />
    );
  });

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* The Graphic Part (SVG) */}
      <svg viewBox="0 0 48 48" className="h-full w-auto overflow-visible">
        <g>{leaves}</g>
      </svg>

      {/* The Text Part (HTML text for perfect font rendering) */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5">
          <span className="font-sans font-bold text-2xl tracking-tight text-brand-primary">
            Asians
          </span>
          <span className="font-serif italic text-xl text-brand-secondary font-normal">
            for
          </span>
        </div>
        <span className="font-sans font-bold text-2xl tracking-tight text-brand-primary -mt-1">
          Climate Solutions
        </span>
      </div>
    </div>
  );
};