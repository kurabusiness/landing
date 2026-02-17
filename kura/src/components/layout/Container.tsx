interface ContainerProps {
  children: React.ReactNode;
  size?: "text" | "grid" | "full";
  className?: string;
  as?: "div" | "section" | "article";
}

const sizes = {
  text: "max-w-2xl sm:max-w-3xl lg:max-w-4xl",
  grid: "max-w-2xl sm:max-w-3xl lg:max-w-5xl",
  full: "max-w-2xl sm:max-w-3xl lg:max-w-4xl",
};

export function Container({
  children,
  size = "text",
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full min-w-0 px-4 sm:px-5 md:px-8 lg:px-12 ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
