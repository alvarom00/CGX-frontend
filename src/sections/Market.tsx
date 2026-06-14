import Container from "../components/Container";
import { useLanguage } from "../context/language";

function Market() {
  const { language } = useLanguage();
  const marketImage = language === "es" ? "cgx-market-regenerated.png" : "cgx-market-en.png";

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <img data-reveal="left" loading="lazy" src={`${import.meta.env.BASE_URL}assets/${marketImage}`} alt={language === "es" ? "El mundo es tu próximo mercado" : "The world is your next market"} className="order-2 mx-auto max-h-[680px] rounded-2xl object-contain shadow-2xl lg:order-1" />
          <div data-reveal="right" className="order-1 text-center lg:order-2 lg:text-left">
            <p className="cgx-subtitle mb-4 text-sm uppercase tracking-[0.3em] text-gold">{language === "es" ? "Nuevos mercados" : "New markets"}</p>
            <h2 className="font-serif text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl">{language === "es" ? "Crecer más allá de las fronteras." : "Grow beyond borders."}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{language === "es" ? "Transformamos objetivos comerciales en estrategias concretas, conectando empresas con oportunidades internacionales." : "We turn business objectives into concrete strategies, connecting companies with international opportunities."}</p>
            <a href="#contact" className="mt-8 inline-block rounded-md bg-slate-950 px-6 py-3 font-semibold text-gold transition hover:bg-gold hover:text-slate-950">{language === "es" ? "Conversemos" : "Let's talk"}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Market;
