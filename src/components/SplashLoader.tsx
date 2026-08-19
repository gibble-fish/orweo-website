"use client";

import { useState, useEffect } from "react";

export function SplashLoader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Prüfe ob der Splash schon gezeigt wurde (Session)
    const alreadyShown = sessionStorage.getItem("orweo-splash-shown");
    if (alreadyShown) {
      setHidden(true);
      setRemoved(true);
      return;
    }

    // Splash ausblenden nach 2.2s
    const hideTimer = setTimeout(() => {
      setHidden(true);
      sessionStorage.setItem("orweo-splash-shown", "true");
    }, 2200);

    // Aus DOM entfernen nach Fade-Out
    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 2800);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`splash-screen ${hidden ? "splash-hidden" : ""}`}>
      {/* Logo */}
      <div className="splash-logo">
        <svg viewBox="0 0 320 50" fill="none" width="280" height="44">
          {/* O */}
          <path
            d="M8 25C8 13.954 14.954 7 22 7C29.046 7 36 13.954 36 25C36 36.046 29.046 43 22 43C14.954 43 8 36.046 8 25Z"
            stroke="#F3F3F0"
            strokeWidth="3"
            fill="none"
          />
          {/* R */}
          <path d="M58 7V43" stroke="#F3F3F0" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M58 7H70C77 7 82 12 82 18.5C82 25 77 30 70 30H58"
            stroke="#F3F3F0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M72 30L83 43" stroke="#F3F3F0" strokeWidth="3" strokeLinecap="round" />
          {/* W */}
          <path
            d="M102 7L111 38L122 18L133 38L142 7"
            stroke="#F3F3F0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* E - THREE BARS */}
          <rect x="164" y="7" width="28" height="3" rx="1.5" fill="#F3F3F0" />
          <rect x="164" y="23.5" width="22" height="3" rx="1.5" fill="#D4C3A1" />
          <rect x="164" y="40" width="28" height="3" rx="1.5" fill="#F3F3F0" />
          {/* O */}
          <path
            d="M218 25C218 13.954 224.954 7 232 7C239.046 7 246 13.954 246 25C246 36.046 239.046 43 232 43C224.954 43 218 36.046 218 25Z"
            stroke="#F3F3F0"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* Claim */}
      <p className="splash-claim mt-6 text-[11px] tracking-[0.35em] text-champagne uppercase font-light">
        Visuals that make an impact.
      </p>

      {/* Decorative bar */}
      <div className="splash-bar mt-8" />
    </div>
  );
}
