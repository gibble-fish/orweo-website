"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { OrweoLogo } from "./OrweoLogo";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#start", label: "Startseite" },
    { href: "#leistungen", label: "Leistungen" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#ueber-mich", label: "Über mich" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-near-black/95 backdrop-blur-xl border-b border-champagne/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <OrweoLogo className="h-5 md:h-6 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-off-white/60 hover:text-champagne transition-colors duration-300 tracking-wider uppercase font-light"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="ml-6 btn-primary text-[13px]"
            >
              Projekt anfragen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menü öffnen"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`w-6 h-[1.5px] bg-off-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-off-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-off-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-near-black/98 backdrop-blur-xl transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl text-off-white/70 hover:text-champagne transition-colors duration-300 font-light tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 btn-primary text-base"
          >
            Projekt anfragen
          </a>
        </div>
      </div>
    </header>
  );
}
