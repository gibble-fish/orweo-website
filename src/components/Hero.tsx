"use client";

import { OrweoLogo } from "./OrweoLogo";

export function Hero() {
  return (
    <section id="start" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Automotive.mp4" type="video/mp4" />
          <source src="/videos/Automotive.mov" type="video/quicktime" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-near-black/90 via-near-black/50 to-near-black/70" />
      </div>

      {/* Spacer for navigation */}
      <div className="h-20 lg:h-24 flex-shrink-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-12">
        <div className="flex flex-col items-center gap-8">
          {/* ORWEO Logo – large and prominent */}
          <div className="opacity-0 animate-fade-in-up">
            <OrweoLogo className="h-14 md:h-20 lg:h-24 w-auto" />
          </div>

          {/* Claim */}
          <p className="text-[11px] md:text-[13px] tracking-[0.4em] text-champagne uppercase opacity-0 animate-fade-in-up animation-delay-200 font-light">
            Visuals that make an impact.
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-off-white tracking-tight leading-[1.1] opacity-0 animate-fade-in-up animation-delay-400 mt-4">
            Perspektiven,<br />
            <span className="gradient-text">die bleiben.</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-base md:text-lg text-off-white/60 font-light leading-relaxed opacity-0 animate-fade-in-up animation-delay-600">
            Professionelle Drohnenaufnahmen für Immobilien, Architektur,
            Automotive und mehr.
          </p>

          {/* Secondary text */}
          <p className="text-sm text-mid-grey font-light opacity-0 animate-fade-in-up animation-delay-600">
            Für Bilder und Videos, die Eindruck hinterlassen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 opacity-0 animate-fade-in-up animation-delay-800">
            <a href="#kontakt" className="btn-primary">
              Projekt anfragen
            </a>
            <a href="#portfolio" className="btn-secondary">
              Portfolio ansehen
            </a>
          </div>

          {/* Service line */}
          <div className="mt-10 opacity-0 animate-fade-in animation-delay-1000">
            <p className="text-[10px] md:text-xs tracking-[0.2em] text-mid-grey/60 font-light uppercase">
              Immobilien • Architektur • Automotive • 360° • Luftaufnahmen
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in animation-delay-1000">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-champagne/30 to-transparent" />
      </div>
    </section>
  );
}
