import Container from "../components/Container";
import { useLanguage } from "../context/language";

function Hero() {
  const { language } = useLanguage();
  const text = language === "es"
    ? {
        title: "Soluciones integrales de comercio internacional",
        description: "Nos ocupamos de la complejidad del comercio internacional para que nuestros clientes puedan comprar o vender al mundo sin complicaciones.",
        contact: "Solicitar asesoramiento",
        services: "Conocer servicios",
      }
    : {
        title: "Comprehensive international trade solutions",
        description: "We handle the complexities of international trade so our clients can buy from or sell to the world without complications.",
        contact: "Request consulting",
        services: "Explore services",
      };

  return (
    <section id="hero" className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
      <img src="./assets/cgx-hero-port.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-slate-950/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.3)_0%,rgba(2,6,23,0.45)_52%,rgba(2,6,23,0.68)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-transparent to-slate-950/55" />
      <Container>
        <div data-reveal="up" className="relative z-10 mx-auto max-w-4xl text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
          <img src="./assets/cgx-logo-international-clean.png" alt="CGX International" className="mx-auto mb-8 w-48 sm:w-56" />
          <p className="cgx-subtitle text-sm uppercase tracking-[0.3em] text-gold sm:text-base">Global trade & business solutions</p>
          <h1 className="mt-7 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">{text.title}</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">{text.description}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="rounded-md bg-gold px-6 py-3 font-semibold text-slate-950 transition hover:bg-gold/85">{text.contact}</a>
            <a href="#services" className="rounded-md border border-white/30 px-6 py-3 font-medium transition hover:border-gold hover:text-gold">{text.services}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
