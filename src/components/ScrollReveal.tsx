import { useEffect } from "react";

function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("reveal-ready");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "-6% 0px -8% 0px",
      },
    );

    const hideObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "96px 0px",
      },
    );

    elements.forEach((element) => {
      revealObserver.observe(element);
      hideObserver.observe(element);
    });

    return () => {
      revealObserver.disconnect();
      hideObserver.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}

export default ScrollReveal;
