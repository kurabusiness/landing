"use client";

import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { ScrollHint } from "@/components/ui/ScrollHint";
import { pillars } from "@/lib/content";

export function Pilares() {

  return (
    <ScrollSection id="pillars" className="overflow-y-auto bg-bg pt-6 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] sm:pt-8 md:pt-12 md:pb-[calc(6rem+env(safe-area-inset-bottom,0px))]">
      <Container size="grid" className="space-y-5 sm:space-y-6 md:space-y-8">
        <div>
          <span className="mb-3 inline-block font-mono text-[10px] sm:text-xs font-medium uppercase tracking-[0.04em] text-muted">
            {pillars.label}
          </span>
          <h2 className="mb-4 font-heading font-bold tracking-[-0.025em] text-fg sm:mb-6" style={{ fontSize: "var(--text-display)" }}>
            {pillars.title}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {pillars.items.map((pillar) => (
              <div
                key={pillar.number}
                className="border border-border/60 p-4 transition-all duration-200 hover:border-border hover:bg-surface-2/30 sm:p-4 md:p-5"
              >
                <span className="mb-1.5 block font-mono text-lg font-bold text-border sm:text-xl">
                  {pillar.number}
                </span>
                <h3 className="mb-1 font-heading text-sm font-bold tracking-[-0.015em] text-fg">
                  {pillar.title}
                </h3>
                <p className="text-[0.8125rem] leading-relaxed text-muted sm:text-sm">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex w-full justify-center sm:mt-8 md:mt-10">
          <ScrollHint />
        </div>
      </Container>
    </ScrollSection>
  );
}
