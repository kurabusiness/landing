import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/layout/Container";
import { about } from "@/lib/content";

export function About() {
  return (
    <AnimatedSection className="py-14 md:py-16 lg:py-20 bg-card">
      <Container size="text">
        <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-accent">
          {about.label}
        </span>
        <h2
          className="font-heading font-bold tracking-[-0.025em] text-fg"
          style={{ fontSize: "var(--text-display)" }}
        >
          {about.title}
        </h2>

        <p className="mt-8 leading-[1.625] text-muted" style={{ fontSize: "var(--text-body-lg)" }}>
          {about.body}
        </p>

        <div className="mt-12 border-l-4 border-accent/50 pl-6">
          <p className="font-heading text-xl font-bold tracking-[-0.015em] text-fg md:text-2xl">
            {about.tagline}
          </p>
        </div>
      </Container>
    </AnimatedSection>
  );
}
