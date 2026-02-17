"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["hero", "problem", "manifesto", "pillars", "diferencial", "cta", "faq"] as const;

const SECTION_LABELS: Record<(typeof SECTIONS)[number], string> = {
  hero: "Início",
  problem: "A realidade",
  manifesto: "Manifesto",
  pillars: "Pilares",
  diferencial: "Diferencial",
  cta: "Faça parte",
  faq: "Dúvidas",
};

export function JourneyIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const main = document.querySelector(".scroll-snap-container");
    if (!main) return;

    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          const idx = SECTIONS.indexOf(id as (typeof SECTIONS)[number]);
          if (idx >= 0) setActiveIndex(idx);
        }
      },
      { root: main, rootMargin: "-25% 0px -25% 0px", threshold: 0 }
    );

    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 md:flex"
      aria-label="Progresso na jornada"
    >
      {SECTIONS.map((id, i) => (
        <button
          key={id}
          type="button"
          onClick={() => scrollTo(id)}
          className="group flex items-center gap-2"
          aria-label={`Ir para ${SECTION_LABELS[id]}`}
          aria-current={activeIndex === i ? "step" : undefined}
        >
          <span
            className={`h-2 w-2 shrink-0 rounded-full transition-all duration-200 ${
              activeIndex === i ? "bg-accent scale-125" : "bg-border group-hover:bg-border-hover"
            }`}
          />
          <span
            className={`font-mono text-[10px] uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100 ${
              activeIndex === i ? "text-accent opacity-70" : "text-tertiary"
            }`}
          >
            {SECTION_LABELS[id]}
          </span>
        </button>
      ))}
    </div>
  );
}
