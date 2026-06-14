import { useEffect, useRef } from "react";

const scriptId = "cloudflare-turnstile-script";

type TurnstileProps = {
  onTokenChange: (token: string) => void;
  language: "es" | "en";
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
          language: "es" | "en";
        },
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

function Turnstile({ onTokenChange, language }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenChangeRef = useRef(onTokenChange);

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
  }, [onTokenChange]);

  useEffect(() => {
    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile || widgetIdRef.current) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey:
          import.meta.env.VITE_TURNSTILE_SITE_KEY ||
          "1x00000000000000000000AA",
        callback: (token) => onTokenChangeRef.current(token),
        "expired-callback": () => onTokenChangeRef.current(""),
        "error-callback": () => onTokenChangeRef.current(""),
        language,
      });
    };

    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      if (window.turnstile) {
        renderWidget();
      } else {
        existingScript.addEventListener("load", renderWidget);
      }
    } else {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.addEventListener("load", renderWidget);
      document.head.appendChild(script);
    }

    return () => {
      existingScript?.removeEventListener("load", renderWidget);

      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [language]);

  return <div ref={containerRef} />;
}

export default Turnstile;
