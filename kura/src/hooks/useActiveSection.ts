"use client";

import { useEffect, useState } from "react";

export const SECTIONS = ["hero", "problem", "manifesto", "pillars", "diferencial", "cta", "faq"] as const;

export type SectionId = (typeof SECTIONS)[number];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const main = document.querySelector(".scroll-snap-container");
    if (!main) return;

    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          if (SECTIONS.includes(id as SectionId)) {
            setActiveSection(id as SectionId);
          }
        }
      },
      { root: main, rootMargin: "-25% 0px -25% 0px", threshold: 0 }
    );

    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
