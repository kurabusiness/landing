"use client";

import { useState } from "react";
import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { manifesto, ctaFinal, SITE } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export function EmailGate() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("EMAIL") as HTMLInputElement;
    const email = emailInput?.value?.trim();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/mailchimp-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.status === "success") {
        setStatus("success");
        setMessage("");
      } else {
        setStatus("error");
        setMessage(data.message ?? "Algo deu errado. Tente novamente.");
      }
    } catch {
      setStatus("error");
      setMessage("Erro de conexão. Tente novamente.");
    }
  };

  const showSuccess = status === "success";

  return (
    <ScrollSection id="cta" className="flex min-h-dvh flex-col justify-center bg-bg pt-8 sm:pt-10 md:pt-16 pb-8 sm:pb-10 md:pb-12">
      <Container size="text" className="max-w-lg">
        <div className="text-center">
          {!showSuccess && (
            <span className="mb-4 inline-block font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-tertiary">
              {manifesto.emailLabel}
            </span>
          )}
          <h2
            className={`font-heading font-bold leading-[1.15] tracking-[-0.03em] ${showSuccess ? "mt-4" : ""} mb-4`}
            style={{ fontSize: "var(--text-display)" }}
          >
            <span className="headline-highlight">
              {showSuccess ? "Você está dentro." : ctaFinal.headline}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-[1.6] text-muted" style={{ fontSize: "var(--text-body)" }}>
            {showSuccess
              ? "Obrigado por se cadastrar. Parabéns pela iniciativa, você deu o primeiro passo."
              : ctaFinal.subheadline}
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-md sm:mt-10 md:mt-12">
          {showSuccess ? (
            <div className="flex flex-col items-center gap-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="space-y-6 text-center">
                <p className="font-heading text-[1.0625rem] leading-relaxed text-muted">
                  Acompanhe por e-mail, Instagram e YouTube.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {SITE.instagram ? (
                    <a
                      href={SITE.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface-1/80 px-5 py-2.5 font-mono text-[13px] font-medium text-fg transition-colors hover:border-fg/20 hover:bg-surface-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                      </svg>
                      {SITE.instagramHandle}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-surface-1/40 px-5 py-2.5 font-mono text-[13px] text-tertiary">
                      Instagram em breve
                    </span>
                  )}
                  {SITE.youtube ? (
                    <a
                      href={SITE.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface-1/80 px-5 py-2.5 font-mono text-[13px] font-medium text-fg transition-colors hover:border-fg/20 hover:bg-surface-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      {SITE.youtubeHandle}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-surface-1/40 px-5 py-2.5 font-mono text-[13px] text-tertiary">
                      YouTube em breve
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <>
              {ctaFinal.benefits.length > 0 && (
                <ul className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-1 text-center">
                  {ctaFinal.benefits.map((item, i) => (
                    <li key={i} className="font-mono text-[11px] tracking-[0.04em] text-tertiary">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <form onSubmit={handleSubmit} id="mc-embedded-subscribe-form" noValidate>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required
                    disabled={status === "loading"}
                    placeholder={manifesto.emailPlaceholder}
                    className="h-12 min-h-[48px] flex-1 border border-border/80 bg-bg px-5 text-[15px] text-fg placeholder:text-tertiary transition-colors focus:border-fg/30 focus:outline-none focus:ring-1 focus:ring-fg/20 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="h-12 min-h-[48px] w-full shrink-0 bg-accent px-8 font-heading text-sm font-semibold text-accent-fg transition-all duration-200 hover:bg-accent-hover active:scale-[0.99] disabled:opacity-60 touch-manipulation sm:w-auto"
                  >
                    {status === "loading" ? "Enviando..." : ctaFinal.buttonText}
                  </button>
                </div>

                {message && (
                  <p className="mt-4 text-center font-mono text-[11px] text-red-400">
                    {message}
                  </p>
                )}

                <p className="mt-4 text-center font-mono text-[11px] text-tertiary">
                  {manifesto.emailDisclaimer}
                </p>
              </form>
            </>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 pt-6 sm:mt-12 sm:pt-8 md:mt-16 md:gap-5 md:pt-10">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("faq");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="font-mono text-[11px] text-tertiary transition-colors hover:text-fg py-3 min-h-[44px] flex items-center justify-center touch-manipulation"
          >
            Dúvidas? Ver FAQ
          </button>
          {!showSuccess && SITE.instagram && (
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
