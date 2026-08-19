"use client";

const services = [
  {
    id: "immobilien",
    title: "Immobilien",
    subtitle: "Immobilien aus einer neuen Perspektive.",
    description:
      "Professionelle Drohnenaufnahmen für Immobilienverkauf, Vermietung und Präsentation. Zeig dein Objekt aus einer Perspektive, die im Gedächtnis bleibt.",
    features: [
      "Drohnenfotos & Luftbilder",
      "Drohnenvideos",
      "Außenaufnahmen & Gebäude",
      "Grundstücke & Umgebung",
      "Lage & Zufahrten",
    ],
    cta: "Immobilie präsentieren",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21" />
      </svg>
    ),
  },
  {
    id: "architektur",
    title: "Architektur",
    subtitle: "Architektur sichtbar machen.",
    description:
      "Professionelle Aufnahmen von Gebäuden, Neubauten und Gewerbeimmobilien aus besonderen Perspektiven, die Architektur erlebbar machen.",
    features: [
      "Gebäude & Neubauten",
      "Gewerbeimmobilien",
      "Außenanlagen",
      "Bauprojekte",
      "Referenzprojekte",
    ],
    cta: "Projekt anfragen",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    id: "automotive",
    title: "Automotive",
    subtitle: "Fahrzeuge aus einer neuen Perspektive.",
    description:
      "Professionelle und emotionale Fahrzeugaufnahmen aus der Luft. Dynamisch, filmisch und einzigartig – für Autohäuser, Fahrzeughändler und besondere Fahrzeuge.",
    features: [
      "Dynamische Drohnenaufnahmen",
      "Filmische Fahrzeugaufnahmen",
      "Fahrzeugpräsentationen",
      "Besondere Locations",
      "Detailaufnahmen aus der Luft",
    ],
    cta: "Projekt anfragen",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 14.5c0-1 .5-2 1.5-2.5L5 11l1.5-3c.5-1 1.5-1.5 2.5-1.5h6c1 0 2 .5 2.5 1.5L19 11l1.5 1c1 .5 1.5 1.5 1.5 2.5v2a1 1 0 01-1 1h-1a2 2 0 01-4 0H8a2 2 0 01-4 0H3a1 1 0 01-1-1v-2z" />
        <circle cx="6" cy="17.5" r="1.5" />
        <circle cx="18" cy="17.5" r="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 11h14M9 8l-1 3M15 8l1 3" />
      </svg>
    ),
  },
  {
    id: "360-panorama",
    title: "360° Panorama",
    subtitle: "Räumliche Eindrücke aus der Luft.",
    description:
      "360°-Panoramaaufnahmen aus der Luft für einen umfassenden räumlichen Eindruck. Ideal für Immobilien, Grundstücke und besondere Orte.",
    features: [
      "360°-Panoramen aus der Luft",
      "Interaktive Rundblicke",
      "Immobilien & Grundstücke",
      "Besondere Orte",
      "Projekte & Außenanlagen",
    ],
    cta: "Projekt anfragen",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    id: "luftaufnahmen",
    title: "Luftaufnahmen",
    subtitle: "Professionelle Perspektiven von oben.",
    description:
      "Professionelle Luftbilder und Übersichtsaufnahmen für Unternehmen, Immobilienbesitzer, Bauunternehmen, Architekten und Projektentwickler.",
    features: [
      "Luftbilder & Übersichtsaufnahmen",
      "Gebäude & Grundstücke",
      "Projekte & Außenanlagen",
      "Unternehmensstandorte",
      "Landschaft & Umgebung",
    ],
    cta: "Projekt anfragen",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="leistungen" className="py-24 lg:py-32 section-warm-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.3em] text-champagne uppercase mb-4 font-light">
            Leistungen
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-off-white tracking-tight">
            Was ich biete
          </h2>
          <div className="divider-champagne max-w-24 mx-auto mt-8" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group glass-card rounded-lg p-8 lg:p-10 hover:border-champagne/20 transition-all duration-500 text-center"
            >
              {/* Icon */}
              <div className="text-champagne mb-6 group-hover:scale-110 transition-transform duration-500 flex justify-center">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-off-white mb-2 tracking-wide">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className="text-champagne/70 text-sm mb-4 font-light">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-mid-grey text-sm leading-relaxed mb-6 font-light">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 inline-block text-left">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-off-white/60 flex items-center gap-3 font-light"
                  >
                    <span className="w-1 h-1 bg-champagne rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div>
                <a
                  href="#kontakt"
                  className="inline-flex items-center text-sm text-champagne/80 hover:text-champagne transition-colors duration-300 group/link font-light"
                >
                  {service.cta}
                  <svg
                    className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <a href="#kontakt" className="btn-primary">
            Projekt anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
