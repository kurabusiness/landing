interface ContainerProps {
  children: React.ReactNode;
  size?: "text" | "grid" | "full";
  className?: string;
  as?: "div" | "section" | "article";
}

const sizes = {
  text: "max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl",
  grid: "max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl",
  full: "max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl",
};

export function Container({
  children,
  size = "text",
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full min-w-0 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
