import Container from "../components/Container";
import { useLanguage } from "../context/language";
import { getSiteData } from "../data/siteData";

function Services() {
  const { language } = useLanguage();
  const { services } = getSiteData(language);

  return (
    <section id="services" className="bg-slate-950 py-24 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal="left" className="cgx-image-blend cgx-image-blend-soft">
            <img loading="lazy" src={`${import.meta.env.BASE_URL}assets/cgx-services-clean.png`} alt={language === "es" ? "Servicios integrales de comercio internacional" : "Comprehensive international trade services"} className="mx-auto max-h-[720px] object-contain" />
          </div>
          <div data-reveal="right" className="text-center lg:text-left">
            <p className="cgx-subtitle mb-4 text-sm uppercase tracking-[0.3em] text-gold">{language === "es" ? "Soluciones integrales" : "Comprehensive solutions"}</p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">{language === "es" ? "Servicios pensados para crecer" : "Services designed for growth"}</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300 lg:mx-0">{language === "es" ? "Diseñamos estrategias adaptadas a cada operación, conectando oportunidades, proveedores y mercados." : "We design strategies tailored to each operation, connecting opportunities, suppliers, and markets."}</p>
            <div data-reveal="stagger" className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="mx-auto w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-5 text-center md:max-w-none">
                  <h3 className="mb-4 font-serif text-lg leading-snug text-gold sm:text-xl">{service.title}</h3>
                  <ul className="mx-auto inline-block space-y-2 text-left text-sm text-slate-300">{service.items.map((item) => <li key={item}>• {item}</li>)}</ul>
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
