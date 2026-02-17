"use client";

interface ScrollSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
}

export function ScrollSection({
  id,
  children,
  className = "",
  as: Tag = "section",
}: ScrollSectionProps) {
  return (
    <Tag
      id={id}
      className={`min-h-screen min-h-dvh snap-start snap-always flex flex-col justify-start scroll-mt-[calc(3.5rem+env(safe-area-inset-top,0px))] md:scroll-mt-16 ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
