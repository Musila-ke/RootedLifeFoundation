"use client";

import { useState } from "react";

export default function BlurImage({
  src,
  alt,
  className = "",
  containerClass = "",
}: {
  src: string;
  alt: string;
  className?: string;
  containerClass?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`overflow-hidden ${containerClass}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`transition-all duration-700 ease-out ${loaded ? "scale-100 blur-0" : "scale-105 blur-xl opacity-0"} ${className}`}
        style={{ willChange: "transform, opacity, filter" }}
      />
    </div>
  );
}
