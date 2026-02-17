"use client";

import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { scrollToSection } from "@/lib/scroll";
import { transformation } from "@/lib/content";

export function Transformation() {
  const scrollToCta = () => scrollToSection("cta");

  return (
    <ScrollSection id="diferencial" className="bg-bg pt-6 pb-8 sm:pt-8 sm:pb-10 md:pt-12 md:pb-12">
      <Container size="grid">
        <div className="mb-4 sm:mb-5 md:mb-6">
          <h2
            className="font-heading font-bold tracking-[-0.025em]"
            style={{ fontSize: "var(--text-display)" }}
          >
            <span className="headline-highlight">{transformation.title}</span>
          </h2>
        </div>

        {/* Stacked: mobile e viewports estreitos (ex: monitor vertical) */}
        <div className="block space-y-3 @6xl:hidden">
          {transformation.rows.map((row, i) => (
            <div key={i} className="border border-border bg-bg p-4 sm:p-5">
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

        {/* Colunas lado a lado: apenas em containers largos */}
        <div className="hidden @6xl:block">
          <div className="grid grid-cols-2 gap-6 @6xl:gap-10">
            <div className="min-w-0">
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
            <div className="min-w-0 border-l border-border pl-6 @6xl:pl-10">
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
          className="mt-6 hidden h-12 min-h-[48px] items-center gap-2 bg-accent px-7 text-sm font-semibold text-accent-fg transition-all hover:bg-accent-hover active:scale-[0.98] touch-manipulation sm:mt-8 sm:inline-flex md:mt-10"
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
