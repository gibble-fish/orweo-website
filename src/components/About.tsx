export function About() {
  return (
    <section id="ueber-mich" className="py-24 lg:py-32 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="/images/ueber-mich.jpeg"
                alt="Marvin Hinz – ORWEO"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border border-champagne/30 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-[11px] tracking-[0.3em] text-champagne-dark uppercase mb-4 font-light">
              Über mich
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight text-near-black tracking-tight mb-8">
              Die Person hinter ORWEO
            </h2>

            <div className="space-y-4 text-mid-grey leading-relaxed font-light">
              <p>
                Hinter ORWEO stehe ich als Marvin Hinz – mit dem Anspruch, Immobilien,
                Architektur, Fahrzeuge und Projekte aus Perspektiven zu zeigen, die
                einen bleibenden Eindruck hinterlassen.
              </p>
              <p>
                Seit Jahren arbeite ich mit verschiedenen Drohnensystemen – von agilen
                FPV-Drohnen für dynamische Aufnahmen bis hin zu cinematischen Drohnen
                für ruhige, hochauflösende Luftbilder. Die gesamte Nachbearbeitung,
                von Videoschnitt bis Color Grading, übernehme ich selbst.
              </p>
            </div>

            {/* Details */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white border border-black/5 rounded-lg p-5">
                <h4 className="text-[10px] text-champagne-dark uppercase tracking-[0.2em] mb-2 font-medium">
                  Standort
                </h4>
                <p className="text-sm text-near-black font-light">Leichlingen & Umgebung</p>
              </div>
              <div className="bg-white border border-black/5 rounded-lg p-5">
                <h4 className="text-[10px] text-champagne-dark uppercase tracking-[0.2em] mb-2 font-medium">
                  Equipment
                </h4>
                <p className="text-sm text-near-black font-light">DJI Avata 2, DJI Mavic 4 Pro</p>
              </div>
              <div className="bg-white border border-black/5 rounded-lg p-5">
                <h4 className="text-[10px] text-champagne-dark uppercase tracking-[0.2em] mb-2 font-medium">
                  Schwerpunkt
                </h4>
                <p className="text-sm text-near-black font-light">
                  Professionelle Drohnenaufnahmen
                </p>
              </div>
              <div className="bg-white border border-black/5 rounded-lg p-5">
                <h4 className="text-[10px] text-champagne-dark uppercase tracking-[0.2em] mb-2 font-medium">
                  Arbeitsweise
                </h4>
                <p className="text-sm text-near-black font-light">Persönlich, flexibel, alles aus einer Hand</p>
              </div>
            </div>

            {/* Zertifizierung */}
            <div className="mt-8">
              <a
                href="/images/A2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white border border-black/5 rounded-lg p-5 hover:border-champagne-dark/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-champagne-dark/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-champagne-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] text-champagne-dark uppercase tracking-[0.2em] mb-1 font-medium">
                    Zertifizierung
                  </h4>
                  <p className="text-sm text-near-black font-light">
                    EU-Fernpiloten-Zeugnis A2 (Drohnenführerschein)
                  </p>
                </div>
                <svg className="w-4 h-4 text-mid-grey group-hover:text-champagne-dark transition-colors ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
