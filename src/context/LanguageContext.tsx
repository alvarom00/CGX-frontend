import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext, type Language } from "./language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("cgx-language");
    return savedLanguage === "en" ? "en" : "es";
  });

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
