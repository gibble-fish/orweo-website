import Link from "next/link";
import { OrweoLogo } from "@/components/OrweoLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center section-dark">
      {/* Logo */}
      <OrweoLogo className="h-8 mb-12 opacity-40" />

      {/* 404 */}
      <p className="text-[11px] tracking-[0.3em] text-champagne uppercase mb-4 font-light">
        Fehler 404
      </p>

      <h1 className="text-4xl md:text-5xl font-extralight text-off-white tracking-tight mb-4">
        Seite nicht gefunden
      </h1>

      <p className="text-mid-grey text-base font-light max-w-md mb-10">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary">
          Zur Startseite
        </Link>
        <Link href="/#kontakt" className="btn-secondary">
          Kontakt aufnehmen
        </Link>
      </div>

      {/* Decorative line */}
      <div className="divider-champagne w-16 mt-16" />
    </div>
  );
}
