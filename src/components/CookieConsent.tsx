"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentChoice = "all" | "essential" | null;

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("orweo-cookie-consent");
    if (!consent) {
      // Kurze Verzögerung damit die Seite erst lädt
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: ConsentChoice) => {
    localStorage.setItem("orweo-cookie-consent", choice || "essential");
    localStorage.setItem("orweo-cookie-consent-date", new Date().toISOString());
    setVisible(false);

    // Hier können später Analytics aktiviert werden
    if (choice === "all") {
      // z.B. Google Analytics, Meta Pixel etc. aktivieren
      console.log("Analytics consent granted");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-dark-card/95 backdrop-blur-xl border border-dark-border rounded-lg p-6 sm:p-8 shadow-2xl">
        {/* Text */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-off-white mb-2">
            Cookie-Einstellungen
          </h3>
          <p className="text-sm text-mid-grey font-light leading-relaxed">
            Diese Website verwendet Cookies. Essenzielle Cookies sind für die
            Grundfunktionen der Website erforderlich. Optionale Cookies helfen
            uns, die Website zu verbessern und relevante Inhalte anzuzeigen.
            Mehr dazu in unserer{" "}
            <Link
              href="/datenschutz"
              className="text-champagne hover:text-champagne-light underline transition-colors"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => handleConsent("all")}
            className="btn-primary text-center justify-center"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={() => handleConsent("essential")}
            className="btn-secondary text-center justify-center"
          >
            Nur essenzielle
          </button>
        </div>
      </div>
    </div>
  );
}
