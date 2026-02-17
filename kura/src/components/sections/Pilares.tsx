"use client";

import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { pillars } from "@/lib/content";

export function Pilares() {
  const scrollToDiferencial = () => {
    document.getElementById("diferencial")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollSection id="pillars" className="justify-center overflow-y-auto bg-bg py-12 md:py-16">
      <Container size="grid">
        <div>
          <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-[0.04em] text-muted">
            {pillars.label}
          </span>
          <h2 className="mb-6 font-heading font-bold tracking-[-0.025em] text-fg" style={{ fontSize: "var(--text-display)" }}>
            {pillars.title}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.items.map((pillar) => (
              <div
                key={pillar.number}
                className="border border-border/60 p-4 transition-all duration-200 hover:border-border hover:bg-surface-2/30 md:p-5"
              >
                <span className="mb-2 block font-mono text-xl font-bold text-border">
                  {pillar.number}
                </span>
                <h3 className="mb-1 font-heading text-sm font-bold tracking-[-0.015em] text-fg">
                  {pillar.title}
                </h3>
                <p className="text-xs leading-normal text-muted">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToDiferencial}
          className="mt-8 inline-flex h-11 items-center gap-2 border border-border/80 px-6 text-sm font-semibold text-fg transition-all duration-200 hover:border-border-hover hover:text-fg"
        >
          Ver nosso diferencial
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </Container>
    </ScrollSection>
  );
}
