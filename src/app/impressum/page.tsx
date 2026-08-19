import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – ORWEO",
  description: "Impressum und Angaben gemäß § 5 TMG.",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-light text-off-white mb-12 font-[family-name:var(--font-space-grotesk)]">
          Impressum
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-mid-grey">
          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Marvin Hinz<br />
              Krähwinkeler Weg 36a<br />
              42799 Leichlingen
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              Kontakt
            </h2>
            <p>
              Telefon: 0157 3534 0928<br />
              E-Mail: kontakt@orweo.de
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              Umsatzsteuer-ID
            </h2>
            <p>
              Eine Umsatzsteuer-Identifikationsnummer gemäß § 27a
              Umsatzsteuergesetz liegt derzeit nicht vor.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Marvin Hinz<br />
              Krähwinkeler Weg 36a<br />
              42799 Leichlingen
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              Haftungsausschluss
            </h2>
            <h3 className="text-base text-off-white/80 font-medium mb-2">
              Haftung für Inhalte
            </h3>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter
              bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
              bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
            <h3 className="text-base text-off-white/80 font-medium mb-2 mt-4">
              Haftung für Links
            </h3>
            <p>
              Diese Website enthält ggf. Links zu externen Websites Dritter,
              auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              verantwortlich. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              Urheberrecht
            </h2>
            <p>
              Die durch den Betreiber dieser Seite erstellten Inhalte und Werke
              unterliegen dem deutschen Urheberrecht. Jegliche Vervielfältigung,
              Bearbeitung, Verbreitung oder Nutzung außerhalb der Grenzen des
              Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
