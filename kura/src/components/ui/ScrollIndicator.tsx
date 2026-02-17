"use client";

interface ScrollIndicatorProps {
  targetId: string;
  label?: string;
  variant?: "minimal" | "full";
}

export function ScrollIndicator({ targetId, label, variant = "minimal" }: ScrollIndicatorProps) {
  const scrollToTarget = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  const ArrowIcon = () => (
    <svg
      width={variant === "full" ? 16 : 14}
      height={variant === "full" ? 16 : 14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={variant === "full" ? 1.5 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={variant === "full" ? "animate-float" : ""}
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={scrollToTarget}
        className="flex flex-row items-center gap-2 font-mono text-xs text-tertiary transition-colors hover:text-accent"
      >
        {label && <span>{label}</span>}
        <ArrowIcon />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={scrollToTarget}
      className="flex items-center justify-center pt-6 text-tertiary transition-colors hover:text-accent"
      aria-label={label ?? "Rolar para próxima seção"}
    >
      <ArrowIcon />
    </button>
  );
}
