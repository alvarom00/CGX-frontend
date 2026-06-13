import { useState } from "react";
import Container from "./Container";

const links = [
  { label: "Contacto", href: "#contact" },
  { label: "Servicios", href: "#services" },
  { label: "Proceso", href: "#process" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-300/20 bg-slate-950/95 backdrop-blur">
      <Container>
        <nav className="relative flex h-24 items-center justify-between">
          <a
            href="#hero"
            aria-label="CGX International - Inicio"
            className="flex h-20 items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/assets/cgx-logo-navbar-international.png"
              alt="CGX International"
              className="h-20 w-auto object-contain"
            />
          </a>

          <ul className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative block rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide text-slate-200 transition duration-300 hover:bg-white/5 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  <span className="absolute inset-x-5 bottom-1 h-px origin-left scale-x-0 bg-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="relative flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/40 bg-white/5 text-amber-300 shadow-lg shadow-black/20 transition duration-300 hover:border-amber-300 hover:bg-amber-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 md:hidden"
          >
            <span className="relative block h-5 w-6">
              <span className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? "translate-y-[9px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[9px] h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? "scale-x-0 opacity-0" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-current transition duration-300 ${isMenuOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
            </span>
          </button>

          <div
            className={`absolute left-0 right-0 top-24 overflow-hidden border-b border-amber-300/20 bg-[#020617] shadow-2xl shadow-black/60 transition-all duration-300 md:hidden ${
              isMenuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-3 opacity-0"
            }`}
          >
            <ul className="space-y-1 px-5 py-5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-3.5 font-semibold text-slate-100 transition duration-300 hover:border-amber-300/20 hover:bg-white/5 hover:text-amber-300"
                  >
                    {link.label}
                    <span className="text-amber-400 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
