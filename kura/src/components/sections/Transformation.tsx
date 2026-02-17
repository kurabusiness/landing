"use client";

import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { transformation } from "@/lib/content";

export function Transformation() {
  const scrollToCta = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollSection id="diferencial" className="justify-center overflow-y-auto bg-bg py-12 md:py-16">
      <Container size="grid">
        <div className="mb-5 md:mb-6">
          <h2
            className="font-heading font-bold tracking-[-0.025em] text-fg"
            style={{ fontSize: "var(--text-display)" }}
          >
            {transformation.title}
          </h2>
        </div>

        {/* Mobile */}
        <div className="block space-y-3 md:hidden">
          {transformation.rows.map((row, i) => (
            <div key={i} className="border border-border bg-bg p-4">
              <div className="mb-3">
                <span className="mb-1 inline-block font-mono text-xs font-medium uppercase tracking-[0.04em] text-tertiary">
                  Antes
                </span>
                <p className="text-muted line-through decoration-border-hover" style={{ fontSize: "var(--text-body)" }}>
                  {row.without}
                </p>
              </div>
              <div>
                <span className="mb-1 inline-block font-mono text-xs font-medium uppercase tracking-[0.04em] text-accent/60">
                  Depois
                </span>
                <p className="font-medium text-fg" style={{ fontSize: "var(--text-body)" }}>
                  {row.with}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div>
              <h3 className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.04em] text-tertiary">
                Antes
              </h3>
              <div className="space-y-4 md:space-y-5">
                {transformation.rows.map((row, i) => (
                  <p key={i} className="leading-relaxed text-muted" style={{ fontSize: "var(--text-body)" }}>
                    {row.without}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-px bg-border" />
              <h3 className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.04em] text-accent/60">
                Depois
              </h3>
              <div className="space-y-4 md:space-y-5">
                {transformation.rows.map((row, i) => (
                  <p key={i} className="font-medium leading-relaxed text-fg" style={{ fontSize: "var(--text-body)" }}>
                    {row.with}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToCta}
          className="mt-8 inline-flex h-11 items-center gap-2 bg-accent px-7 text-sm font-semibold text-accent-fg transition-all hover:bg-accent-hover active:scale-[0.98]"
        >
          Dê o primeiro passo
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </Container>
    </ScrollSection>
  );
}
