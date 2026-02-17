"use client";

import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { ScrollHint } from "@/components/ui/ScrollHint";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <ScrollSection id="problem" className="flex h-dvh min-h-0 flex-col overflow-hidden bg-bg pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-[calc(6rem+env(safe-area-inset-bottom,0px))]">
      <Container size="grid" className="flex min-h-0 flex-1 flex-col gap-3 py-4 md:gap-4 md:py-6">
        <div className="shrink-0">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.04em] text-muted">
            A realidade
          </span>
          <h2
            className="mt-1 font-heading font-medium tracking-[-0.025em] text-fg"
            style={{ fontSize: "var(--text-title)" }}
          >
            A vida que você imaginou ficou pra depois?
          </h2>
        </div>

        <div
          className="min-h-0 flex-1 overflow-y-auto overscroll-y-auto md:columns-2 md:gap-x-10 [&>p]:mb-3 [&>p]:last:mb-0"
          style={{ WebkitOverflowScrolling: "touch", paddingBottom: "max(2rem, env(safe-area-inset-bottom, 0px))" }}
        >
          {problem.slice(0, 7).map((statement, i) => (
            <p
              key={i}
              className="text-[0.9375rem] leading-normal tracking-[-0.01em] text-muted text-justify md:break-inside-avoid"
            >
              {statement}
            </p>
          ))}
          <div className="mt-1 pt-3 md:break-inside-avoid">
            <p className="font-heading font-semibold text-[0.9375rem] leading-normal tracking-[-0.01em] text-fg text-justify">
              {problem[8]}
            </p>
          </div>
          <div className="mt-8 flex w-full justify-center [column-span:all] md:mt-10">
            <ScrollHint />
          </div>
        </div>
      </Container>
    </ScrollSection>
  );
}
