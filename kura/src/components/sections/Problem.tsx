"use client";

import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <ScrollSection id="problem" className="justify-center overflow-y-auto bg-bg py-12 md:py-16">
      <Container size="text" className="flex flex-1 flex-col justify-center">
        <div className="mx-auto max-w-2xl space-y-6 md:space-y-8">
          {problem.map((statement, i) => (
            <p
              key={i}
              className={`leading-[1.5] tracking-[-0.015em] ${
                i === problem.length - 1
                  ? "font-heading font-bold text-fg"
                  : "text-muted"
              }`}
              style={{ fontSize: "var(--text-lead)" }}
            >
              {statement}
            </p>
          ))}
        </div>

        <button
          type="button"
          onClick={() => document.getElementById("manifesto")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-8 inline-flex h-11 items-center gap-2 border border-border/80 px-6 text-sm font-semibold text-fg transition-all duration-200 hover:border-border-hover hover:text-fg"
        >
          Continuar
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </Container>
    </ScrollSection>
  );
}
