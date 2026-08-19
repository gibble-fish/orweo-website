"use client";

import { useState } from "react";

const projectTypes = [
  "Immobilien",
  "Architektur",
  "Grundstück",
  "Automotive",
  "Luftaufnahmen",
  "360°-Panorama",
  "Projekt / Unternehmen",
  "Sonstiges",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    timeframe: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        alert(data.error || "Beim Senden ist ein Fehler aufgetreten.");
      }
    } catch {
      alert("Verbindungsfehler. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="kontakt" className="py-24 lg:py-32 section-dark">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="glass-card rounded-lg p-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-champagne"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-extralight text-off-white mb-4">
              Anfrage gesendet
            </h3>
            <p className="text-mid-grey font-light">
              Vielen Dank für deine Anfrage. Ich melde mich zeitnah bei dir.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="kontakt" className="py-24 lg:py-32 section-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Info */}
          <div>
            <p className="text-[11px] tracking-[0.3em] text-champagne uppercase mb-4 font-light">
              Kontakt
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-off-white tracking-tight mb-6">
              Projekt anfragen
            </h2>
            <p className="text-mid-grey text-base leading-relaxed font-light mb-12">
              Du hast ein Projekt, das aus einer besonderen Perspektive gezeigt
              werden soll? Beschreib kurz, was du dir vorstellst – ich melde mich
              zeitnah bei dir.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-champagne/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-sm text-off-white/70 font-light">kontakt@orweo.de</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-champagne/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="text-sm text-off-white/70 font-light">0157 3534 0928</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-champagne/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="text-sm text-off-white/70 font-light">Leichlingen & Umgebung</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-5 mt-10">
              <a href="#" className="text-mid-grey hover:text-champagne transition-colors duration-300" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-mid-grey hover:text-champagne transition-colors duration-300" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="text-mid-grey hover:text-champagne transition-colors duration-300" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[10px] text-mid-grey uppercase tracking-[0.2em] mb-2 font-light">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-dark-card border border-dark-border rounded-sm text-sm text-off-white placeholder-mid-grey/40 focus:outline-none focus:border-champagne/50 transition-colors font-light"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[10px] text-mid-grey uppercase tracking-[0.2em] mb-2 font-light">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-dark-card border border-dark-border rounded-sm text-sm text-off-white placeholder-mid-grey/40 focus:outline-none focus:border-champagne/50 transition-colors font-light"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-[10px] text-mid-grey uppercase tracking-[0.2em] mb-2 font-light">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-dark-card border border-dark-border rounded-sm text-sm text-off-white placeholder-mid-grey/40 focus:outline-none focus:border-champagne/50 transition-colors font-light"
                    placeholder="deine@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] text-mid-grey uppercase tracking-[0.2em] mb-2 font-light">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-dark-card border border-dark-border rounded-sm text-sm text-off-white placeholder-mid-grey/40 focus:outline-none focus:border-champagne/50 transition-colors font-light"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="projectType" className="block text-[10px] text-mid-grey uppercase tracking-[0.2em] mb-2 font-light">
                    Projektart *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-dark-card border border-dark-border rounded-sm text-sm text-off-white focus:outline-none focus:border-champagne/50 transition-colors appearance-none font-light"
                  >
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-[10px] text-mid-grey uppercase tracking-[0.2em] mb-2 font-light">
                    Standort
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-dark-card border border-dark-border rounded-sm text-sm text-off-white placeholder-mid-grey/40 focus:outline-none focus:border-champagne/50 transition-colors font-light"
                    placeholder="Ort des Projekts"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="timeframe" className="block text-[10px] text-mid-grey uppercase tracking-[0.2em] mb-2 font-light">
                  Gewünschter Zeitraum
                </label>
                <input
                  type="text"
                  id="timeframe"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-dark-card border border-dark-border rounded-sm text-sm text-off-white placeholder-mid-grey/40 focus:outline-none focus:border-champagne/50 transition-colors font-light"
                  placeholder="z. B. nächste Woche, flexibel, ..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] text-mid-grey uppercase tracking-[0.2em] mb-2 font-light">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-dark-card border border-dark-border rounded-sm text-sm text-off-white placeholder-mid-grey/40 focus:outline-none focus:border-champagne/50 transition-colors resize-none font-light"
                  placeholder="Beschreib kurz dein Projekt..."
                />
              </div>

              {/* Privacy Note */}
              <p className="text-[11px] text-mid-grey/70 font-light">
                Mit dem Absenden erklärst du dich mit der Verarbeitung deiner
                Daten gemäß unserer{" "}
                <a href="/datenschutz" className="underline hover:text-champagne transition-colors">
                  Datenschutzerklärung
                </a>{" "}
                einverstanden.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Wird gesendet..." : "Projekt anfragen"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
