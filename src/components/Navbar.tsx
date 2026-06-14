import { useState } from "react";
import Container from "./Container";
import { useLanguage } from "../context/language";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const links = language === "es"
    ? [{ label: "Contacto", href: "#contact" }, { label: "Servicios", href: "#services" }, { label: "Proceso", href: "#process" }]
    : [{ label: "Contact", href: "#contact" }, { label: "Services", href: "#services" }, { label: "Process", href: "#process" }];

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-slate-950/95 backdrop-blur">
      <Container>
        <nav className="relative flex h-24 items-center justify-between">
          <a href="#hero" aria-label="CGX International - Home" className="flex h-20 items-center" onClick={() => setIsMenuOpen(false)}>
            <img src={`${import.meta.env.BASE_URL}assets/cgx-logo-international-clean.png`} alt="CGX International" className="h-20 w-auto object-contain" />
          </a>
          <ul className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group relative block rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide text-slate-200 transition duration-300 hover:bg-white/5 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                  {link.label}
                  <span className="absolute inset-x-5 bottom-1 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
            <li><button type="button" onClick={toggleLanguage} aria-label={language === "es" ? "Translate to English" : "Traducir al español"} className="ml-2 rounded-full border border-gold/50 px-4 py-2 text-sm font-bold text-gold transition hover:bg-gold hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">{language === "es" ? "EN" : "ES"}</button></li>
          </ul>
          <button type="button" aria-label={isMenuOpen ? (language === "es" ? "Cerrar menú" : "Close menu") : (language === "es" ? "Abrir menú" : "Open menu")} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((isOpen) => !isOpen)} className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-white/5 text-gold shadow-lg shadow-black/20 transition duration-300 hover:border-gold hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:hidden">
            <span className="relative block h-5 w-6">
              <span className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? "translate-y-[9px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[9px] h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? "scale-x-0 opacity-0" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
            </span>
          </button>
          <div className={`absolute left-0 right-0 top-24 overflow-hidden border-b border-gold/20 bg-[#020617] shadow-2xl shadow-black/60 transition-all duration-300 md:hidden ${isMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}>
            <ul className="space-y-1 px-5 py-5">
              {links.map((link) => <li key={link.href}><a href={link.href} onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-3.5 font-semibold text-slate-100 transition duration-300 hover:border-gold/20 hover:bg-white/5 hover:text-gold">{link.label}<span className="text-gold transition-transform duration-300 group-hover:translate-x-1">→</span></a></li>)}
              <li><button type="button" onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} className="mt-2 w-full rounded-xl border border-gold/40 px-4 py-3.5 text-left font-semibold text-gold transition hover:bg-gold hover:text-slate-950">{language === "es" ? "English" : "Español"}</button></li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
