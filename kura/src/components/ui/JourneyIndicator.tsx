"use client";

import { useActiveSection, SECTIONS } from "@/hooks/useActiveSection";

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
  const activeSection = useActiveSection();
  const activeIndex = SECTIONS.indexOf(activeSection);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
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
