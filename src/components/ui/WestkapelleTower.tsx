"use client";

import Image from "next/image";

interface WestkapelleTowerProps {
  className?: string;
  color?: string;
  height?: number;
}

export default function WestkapelleTower({
  className,
  color,
  height = 200,
}: WestkapelleTowerProps) {
  const aspectRatio = 301 / 567; // actual image aspect ratio
  const width = Math.round(height * aspectRatio);

  // When used as a white silhouette (decorative background), apply brightness/invert filter
  const isWhiteSilhouette = color === "white";

  return (
    <Image
      src="/images/toren_westkapelle.png"
      alt="Toren van Westkapelle"
      width={width}
      height={height}
      className={`${className || ""} ${isWhiteSilhouette ? "brightness-0 invert" : ""}`}
      style={{ width, height, objectFit: "contain" }}
      aria-label="Toren van Westkapelle"
    />
  );
}
