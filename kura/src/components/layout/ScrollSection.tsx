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
      className={`min-h-screen min-h-dvh snap-start snap-always flex flex-col scroll-mt-14 md:scroll-mt-16 ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
