"use client";

import { useState } from "react";
import { ScrollSection } from "@/components/layout/ScrollSection";
import { Container } from "@/components/layout/Container";
import { faq } from "@/lib/content";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full min-h-[48px] items-center justify-between gap-3 py-4 pr-2 text-left transition-colors hover:text-accent touch-manipulation"
        aria-expanded={open}
      >
        <span className="min-w-0 flex-1 font-heading font-semibold text-fg" style={{ fontSize: "var(--text-body)" }}>
          {question}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 text-tertiary transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-200 ${
          open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="leading-[1.6] text-muted" style={{ fontSize: "var(--text-body)" }}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <ScrollSection id="faq" className="bg-bg pt-6 pb-8 sm:pt-8 sm:pb-10 md:pt-12 md:pb-12">
      <Container size="text">
        <h2
          className="mb-4 font-heading font-bold tracking-[-0.025em] text-fg sm:mb-5 md:mb-6"
          style={{ fontSize: "var(--text-display)" }}
        >
          Perguntas frequentes
        </h2>

        <div>
          {faq.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Container>
    </ScrollSection>
  );
}
