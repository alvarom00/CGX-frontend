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
    <section id="hero" className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-slate-950 py-10 text-white sm:min-h-[calc(100svh-6rem)] sm:py-20 lg:py-24">
      <img src="./assets/cgx-hero-port.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-slate-950/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.3)_0%,rgba(2,6,23,0.45)_52%,rgba(2,6,23,0.68)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-transparent to-slate-950/55" />
      <Container>
        <div data-reveal="up" className="relative z-10 mx-auto w-full max-w-5xl text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
          <img src="./assets/cgx-logo-international-clean.png" alt="CGX International" className="mx-auto mb-5 w-36 sm:mb-7 sm:w-48 lg:w-56" />
          <p className="cgx-subtitle mx-auto max-w-[20rem] text-[0.68rem] uppercase leading-relaxed tracking-[0.2em] text-gold sm:max-w-none sm:text-sm sm:tracking-[0.3em] lg:text-base">Global trade & business solutions</p>
          <h1 className="mx-auto mt-5 max-w-[18ch] font-serif text-[clamp(2rem,8.5vw,4.5rem)] leading-[1.18] sm:mt-7 sm:leading-[1.15]">{text.title}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:mt-7 sm:text-lg lg:text-xl">{text.description}</p>
          <div className="mx-auto mt-7 flex max-w-sm flex-col justify-center gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="#contact" className="rounded-md bg-gold px-5 py-3 font-semibold text-slate-950 transition hover:bg-gold/85 sm:px-6">{text.contact}</a>
            <a href="#services" className="rounded-md border border-white/30 px-5 py-3 font-medium transition hover:border-gold hover:text-gold sm:px-6">{text.services}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
