import { useLanguage } from "../context/language";

function WhatsappFAB() {
  const { language } = useLanguage();
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2">
      <span className="rounded-full border border-green-500/25 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur sm:hidden">
        {language === "es" ? "Escribinos al WhatsApp" : "Message us on WhatsApp"} <span className="text-[#25D366]">→</span>
      </span>
      <a
        href="https://wa.me/542914421242"
        target="_blank"
        rel="noreferrer"
        aria-label={language === "es" ? "Contactar por WhatsApp" : "Contact us on WhatsApp"}
        className="group relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-950/30 transition duration-300 hover:scale-110 hover:bg-[#20bd5a] hover:shadow-2xl hover:shadow-green-500/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400/40 sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 rounded-full border border-white/30 transition duration-500 group-hover:scale-125 group-hover:opacity-0" />
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current transition duration-300 group-hover:-rotate-12 group-hover:scale-110 sm:h-9 sm:w-9">
          <path d="M16.02 3C8.84 3 3 8.77 3 15.87c0 2.5.73 4.94 2.12 7.02L3.13 30l7.32-1.91a13.1 13.1 0 0 0 5.57 1.26h.01C23.2 29.35 29 23.58 29 16.48A12.9 12.9 0 0 0 16.02 3Zm0 23.92h-.01a10.7 10.7 0 0 1-5.44-1.49l-.42-.25-4.34 1.14 1.16-4.2-.27-.43a10.37 10.37 0 0 1-1.64-5.82c0-5.76 4.92-10.45 10.97-10.45 2.93 0 5.69 1.1 7.75 3.09a10.2 10.2 0 0 1 3.21 7.97c0 5.76-4.92 10.44-10.97 10.44Zm6.02-7.82c-.33-.16-1.96-.95-2.26-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.39-.5-2.65-1.61a9.86 9.86 0 0 1-1.83-2.24c-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.17-.19.22-.32.33-.54.11-.22.06-.41-.03-.57-.08-.16-.74-1.75-1.01-2.4-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.32-1.15 1.11-1.15 2.71s1.18 3.15 1.34 3.37c.17.22 2.32 3.5 5.63 4.9.79.34 1.4.54 1.88.69.79.25 1.51.21 2.08.13.63-.09 1.96-.79 2.23-1.55.28-.76.28-1.41.19-1.55-.08-.13-.3-.21-.63-.37Z" />
        </svg>
      </a>
    </div>
  );
}

export default WhatsappFAB;
