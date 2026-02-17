"use client";

import { useEffect, useRef, CSSProperties } from "react";
import { gsap } from "gsap";

interface TextRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  as?: "h1" | "h2" | "h3" | "p";
  stagger?: number;
}

export function TextReveal({
  text,
  className = "",
  style,
  as: Tag = "h1",
  stagger = 0.06,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      container.querySelectorAll(".word").forEach((word) => {
        (word as HTMLElement).style.opacity = "1";
        (word as HTMLElement).style.transform = "none";
      });
      return;
    }

    const words = container.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger,
        ease: "power2.out",
      }
    );
  }, [stagger]);

  const words = text.split(" ");

  return (
    <Tag ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word inline-block opacity-0"
          style={{ willChange: "transform, opacity" }}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
