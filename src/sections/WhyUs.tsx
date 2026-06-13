import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

const reasons = ["Atención personalizada", "Experiencia operativa", "Red internacional de contactos", "Soluciones integrales"];

function WhyUs() {
  return (
    <section id="why-us" className="bg-slate-100 py-24">
      <Container>
        <div data-reveal="up">
          <SectionTitle title="¿Por qué elegir CGX?" />
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div data-reveal="stagger" className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => <Card key={reason}><h3 className="font-serif text-xl font-semibold text-slate-950">{reason}</h3></Card>)}
          </div>
          <img data-reveal="right" loading="lazy" src="/assets/cgx-opportunities.png" alt="Generamos oportunidades internacionales" className="mx-auto max-h-[680px] rounded-2xl object-cover shadow-2xl" />
        </div>
      </Container>
    </section>
  );
}

export default WhyUs;
