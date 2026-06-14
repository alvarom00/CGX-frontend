import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { useLanguage } from "../context/language";
import { getSiteData } from "../data/siteData";

function WhyUs() {
  const { language } = useLanguage();
  const { reasons } = getSiteData(language);
  return (
    <section id="why-us" className="bg-slate-100 py-24">
      <Container>
        <div data-reveal="up"><SectionTitle title={language === "es" ? "¿Por qué elegir CGX?" : "Why choose CGX?"} /></div>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div data-reveal="stagger" className="grid gap-6 sm:grid-cols-2">{reasons.map((reason) => <Card key={reason}><h3 className="font-serif text-xl font-semibold text-slate-950">{reason}</h3></Card>)}</div>
          <img data-reveal="right" loading="lazy" src={`${import.meta.env.BASE_URL}assets/cgx-opportunities-clean.png`} alt={language === "es" ? "Generamos oportunidades internacionales" : "We create international opportunities"} className="mx-auto max-h-[680px] rounded-2xl object-cover shadow-2xl" />
        </div>
      </Container>
    </section>
  );
}
export default WhyUs;
