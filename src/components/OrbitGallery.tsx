"use client";

import { useState } from "react";
import Image from "next/image";

interface OrbitGalleryProps {
  images: string[];
  title: string;
  category: string;
  location: string;
  onImageClick: (src: string) => void;
}

export function OrbitGallery({
  images,
  title,
  category,
  location,
  onImageClick,
}: OrbitGalleryProps) {
  const [isHovered, setIsHovered] = useState(false);

  const mainImage = images[0];
  const orbitImages = images.slice(1);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Orbiting images container */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 z-50 ${
          isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative w-[820px] h-[820px] md:w-[900px] md:h-[900px] ${
            isHovered ? "animate-orbit-spin" : ""
          }`}
        >
          {orbitImages.map((img, idx) => {
            const angle = (360 / orbitImages.length) * idx;
            const radius = 380;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <button
                key={idx}
                onClick={() => onImageClick(img)}
                className={`absolute w-52 h-52 md:w-64 md:h-64 rounded-[2rem] overflow-hidden border-2 border-champagne/50 shadow-2xl cursor-pointer transition-all duration-700 hover:scale-110 hover:border-champagne hover:shadow-champagne/20 ${
                  isHovered
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
                style={{
                  left: `calc(50% + ${x}px - 6.5rem)`,
                  top: `calc(50% + ${y}px - 6.5rem)`,
                  transitionDelay: isHovered ? `${idx * 100}ms` : "0ms",
                }}
              >
                <Image
                  src={img}
                  alt={`${title} – Bild ${idx + 2}`}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Main image – fills the card completely */}
      <button
        onClick={() => onImageClick(mainImage)}
        className={`absolute inset-0 rounded-lg overflow-hidden border border-dark-border cursor-pointer transition-all duration-500 z-10 ${
          isHovered
            ? "shadow-2xl shadow-champagne/10 scale-[1.02] border-champagne/30"
            : ""
        }`}
      >
        <Image
          src={mainImage}
          alt={`${title} – Hauptbild`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        {/* Hover info overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-near-black/90 via-near-black/20 to-transparent transition-opacity duration-500 flex flex-col justify-end p-5 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[10px] text-champagne uppercase tracking-[0.2em] mb-1 font-light">
            {category}
          </span>
          <h3 className="text-base font-medium text-off-white">{title}</h3>
          <p className="text-sm text-off-white/50 mt-1 font-light">
            {location}
          </p>
        </div>
      </button>
    </div>
  );
}
