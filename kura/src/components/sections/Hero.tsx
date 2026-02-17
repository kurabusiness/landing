"use client";

import { Container } from "@/components/layout/Container";
import { TextReveal } from "@/components/ui/TextReveal";
import { scrollToSection } from "@/lib/scroll";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen min-h-dvh flex-col items-start justify-center overflow-hidden snap-start snap-always scroll-mt-14 md:scroll-mt-16 pt-14 pb-6 md:pt-16 md:pb-8">
      <div
        className="pointer-events-none absolute -top-[20%] left-1/2 h-[60vw] max-h-[800px] w-[60vw] max-w-[800px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(248,248,248,0.04) 0%, transparent 60%)",
        }}
      />

      <Container size="full" className="relative max-w-2xl">
        <TextReveal
          text={hero.headline}
          className="font-heading font-bold leading-[1.02] tracking-[-0.035em] text-fg"
          style={{ fontSize: "var(--text-hero)" }}
        />

        <p
          className="mt-3 font-heading font-bold tracking-[-0.025em] text-fg"
          style={{ fontSize: "var(--text-display)" }}
        >
          {hero.sub}
        </p>

        <p className="mt-5 max-w-lg leading-[1.6] text-muted" style={{ fontSize: "var(--text-lead)" }}>
          {hero.detail}
        </p>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => scrollToSection("problem")}
            className="inline-flex h-12 min-h-[48px] items-center gap-2 bg-accent px-7 text-sm font-semibold text-accent-fg transition-all hover:bg-accent-hover active:scale-[0.98] touch-manipulation"
          >
            {hero.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
