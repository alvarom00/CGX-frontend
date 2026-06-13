import Container from "../components/Container";

function Market() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <img
            data-reveal="left"
            loading="lazy"
            src="/assets/cgx-market.png"
            alt="El mundo es tu próximo mercado"
            className="mx-auto max-h-[680px] rounded-2xl object-contain shadow-2xl"
          />
          <div data-reveal="right">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Nuevos mercados
            </p>
            <h2 className="font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
              Crecer más allá de las fronteras.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Transformamos objetivos comerciales en estrategias concretas,
              conectando empresas con oportunidades internacionales.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-md bg-slate-950 px-6 py-3 font-semibold text-amber-300 transition hover:bg-amber-500 hover:text-slate-950"
            >
              Conversemos
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Market;
