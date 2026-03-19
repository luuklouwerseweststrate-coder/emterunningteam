"use client";

interface WestkapelleTowerProps {
  className?: string;
  color?: string;
  height?: number;
}

export default function WestkapelleTower({
  className,
  color = "currentColor",
  height = 200,
}: WestkapelleTowerProps) {
  const aspectRatio = 60 / 200;
  const width = Math.round(height * aspectRatio);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 200"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Toren van Westkapelle"
    >
      {/* Lighthouse lantern dome on top */}
      <ellipse cx="30" cy="10" rx="7" ry="4" />
      {/* Lighthouse lantern room */}
      <rect x="22" y="10" width="16" height="12" />
      {/* Lighthouse railing/gallery */}
      <rect x="19" y="22" width="22" height="3" rx="1" />
      {/* Lighthouse base / transition */}
      <polygon points="21,25 39,25 37,35 23,35" />
      {/* Main tower body - slightly tapered */}
      <polygon points="23,35 37,35 35,155 25,155" />
      {/* Window slits on tower */}
      <rect x="29" y="50" width="2" height="8" rx="1" fill={color} opacity="0.6" />
      <rect x="29" y="75" width="2" height="8" rx="1" fill={color} opacity="0.6" />
      <rect x="29" y="100" width="2" height="8" rx="1" fill={color} opacity="0.6" />
      <rect x="29" y="125" width="2" height="8" rx="1" fill={color} opacity="0.6" />
      {/* Tower base - wider section */}
      <polygon points="25,155 35,155 38,170 22,170" />
      {/* Buttress left */}
      <polygon points="22,170 25,155 18,170" />
      {/* Buttress right */}
      <polygon points="38,170 35,155 42,170" />
      {/* Foundation / ground base */}
      <rect x="14" y="170" width="32" height="6" rx="1" />
      {/* Ground line */}
      <rect x="8" y="176" width="44" height="3" rx="1" />
    </svg>
  );
}
