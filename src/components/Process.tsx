const steps = [
  {
    number: "01",
    title: "Anfrage",
    description: "Du beschreibst kurz dein Projekt und was du dir vorstellst.",
  },
  {
    number: "02",
    title: "Besprechung",
    description:
      "Ort, Anforderungen, gewünschte Aufnahmen und Termin werden besprochen.",
  },
  {
    number: "03",
    title: "Aufnahme",
    description:
      "Die Drohnenaufnahmen werden professionell vor Ort durchgeführt.",
  },
  {
    number: "04",
    title: "Bearbeitung",
    description: "Auswahl, Bearbeitung und professionelle Aufbereitung.",
  },
  {
    number: "05",
    title: "Übergabe",
    description:
      "Du erhältst die fertigen Bilder und Videos digital – bereit zum Einsatz.",
  },
];

export function Process() {
  return (
    <section id="ablauf" className="py-24 lg:py-32 section-warm-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.3em] text-champagne uppercase mb-4 font-light">
            Ablauf
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-off-white tracking-tight">
            So arbeiten wir zusammen
          </h2>
          <p className="mt-4 text-mid-grey text-base font-light max-w-xl mx-auto">
            Von der Anfrage bis zur Übergabe – einfach, transparent und
            professionell.
          </p>
          <div className="divider-champagne max-w-24 mx-auto mt-8" />
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-8 lg:gap-12 pb-14 last:pb-0">
              {/* Line connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-14 w-px h-[calc(100%-56px)] bg-gradient-to-b from-champagne/30 to-dark-border" />
              )}

              {/* Number circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-champagne/30 flex items-center justify-center bg-dark-card/50">
                <span className="text-sm font-light text-champagne tracking-wider">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="pt-2.5">
                <h3 className="text-lg font-normal text-off-white mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-mid-grey text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="max-w-2xl mx-auto mt-20 text-center glass-card rounded-lg p-10">
          <h3 className="text-lg font-normal text-off-white mb-4 tracking-wide">
            Individuelles Angebot
          </h3>
          <p className="text-mid-grey text-sm leading-relaxed font-light mb-8">
            Jedes Projekt ist individuell. Gerne erstelle ich dir ein
            individuelles und unverbindliches Angebot passend zu deinem Projekt.
          </p>
          <a href="#kontakt" className="btn-primary">
            Unverbindlich anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
