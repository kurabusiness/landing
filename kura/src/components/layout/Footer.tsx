"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/content";

export function Footer() {
  const pathname = usePathname();

  const handleBackToTop = () => {
    const main = document.querySelector(".scroll-snap-container");
    if (main) {
      (main as HTMLElement).scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/40 bg-bg/95 backdrop-blur-md pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-5 min-w-0">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:items-center sm:text-left">
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-3 min-w-0 max-w-full">
            <Logo />
            <p className="font-mono text-[11px] text-tertiary max-w-[280px] sm:max-w-none leading-relaxed">
              Seu negócio, sua liberdade.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-6">
            {pathname === "/" ? (
              <button
                type="button"
                onClick={handleBackToTop}
                className="font-mono text-[11px] text-tertiary transition-colors hover:text-fg py-2 -my-2 touch-manipulation min-h-[44px] flex items-center justify-center"
              >
                Voltar ao topo
              </button>
            ) : (
              <Link
                href="/"
                className="font-mono text-[11px] text-tertiary transition-colors hover:text-fg"
              >
                Voltar ao início
              </Link>
            )}
            {SITE.instagram && (
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-tertiary transition-colors hover:text-fg"
              >
                {SITE.instagramHandle}
              </a>
            )}
            <p className="font-mono text-[11px] text-fg-disabled">
              &copy; {new Date().getFullYear()} Kura
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
