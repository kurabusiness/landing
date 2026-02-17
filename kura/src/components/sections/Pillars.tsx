"use client";

import { Container } from "@/components/layout/Container";
import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section id="pilares" className="py-10 md:py-12 bg-surface-2 border-t border-border">
      <Container size="grid">
        <div className="mb-5 md:mb-6">
          <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-[0.04em] text-accent">
            {pillars.label}
          </span>
          <h2
            className="font-heading font-bold tracking-[-0.025em] text-fg"
            style={{ fontSize: "var(--text-display)" }}
          >
            {pillars.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.items.map((pillar) => (
            <div
              key={pillar.number}
              className={`pillar-card group border bg-card p-5 transition-all duration-200 hover:bg-surface-3 md:p-6 ${
                pillar.number === "01" ? "border-accent/30 hover:border-accent/50" : "border-border hover:border-border-hover"
              }`}
            >
              <span className="mb-4 block font-mono text-2xl font-bold text-accent/10 md:text-3xl">
                {pillar.number}
              </span>
              <h3 className="mb-2 font-heading text-base font-bold tracking-[-0.015em] text-fg md:text-lg">
                {pillar.title}
              </h3>
              <p className="leading-[1.6] text-muted" style={{ fontSize: "var(--text-body)" }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
