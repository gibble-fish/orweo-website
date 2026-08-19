"use client";

import { useState } from "react";
import Image from "next/image";
import { PanoramaViewer } from "./PanoramaViewer";
import { OrbitGallery } from "./OrbitGallery";

const categories = [
  "Alle",
  "Immobilien",
  "Architektur",
  "Automotive",
  "360°",
  "Luftaufnahmen",
];

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  location: string;
  type: "placeholder" | "panorama" | "gallery";
  image?: string;
  images?: string[];
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Neubau",
    category: "Immobilien",
    location: "Leichlingen",
    type: "gallery",
    images: [
      "/images/immobilien/neubau/DJI_20260817184036_0001_D.jpg",
      "/images/immobilien/neubau/DJI_20260817184156_0003_D.jpg",
      "/images/immobilien/neubau/DJI_20260817184213_0004_D.jpg",
      "/images/immobilien/neubau/DJI_20260817184225_0005_D.jpg",
      "/images/immobilien/neubau/DJI_20260817184239_0006_D.jpg",
    ],
  },
  {
    id: 3,
    title: "Sportwagen Shooting",
    category: "Automotive",
    location: "[ORT]",
    type: "placeholder",
  },
  {
    id: 4,
    title: "360° Panorama",
    category: "360°",
    location: "Leichlingen",
    type: "panorama",
    image: "/images/360.JPG",
  },
  {
    id: 5,
    title: "Unternehmensstandort",
    category: "Luftaufnahmen",
    location: "[ORT]",
    type: "placeholder",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "Alle"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 section-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] text-champagne uppercase mb-4 font-light">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-off-white tracking-tight">
            Ausgewählte Projekte
          </h2>
          <p className="mt-4 text-mid-grey text-base font-light text-center whitespace-nowrap">
            Eindrücke aus den Bereichen Immobilien, Architektur, Automotive und Luftaufnahmen.
          </p>
          <div className="divider-champagne max-w-24 mx-auto mt-8" />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-[13px] rounded-sm transition-all duration-300 font-light tracking-wide ${
                activeCategory === category
                  ? "bg-champagne text-near-black"
                  : "text-mid-grey hover:text-champagne border border-dark-border hover:border-champagne/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className={`group relative rounded-lg ${
                item.type === "panorama"
                  ? "md:col-span-2 lg:col-span-3 overflow-hidden"
                  : item.type === "gallery"
                  ? "aspect-[4/3] overflow-visible"
                  : "aspect-[4/3] overflow-hidden"
              }`}
            >
              {item.type === "gallery" ? (
                /* Orbit Image Gallery */
                <OrbitGallery
                  images={item.images!}
                  title={item.title}
                  category={item.category}
                  location={item.location}
                  onImageClick={setLightboxImage}
                />
              ) : item.type === "panorama" ? (
                /* 360° Panorama Viewer */
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] text-champagne uppercase tracking-[0.2em] font-light">
                      {item.category}
                    </span>
                    <span className="text-mid-grey/30">—</span>
                    <span className="text-sm text-off-white/80 font-light">
                      {item.title}
                    </span>
                    <span className="text-mid-grey/30">—</span>
                    <span className="text-sm text-mid-grey/60 font-light">
                      {item.location}
                    </span>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-dark-border">
                    <PanoramaViewer
                      image={item.image!}
                      className="h-[350px] md:h-[450px]"
                    />
                    {/* Hint overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-near-black/70 backdrop-blur-sm px-3 py-1.5 rounded-sm pointer-events-none">
                      <svg className="w-3.5 h-3.5 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                      </svg>
                      <span className="text-[10px] text-off-white/70 tracking-wide">Ziehen zum Drehen</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular placeholder */
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-card via-warm-dark to-near-black flex items-center justify-center cursor-pointer">
                    <div className="text-center p-6">
                      <div className="w-14 h-14 mx-auto mb-3 rounded-full border border-champagne/20 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-champagne/50"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                          />
                        </svg>
                      </div>
                      <p className="text-[11px] text-mid-grey/60 tracking-wider">[PORTFOLIO BILD]</p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/95 via-near-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <span className="text-[10px] text-champagne uppercase tracking-[0.2em] mb-1 font-light">
                      {item.category}
                    </span>
                    <h3 className="text-base font-medium text-off-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-off-white/50 mt-1 font-light">{item.location}</p>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-mid-grey text-sm mb-6 font-light">
            Weitere Projekte folgen in Kürze.
          </p>
          <a href="#kontakt" className="btn-secondary">
            Projekt anfragen
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-near-black/95 backdrop-blur-sm p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-label="Bildvorschau"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-off-white/70 hover:text-champagne transition-colors z-10"
            aria-label="Schließen"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-5xl aspect-[16/10]">
            <Image
              src={lightboxImage}
              alt="Vergrößerte Ansicht"
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
