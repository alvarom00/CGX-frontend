import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { getSiteData } from "../data/siteData";
import { useLanguage } from "../context/language";

function Audience() {
  const { language } = useLanguage();
  const { audience } = getSiteData(language);
  return (
    <section id="audience" className="bg-slate-100 py-24">
      <Container>
        <div data-reveal="up"><SectionTitle title={language === "es" ? "¿A quién ayudamos?" : "Who do we help?"} subtitle={language === "es" ? "Trabajamos con empresas y personas que buscan expandir sus oportunidades internacionales." : "We work with companies and individuals looking to expand their international opportunities."} /></div>
        <div data-reveal="stagger" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {audience.map((item) => <Card key={item.title}><h3 className="mb-3 font-serif text-2xl font-semibold text-slate-950">{item.title}</h3><p className="leading-relaxed text-slate-600">{item.description}</p></Card>)}
        </div>
      </Container>
    </section>
  );
}
export default Audience;
