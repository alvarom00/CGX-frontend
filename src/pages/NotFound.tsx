import { useEffect } from "react";
import { useLanguage } from "../context/language";

function NotFound() {
  const { language, toggleLanguage } = useLanguage();
  const es = language === "es";

  useEffect(() => {
    document.title = es ? "Página no encontrada | CGX International" : "Page not found | CGX International";
  }, [es]);

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-center text-white">
      <img src={`${import.meta.env.BASE_URL}assets/cgx-hero-port.png`} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.35)_0%,rgba(2,6,23,0.82)_68%,#020617_100%)]" />
      <button type="button" onClick={toggleLanguage} className="absolute right-6 top-6 z-20 rounded-full border border-gold/50 px-4 py-2 text-sm font-bold text-gold transition hover:bg-gold hover:text-slate-950">{es ? "EN" : "ES"}</button>
      <section className="relative z-10 mx-auto max-w-3xl">
        <img src={`${import.meta.env.BASE_URL}assets/cgx-logo-international-clean.png`} alt="CGX International" className="mx-auto w-44 sm:w-52" />
        <p className="mt-8 font-serif text-8xl leading-none text-gold sm:text-9xl">404</p>
        <p className="cgx-subtitle mt-5 text-sm uppercase tracking-[0.3em] text-gold">{es ? "Página no encontrada" : "Page not found"}</p>
        <h1 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">{es ? "Parece que esta ruta no llega a destino." : "It seems this route does not reach its destination."}</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{es ? "La página que buscás no existe o fue trasladada. Podés regresar al inicio o comunicarte con nuestro equipo." : "The page you are looking for does not exist or has been moved. You can return home or contact our team."}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href={import.meta.env.BASE_URL} className="rounded-md bg-gold px-6 py-3 font-semibold text-slate-950 transition hover:bg-gold/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">{es ? "Volver al inicio" : "Return home"}</a>
          <a href="https://wa.me/542914421242" target="_blank" rel="noreferrer" className="rounded-md border border-gold/60 px-6 py-3 font-semibold text-gold transition hover:border-gold hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">{es ? "Contactar por WhatsApp" : "Contact us on WhatsApp"}</a>
        </div>
      </section>
    </main>
  );
}
export default NotFound;
