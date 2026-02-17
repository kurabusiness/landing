"use client";

import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { ScrollHint } from "@/components/ui/ScrollHint";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <ScrollSection id="problem" className="flex min-h-dvh flex-col bg-bg py-5 sm:py-6 md:py-8">
      <Container size="wide" className="flex flex-col gap-3 md:gap-4">
        <div>
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.04em] text-muted">
            A realidade
          </span>
          <h2
            className="mt-1 font-heading font-medium tracking-[-0.025em]"
            style={{ fontSize: "var(--text-title)" }}
          >
            <span className="headline-highlight">A vida que você imaginou ficou pra depois?</span>
          </h2>
        </div>

        <div className="@6xl:columns-2 @6xl:gap-x-10 [&>p]:mb-3 [&>p]:last:mb-0">
          {problem.slice(0, 7).map((statement, i) => (
            <p
              key={i}
              className="text-[0.9375rem] leading-normal tracking-[-0.01em] text-muted text-justify @6xl:break-inside-avoid"
            >
              {statement}
            </p>
          ))}
          <div className="mt-1 pt-3 @6xl:break-inside-avoid">
            <p className="font-heading font-semibold text-[0.9375rem] leading-normal tracking-[-0.01em] text-fg text-justify">
              {problem[8]}
            </p>
          </div>
          <div className="mt-6 flex w-full justify-center @6xl:[column-span:all] sm:mt-8 md:mt-10">
            <ScrollHint />
          </div>
        </div>
      </Container>
    </ScrollSection>
  );
}
