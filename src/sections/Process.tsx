import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const steps = ["Diagnóstico", "Estrategia", "Gestión", "Seguimiento", "Resultados"];

function Process() {
  return (
    <section id="process" className="bg-white py-24">
      <Container>
        <div data-reveal="up">
          <SectionTitle title="¿Cómo trabajamos?" subtitle="Un proceso claro y acompañado de principio a fin." />
        </div>
        <div data-reveal="stagger" className="grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-amber-500 bg-slate-950 font-bold text-amber-300">
                {index + 1}
              </div>
              <h3 className="font-semibold text-slate-950">{step}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;
