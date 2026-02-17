import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function fadeUp(element: string | Element, options?: {
  delay?: number;
  duration?: number;
  y?: number;
  start?: string;
}) {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: options?.y ?? 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.8,
      delay: options?.delay ?? 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element as Element,
        start: options?.start ?? "top 85%",
        once: true,
      },
    }
  );
}

export function staggerChildren(
  parent: string | Element,
  children: string,
  options?: {
    stagger?: number;
    duration?: number;
    y?: number;
  }
) {
  return gsap.fromTo(
    `${parent} ${children}`,
    {
      opacity: 0,
      y: options?.y ?? 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.6,
      stagger: options?.stagger ?? 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: parent as Element,
        start: "top 80%",
        once: true,
      },
    }
  );
}

export function textReveal(
  element: string | Element,
  options?: {
    stagger?: number;
    duration?: number;
  }
) {
  const words = gsap.utils.toArray(`${element} .word`) as Element[];

  return gsap.fromTo(
    words,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.5,
      stagger: options?.stagger ?? 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element as Element,
        start: "top 80%",
        once: true,
      },
    }
  );
}

export { gsap, ScrollTrigger };
