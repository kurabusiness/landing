"use client";

export function ScrollHint() {
  return (
    <div className="flex flex-col items-center gap-1.5 pt-6">
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-tertiary">
        Role a página
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-bounce text-tertiary"
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </div>
  );
}
