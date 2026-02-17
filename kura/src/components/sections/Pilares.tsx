"use client";

import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { ScrollHint } from "@/components/ui/ScrollHint";
import { pillars } from "@/lib/content";

export function Pilares() {

  return (
    <ScrollSection id="pillars" className="overflow-y-auto bg-bg pt-6 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pt-12 md:pb-[calc(6rem+env(safe-area-inset-bottom,0px))]">
      <Container size="grid" className="space-y-6 md:space-y-8">
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

        <div className="mt-8 flex w-full justify-center md:mt-10">
          <ScrollHint />
        </div>
      </Container>
    </ScrollSection>
  );
}
