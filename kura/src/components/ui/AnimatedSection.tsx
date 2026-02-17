"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: "fade-up" | "fade-in" | "none";
  delay?: number;
  as?: "div" | "section";
}

export function AnimatedSection({
  children,
  className = "",
  id,
  animation = "fade-up",
  delay = 0,
  as: Tag = "section",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || animation === "none") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const fromVars =
      animation === "fade-up"
        ? { opacity: 0, y: 40 }
        : { opacity: 0 };

    const toVars =
      animation === "fade-up"
        ? { opacity: 1, y: 0 }
        : { opacity: 1 };

    gsap.fromTo(element, fromVars, {
      ...toVars,
      duration: 0.8,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay]);

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} id={id} className={className}>
      {children}
    </Tag>
  );
}
