import Container from "../components/Container";
import { useLanguage } from "../context/language";

function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="border-t border-gold/20 bg-slate-950 py-12 text-white">
      <Container>
        <div data-reveal="up" className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <img
            src={`${import.meta.env.BASE_URL}assets/cgx-logo-international-clean.png`}
            alt="CGX International"
            className="h-24 w-auto"
          />
          <div className="text-center text-sm text-slate-400 sm:text-right">
            <p>Global trade & business solutions</p>
            <p className="mt-2">© 2026 CGX International · {language === "es" ? "Todos los derechos reservados" : "All rights reserved"}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
