import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext, type Language } from "./language";

function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem("cgx-language");

  if (savedLanguage === "es" || savedLanguage === "en") {
    return savedLanguage;
  }

  const deviceLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  return deviceLanguages.some((deviceLanguage) => deviceLanguage.toLowerCase().startsWith("es"))
    ? "es"
    : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("cgx-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
