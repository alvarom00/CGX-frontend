import Container from "../components/Container";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 py-12 text-white sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal="left" className="relative z-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Global trade & business solutions
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Soluciones integrales de comercio internacional.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Acompañamos a PyMEs, productores, industriales y empresas
              agropecuarias en sus procesos de importación y exportación.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400">
                Solicitar asesoramiento
              </a>
              <a href="#services" className="rounded-md border border-white/30 px-6 py-3 font-medium transition hover:border-amber-400 hover:text-amber-300">
                Conocer servicios
              </a>
            </div>
          </div>
          <div data-reveal="right" className="cgx-image-blend relative">
            <img
              src={`${import.meta.env.BASE_URL}assets/cgx-welcome.png`}
              alt="Bienvenidos a CGX International"
              className="mx-auto max-h-[650px] w-full object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
