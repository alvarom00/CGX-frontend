import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { audience } from "../data/siteData";

function Audience() {
  return (
    <section id="audience" className="bg-slate-100 py-24">
      <Container>
        <div data-reveal="up">
          <SectionTitle title="¿A quién ayudamos?" subtitle="Trabajamos con empresas que buscan expandir sus oportunidades internacionales." />
        </div>
        <div data-reveal="stagger" className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <Card key={item.title}>
              <h3 className="mb-3 font-serif text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="leading-relaxed text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Audience;
