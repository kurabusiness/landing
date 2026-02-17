"use client";

import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { ScrollHint } from "@/components/ui/ScrollHint";
import { manifesto } from "@/lib/content";

const teaserSections = manifesto.sections.slice(0, 4);

export function ManifestoTeaser() {
  return (
    <ScrollSection
      id="manifesto"
      className="flex h-dvh min-h-0 flex-col overflow-hidden bg-bg pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-[calc(6rem+env(safe-area-inset-bottom,0px))]"
    >
      <Container size="grid" className="flex min-h-0 flex-1 flex-col gap-3 py-5 sm:py-6 md:gap-4 md:py-8">
        <div className="shrink-0">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.04em] text-muted">
            {manifesto.label}
          </span>
          <h2
            className="mt-1.5 font-heading font-bold leading-[1.15] tracking-[-0.03em] text-fg"
            style={{ fontSize: "var(--text-display)" }}
          >
            {manifesto.opening}
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-normal text-muted">
            {manifesto.openingBody}
          </p>
        </div>

        <div
          className="min-h-0 flex-1 overflow-y-auto overscroll-y-auto pb-6"
          style={{ WebkitOverflowScrolling: "touch", paddingBottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))" }}
        >
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-x-10 md:gap-y-6">
            {teaserSections.map((section, i) => (
              <div key={i} className="border-l-2 border-border/60 pl-4 sm:pl-5 md:pl-6">
                <h3 className="mb-1.5 font-heading font-bold text-[0.9375rem] leading-tight tracking-[-0.02em] text-fg">
                  {section.declaration}
                </h3>
                <p className="text-[0.9375rem] leading-normal text-muted">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex w-full justify-center sm:mt-8 md:mt-10">
            <ScrollHint />
          </div>
        </div>
      </Container>
    </ScrollSection>
  );
}
