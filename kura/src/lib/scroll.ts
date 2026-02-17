/**
 * Scroll suave para seção. Usa scrollIntoView no scroll container (main).
 */
export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
