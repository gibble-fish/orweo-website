import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – ORWEO",
  description: "Datenschutzerklärung gemäß DSGVO.",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-light text-off-white mb-12">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-mid-grey">
          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-base text-off-white/80 font-medium mb-2">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit deinen personenbezogenen Daten passiert, wenn du diese
              Website besuchst. Personenbezogene Daten sind alle Daten, mit
              denen du persönlich identifiziert werden kannst.
            </p>
            <h3 className="text-base text-off-white/80 font-medium mb-2 mt-4">
              Datenerfassung auf dieser Website
            </h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten kannst du dem Abschnitt
              „Verantwortlicher" entnehmen.
            </p>
            <p>
              Deine Daten werden zum einen dadurch erhoben, dass du uns diese
              mitteilst (z.&nbsp;B. über das Kontaktformular). Andere Daten werden
              automatisch oder nach deiner Einwilligung beim Besuch der Website
              durch unsere IT-Systeme erfasst. Das sind vor allem technische
              Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des
              Seitenaufrufs).
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              2. Verantwortlicher
            </h2>
            <p>
              Marvin Hinz<br />
              Krähwinkeler Weg 36a<br />
              42799 Leichlingen<br />
              E-Mail: kontakt@orweo.de<br />
              Telefon: 0157 3534 0928
            </p>
            <p className="mt-2">
              Der Verantwortliche ist die natürliche Person, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
              von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Hierbei kann es sich v.&nbsp;a. um IP-Adressen, Kontaktanfragen,
              Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
              Namen, Websitezugriffe und sonstige Daten, die über eine Website
              generiert werden, handeln.
            </p>
            <p>
              Der Einsatz des Hosters erfolgt im Interesse einer sicheren,
              schnellen und effizienten Bereitstellung unseres Online-Angebots
              durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f
              DSGVO). Unser Hoster wird deine Daten nur insoweit verarbeiten,
              wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist
              und unsere Weisungen in Bezug auf diese Daten befolgen.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              4. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="text-base text-off-white/80 font-medium mb-2">
              Datenschutz
            </h3>
            <p>
              Der Betreiber dieser Seite nimmt den Schutz deiner persönlichen
              Daten sehr ernst. Wir behandeln deine personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet
              (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken
              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
              durch Dritte ist nicht möglich.
            </p>
            <h3 className="text-base text-off-white/80 font-medium mb-2 mt-4">
              Widerruf deiner Einwilligung zur Datenverarbeitung
            </h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit deiner
              ausdrücklichen Einwilligung möglich. Du kannst eine bereits
              erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
              der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
              Widerruf unberührt.
            </p>
            <h3 className="text-base text-off-white/80 font-medium mb-2 mt-4">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde zu. Die zuständige
              Aufsichtsbehörde ist der Landesbeauftragte für Datenschutz und
              Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              5. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-base text-off-white/80 font-medium mb-2">
              Cookies
            </h3>
            <p>
              Diese Website verwendet Cookies. Cookies sind kleine Textdateien,
              die auf deinem Endgerät gespeichert werden. Sie richten keinen
              Schaden an und enthalten keine Viren.
            </p>
            <p>
              Wir verwenden folgende Arten von Cookies:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong className="text-off-white/80">Essenzielle Cookies:</strong>{" "}
                Diese sind für den Betrieb der Website technisch notwendig
                (z.&nbsp;B. Speicherung deiner Cookie-Einwilligung). Rechtsgrundlage
                ist Art. 6 Abs. 1 lit. f DSGVO.
              </li>
              <li>
                <strong className="text-off-white/80">Optionale Cookies:</strong>{" "}
                Diese werden nur mit deiner ausdrücklichen Einwilligung gesetzt
                und dienen der Analyse und Verbesserung unserer Website.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
              </li>
            </ul>
            <p className="mt-2">
              Du kannst deine Einwilligung jederzeit über den Cookie-Banner
              oder die Browsereinstellungen widerrufen.
            </p>

            <h3 className="text-base text-off-white/80 font-medium mb-2 mt-4">
              Server-Log-Dateien
            </h3>
            <p>
              Der Provider der Website erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die dein Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Erfassung erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-base text-off-white/80 font-medium mb-2 mt-4">
              Kontaktformular
            </h3>
            <p>
              Wenn du uns per Kontaktformular eine Anfrage zukommen lässt,
              werden deine Angaben aus dem Formular inklusive der von dir dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne deine Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO).
            </p>
            <p>
              Die von dir im Kontaktformular eingegebenen Daten verbleiben bei
              uns, bis du uns zur Löschung aufforderst, deine Einwilligung zur
              Speicherung widerrufst oder der Zweck für die Datenspeicherung
              entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-base text-off-white/80 font-medium mb-2 mt-4">
              Anfrage per E-Mail oder Telefon
            </h3>
            <p>
              Wenn du uns per E-Mail oder Telefon kontaktierst, wird deine
              Anfrage inklusive aller daraus hervorgehenden personenbezogenen
              Daten (Name, Anfrage) zum Zwecke der Bearbeitung deines Anliegens
              bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht
              ohne deine Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              6. Analyse-Tools und Werbung
            </h2>
            <p>
              Derzeit werden auf dieser Website keine Analyse-Tools oder
              Werbedienste eingesetzt. Sollte sich dies in Zukunft ändern, wird
              diese Datenschutzerklärung entsprechend aktualisiert und du wirst
              über den Cookie-Banner um deine Einwilligung gebeten.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              7. Deine Rechte
            </h2>
            <p>Du hast jederzeit das Recht auf:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong className="text-off-white/80">Auskunft</strong> über
                deine bei uns gespeicherten personenbezogenen Daten (Art. 15
                DSGVO)
              </li>
              <li>
                <strong className="text-off-white/80">Berichtigung</strong>{" "}
                unrichtiger Daten (Art. 16 DSGVO)
              </li>
              <li>
                <strong className="text-off-white/80">Löschung</strong> deiner
                bei uns gespeicherten Daten (Art. 17 DSGVO)
              </li>
              <li>
                <strong className="text-off-white/80">
                  Einschränkung der Verarbeitung
                </strong>{" "}
                (Art. 18 DSGVO)
              </li>
              <li>
                <strong className="text-off-white/80">Datenübertragbarkeit</strong>{" "}
                (Art. 20 DSGVO)
              </li>
              <li>
                <strong className="text-off-white/80">Widerspruch</strong> gegen
                die Verarbeitung (Art. 21 DSGVO)
              </li>
            </ul>
            <p className="mt-2">
              Zur Ausübung deiner Rechte genügt eine formlose Mitteilung an
              kontakt@orweo.de.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-off-white font-medium mb-3">
              8. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du
              daran, dass die Adresszeile des Browsers von „http://" auf
              „https://" wechselt und an dem Schloss-Symbol in deiner
              Browserzeile.
            </p>
          </section>

          <section className="border-t border-dark-border pt-6">
            <p className="text-sm text-mid-grey/60">
              Stand: August 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
