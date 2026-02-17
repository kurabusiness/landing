"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { SITE, navLinks } from "@/lib/content";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-md border-b border-border/40"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto flex h-14 md:h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-5 md:px-8 lg:px-12 min-w-0">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                const id = link.href.replace("#", "");
                if (id) {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }
              }}
              className={`font-mono text-xs tracking-[0.04em] transition-colors hover:text-accent ${
                link.href.replace("#", "") === activeSection ? "font-semibold text-fg" : "text-tertiary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 min-w-[44px] items-center justify-center md:hidden touch-manipulation"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-tertiary">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
          {SITE.email && (
            <a
              href={`mailto:${SITE.email}`}
              className="flex h-9 w-9 items-center justify-center text-tertiary transition-colors hover:text-accent"
              aria-label="E-mail"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          )}
          {SITE.instagram && (
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center text-tertiary transition-colors hover:text-accent"
              aria-label="Siga no Instagram"
              title="Siga no Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-14 md:top-16 bottom-0 bg-bg/98 backdrop-blur-md border-t border-border/40 md:hidden overflow-y-auto max-h-[calc(100dvh-3.5rem)]">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setMobileOpen(false);
                  const id = link.href.replace("#", "");
                  if (id) {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`px-4 py-3.5 font-mono text-sm transition-colors active:bg-surface-2 active:text-accent ${
                  link.href.replace("#", "") === activeSection ? "font-semibold text-fg" : "text-tertiary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
