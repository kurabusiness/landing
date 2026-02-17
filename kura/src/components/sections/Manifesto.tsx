"use client";

import { useState, FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { manifesto, MANIFESTO_VIDEO_ID, whatYouReceive } from "@/lib/content";
import { useEmailSubscribe } from "@/hooks/useEmailSubscribe";

export function Manifesto() {
  const [email, setEmail] = useState("");
  const { status, message, subscribe } = useEmailSubscribe();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const website = (form.elements.namedItem("website") as HTMLInputElement)?.value ?? "";
    if (!email.trim()) return;
    await subscribe(email, website);
  };

  return (
    <section id="manifesto" className="py-10 md:py-12 bg-card border-t border-border">
      <Container size="text">
        <div className="mb-6 md:mb-8">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.04em] text-accent">
            {manifesto.label}
          </span>
          <h2 className="mt-2 font-heading font-bold tracking-tight text-fg" style={{ fontSize: "var(--text-display)" }}>
            O que a faculdade não te ensinou.
          </h2>
        </div>

        {/* Video */}
        {MANIFESTO_VIDEO_ID && (
          <div className="manifesto-block mb-20 md:mb-24">
            <div className="relative aspect-video overflow-hidden border border-border bg-card">
              <iframe
                src={`https://www.youtube.com/embed/${MANIFESTO_VIDEO_ID}?rel=0&modestbranding=1`}
                title="O Manifesto Kura"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Manifesto completo */}
        <div className="space-y-6 md:space-y-8">
          {manifesto.sections.map((section, i) => (
            <div key={i} className="border-l-2 border-accent/20 pl-5 md:pl-6">
              <h2
                className="mb-3 font-heading font-bold leading-[1.1] tracking-[-0.025em] text-fg"
                style={{ fontSize: "var(--text-title)" }}
              >
                {section.declaration}
              </h2>
              <p className="max-w-xl leading-[1.65] text-muted" style={{ fontSize: "var(--text-lead)" }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {manifesto.closing && (
          <p className="mt-8 max-w-xl leading-[1.65] text-fg" style={{ fontSize: "var(--text-lead)" }}>
            {manifesto.closing}
          </p>
        )}

        {/* O que você recebe + form - conclusão natural após o manifesto */}
        <div className="mt-10 border-t border-border pt-8 md:pt-10">
          <div className="mb-5">
            <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-[0.04em] text-accent">
              O que você recebe
            </span>
            <ul className="space-y-2">
              {whatYouReceive.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-[0.04em] text-accent">
            {manifesto.emailLabel}
          </span>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:max-w-md sm:flex-row"
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute -left-[9999px]"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={manifesto.emailPlaceholder}
              required
              className="h-11 flex-1 border border-border bg-transparent px-4 text-base text-fg placeholder:text-tertiary transition-colors focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-11 bg-accent px-6 text-sm font-semibold text-accent-fg transition-all hover:bg-accent-hover hover:shadow-[0_0_24px_var(--accent-glow)] active:scale-[0.98] disabled:opacity-50"
            >
              {status === "loading" ? (manifesto.emailCtaLoading ?? "Entrando na lista...") : manifesto.emailCta}
            </button>
          </form>

          {message ? (
            <p className={`mt-2 text-xs ${status === "error" ? "text-red-400" : "text-accent"}`}>
              {message}
            </p>
          ) : (
            <p className="mt-2 font-mono text-xs text-tertiary">
              {manifesto.emailDisclaimer}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
