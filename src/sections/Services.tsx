import Container from "../components/Container";
import { services } from "../data/siteData";

function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal="left" className="cgx-image-blend cgx-image-blend-soft">
            <img
              loading="lazy"
              src={`${import.meta.env.BASE_URL}assets/cgx-services.png`}
              alt="Servicios integrales de comercio internacional"
              className="mx-auto max-h-[720px] object-contain"
            />
          </div>
          <div data-reveal="right">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Soluciones integrales</p>
            <h2 className="font-serif text-4xl sm:text-5xl">Servicios pensados para crecer</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">
              Diseñamos estrategias adaptadas a cada operación, conectando oportunidades, proveedores y mercados.
            </p>
            <div data-reveal="stagger" className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h3 className="mb-4 font-serif text-xl text-amber-300">{service.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {service.items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;
