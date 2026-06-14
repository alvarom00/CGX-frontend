import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../context/language";
import { getSiteData } from "../data/siteData";

function Process() {
  const { language } = useLanguage();
  const { steps } = getSiteData(language);
  return (
    <section id="process" className="bg-white py-24">
      <Container>
        <div data-reveal="up"><SectionTitle title={language === "es" ? "¿Cómo trabajamos?" : "How do we work?"} subtitle={language === "es" ? "Un proceso claro y acompañado de principio a fin." : "A clear, supported process from start to finish."} /></div>
        <div data-reveal="stagger" className="grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => <div key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center"><div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-slate-950 font-bold text-gold">{index + 1}</div><h3 className="font-semibold text-slate-950">{step}</h3></div>)}
        </div>
      </Container>
    </section>
  );
}
export default Process;
