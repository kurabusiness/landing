"use client";

import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { manifesto } from "@/lib/content";

const teaserSections = manifesto.sections.slice(0, 4);

export function ManifestoTeaser() {
  return (
    <ScrollSection id="manifesto" className="justify-center overflow-y-auto bg-bg py-12 md:py-16">
      <Container size="text" className="flex flex-1 flex-col max-w-2xl">
        <div className="mb-6 md:mb-8">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-muted">
            {manifesto.label}
          </span>
          <h2
            className="mt-2 font-heading font-bold leading-[1.15] tracking-[-0.02em] text-fg"
            style={{ fontSize: "var(--text-title)" }}
          >
            {manifesto.opening}
          </h2>
          <p className="mt-4 max-w-xl leading-[1.65] text-muted" style={{ fontSize: "var(--text-body)" }}>
            {manifesto.openingBody}
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {teaserSections.map((section, i) => (
            <div
              key={i}
              className="group relative pl-5 md:pl-6 border-l-2 border-border/80 transition-colors hover:border-accent/40"
            >
              <span className="absolute -left-[9px] top-0.5 h-1.5 w-1.5 rounded-full bg-border group-hover:bg-accent/60 transition-colors" aria-hidden />
              <h3
                className="mb-1.5 font-heading font-bold leading-[1.2] tracking-[-0.015em] text-fg"
                style={{ fontSize: "var(--text-body)" }}
              >
                {section.declaration}
              </h3>
              <p className="max-w-xl leading-[1.6] text-muted text-sm">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => document.getElementById("pillars")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-8 inline-flex h-11 items-center gap-2 border border-border/80 px-6 text-sm font-semibold text-fg transition-all duration-200 hover:border-border-hover hover:text-fg"
        >
          Continue
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </Container>
    </ScrollSection>
  );
}
