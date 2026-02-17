"use client";

import { useState, FormEvent } from "react";
import { useEmailSubscribe } from "@/hooks/useEmailSubscribe";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ctaFinal, SITE } from "@/lib/content";

export function CTA() {
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
    <AnimatedSection id="cta" animation="none" className="py-10 md:py-12 bg-card border-t border-border">
      <Container size="text" className="text-center">
        <h2
          className="font-heading font-bold tracking-[-0.025em] text-fg"
          style={{ fontSize: "var(--text-display)" }}
        >
          {ctaFinal.headline}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
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
            placeholder={ctaFinal.placeholder}
            required
            className="h-12 w-full border border-border bg-bg px-5 text-base text-fg placeholder:text-tertiary transition-colors focus:border-border-hover focus:outline-none focus:ring-2 focus:ring-white/10 sm:max-w-xs"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="h-12 bg-accent px-8 text-sm font-semibold text-accent-fg transition-all hover:bg-accent-hover active:scale-[0.98] disabled:opacity-50"
          >
            {status === "loading" ? (ctaFinal.buttonTextLoading ?? "Entrando na lista...") : ctaFinal.buttonText}
          </button>
        </form>

        {message ? (
          <p className={`mt-3 text-xs ${status === "error" ? "text-red-400" : "text-accent"}`}>
            {message}
          </p>
        ) : (
          <p className="mt-3 font-mono text-xs text-tertiary">
            {ctaFinal.disclaimer}
          </p>
        )}

        {SITE.instagram && (
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-tertiary transition-colors hover:text-accent"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Seguir no Instagram
          </a>
        )}
      </Container>
    </AnimatedSection>
  );
}
