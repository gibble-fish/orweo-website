export function References() {
  return (
    <section id="referenzen" className="py-24 lg:py-32 section-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] text-champagne uppercase mb-4 font-light">
            Referenzen
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-off-white tracking-tight">
            Kunden & Projekte
          </h2>
          <div className="divider-champagne max-w-24 mx-auto mt-8" />
        </div>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="glass-card rounded-lg p-10 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-champagne/15 flex items-center justify-center bg-dark-card">
                <span className="text-[10px] text-mid-grey/50 tracking-wider">[LOGO]</span>
              </div>
              <p className="text-sm text-off-white/80 mb-1 font-light">[KUNDE]</p>
              <p className="text-[11px] text-mid-grey/60 font-light">[PROJEKT]</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-mid-grey/60 mt-12 font-light">
          Weitere Referenzen folgen in Kürze.
        </p>
      </div>
    </section>
  );
}
