"use client";

import { useState, FormEvent } from "react";
import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { useEmailSubscribe } from "@/hooks/useEmailSubscribe";
import { manifesto, ctaFinal, SITE } from "@/lib/content";

export function EmailGate() {
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
    <ScrollSection id="cta" className="justify-center bg-bg py-12 md:py-16">
      <Container size="text" className="max-w-xl">
        <div className="text-center">
          <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-[0.04em] text-muted">
            {manifesto.emailLabel}
          </span>
          <h2
            className="mb-4 font-heading font-bold tracking-[-0.025em] text-fg"
            style={{ fontSize: "var(--text-display)" }}
          >
            {ctaFinal.headline}
          </h2>
          <p className="mx-auto mb-8 max-w-lg leading-[1.65] text-muted" style={{ fontSize: "var(--text-lead)" }}>
            {ctaFinal.subheadline}
          </p>
        </div>

        <div className="mx-auto max-w-md text-left">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.04em] text-muted">
            {ctaFinal.benefitsTitle}
          </p>
          <ul className="mb-8 space-y-2">
          {ctaFinal.benefits.map((item, i) => (
            <li key={i} className="flex items-start gap-2 font-mono text-sm text-tertiary">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" aria-hidden />
              {item}
            </li>
          ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
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
            className="h-12 flex-1 border border-border bg-bg px-5 text-base text-fg placeholder:text-tertiary transition-colors focus:border-border-hover focus:outline-none focus:ring-2 focus:ring-white/10"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="h-12 bg-accent px-8 text-sm font-semibold text-accent-fg transition-all hover:bg-accent-hover active:scale-[0.98] disabled:opacity-50"
          >
            {status === "loading" ? manifesto.emailCtaLoading : ctaFinal.buttonText}
          </button>
        </form>

        {message ? (
          <p className={`mt-3 text-center text-xs ${status === "error" ? "text-red-400" : "text-accent"}`}>
            {message}
          </p>
        ) : (
          <p className="mt-3 text-center font-mono text-xs text-tertiary">
            {manifesto.emailDisclaimer}
          </p>
        )}

        <div className="mt-10 flex flex-col items-center gap-6 border-t border-border/40 pt-8">
          <button
            type="button"
            onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
            className="font-mono text-xs text-tertiary transition-colors hover:text-fg"
          >
            Tem dúvidas? Ver perguntas frequentes
          </button>
          {SITE.instagram && (
            <div className="flex flex-col items-center gap-2">
              <p className="font-mono text-[11px] text-tertiary">
                {SITE.instagramHint}
              </p>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm font-medium text-fg transition-colors hover:text-accent"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                </svg>
                {SITE.instagramHandle}
              </a>
            </div>
          )}
        </div>
      </Container>
    </ScrollSection>
  );
}
