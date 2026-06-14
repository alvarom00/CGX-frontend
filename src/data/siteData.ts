import type { Language } from "../context/language";

const siteData = {
  es: {
    services: [
      { title: "Importaciones", items: ["Búsqueda de proveedores", "Cotizaciones internacionales", "Evaluación de alternativas", "Coordinación integral"] },
      { title: "Exportaciones", items: ["Desarrollo de mercados", "Búsqueda de compradores", "Gestión documental", "Acompañamiento comercial"] },
      { title: "Soluciones Integrales", items: ["Logística internacional", "Coordinación aduanera", "Asesoramiento estratégico", "Seguimiento operativo"] },
      { title: "Desarrollo de negocios internacionales", items: ["Identificación de oportunidades comerciales", "Búsqueda de clientes internacionales", "Desarrollo de nuevos mercados", "Estudios de viabilidad"] },
    ],
    audience: [
      { title: "PyMEs", description: "Empresas que buscan expandir sus operaciones internacionales." },
      { title: "Productores", description: "Productos con potencial exportador que buscan nuevos mercados." },
      { title: "Industriales", description: "Empresas que necesitan importar insumos o desarrollar mercados." },
      { title: "Empresas Agropecuarias", description: "Desarrollo comercial y oportunidades en mercados internacionales." },
      { title: "Particulares", description: "Personas que necesitan asesoramiento para realizar operaciones internacionales." },
    ],
    steps: ["Diagnóstico", "Estrategia", "Gestión", "Seguimiento", "Resultados"],
    reasons: ["Atención personalizada", "Experiencia operativa", "Red internacional de contactos", "Soluciones integrales"],
  },
  en: {
    services: [
      { title: "Imports", items: ["Supplier sourcing", "International quotations", "Alternative evaluation", "Comprehensive coordination"] },
      { title: "Exports", items: ["Market development", "Buyer sourcing", "Document management", "Commercial support"] },
      { title: "Comprehensive Solutions", items: ["International logistics", "Customs coordination", "Strategic consulting", "Operational follow-up"] },
      { title: "International business development", items: ["Identification of commercial opportunities", "International client sourcing", "New market development", "Feasibility studies"] },
    ],
    audience: [
      { title: "SMEs", description: "Companies looking to expand their international operations." },
      { title: "Producers", description: "Export-ready products seeking new markets." },
      { title: "Industrial companies", description: "Companies that need to import supplies or develop markets." },
      { title: "Agricultural companies", description: "Commercial development and opportunities in international markets." },
      { title: "Individuals", description: "People who need guidance to carry out international operations." },
    ],
    steps: ["Assessment", "Strategy", "Management", "Follow-up", "Results"],
    reasons: ["Personalized service", "Operational experience", "International contact network", "Comprehensive solutions"],
  },
};

export const getSiteData = (language: Language) => siteData[language];
