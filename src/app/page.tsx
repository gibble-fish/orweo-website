import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { References } from "@/components/References";
import { Contact } from "@/components/Contact";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <Portfolio />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Process />
      </ScrollReveal>
      <ScrollReveal>
        <References />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      {/* Final CTA Section */}
      <ScrollReveal direction="none">
        <section className="py-24 lg:py-32 section-warm-dark border-t border-champagne/5">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-[11px] tracking-[0.3em] text-champagne uppercase mb-4 font-light">
              Bereit?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-off-white tracking-tight mb-4">
              Bereit für eine neue Perspektive?
            </h2>
            <p className="text-mid-grey text-base font-light mb-10">
              Zeig dein Objekt, dein Fahrzeug oder dein Projekt aus einer
              Perspektive, die Eindruck hinterlässt.
            </p>
            <a href="#kontakt" className="btn-primary">
              Unverbindliches Angebot erhalten
            </a>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
