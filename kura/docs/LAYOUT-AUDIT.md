# Kura — Layout Audit (Senior Full-Stack Deep Dive)

## Problemas identificados

### 1. **Tipografia desproporcional**
- **Escala inconsistente:** Hero (2.75–6rem) → Display (2–3.5rem) → Title (1.5–2.25rem) → Body (1.06–1.19rem) — sem ratio modular
- **Manifesto h2:** `text-2xl md:text-3xl` hardcoded, fora do sistema fluido
- **Body misto:** `text-sm` (14px) em Pillars/FAQ vs `text-body-lg` (17–19px) em Manifesto
- **Labels:** `text-[10px]` e `text-[11px]` espalhados — escala fragmentada

### 2. **Layout desforme**
- **Containers inconsistentes:** Hero full (6xl) → Problem/Manifesto/FAQ text (3xl) → Pillars/Transformation grid (5xl)
- **Salto visual:** Conteúdo alterna entre 768px e 1024px de largura
- **Margens excessivas:** Em telas grandes, coluna de texto fica estreita com laterais enormes

### 3. **Transições ruins**
- **Vazio preto:** Problem com `opacity-0` até GSAP; AnimatedSection (Transformation, FAQ, CTA) com `opacity-0` e `y: 40` até trigger
- **Gap Hero→Problem:** pb-4/6 + pt-5/6 = ~40px de “nada” entre seções
- **Trigger tardio:** AnimatedSection em "top 85%" — seção visível mas invisível

### 4. **Ritmo vertical irregular**
- Hero: pt-12 pb-4 / pt-14 pb-6
- Problem: pt-5 pb-8 / pt-6 pb-10
- Outras: py-8 md:py-10 lg:py-12
- Sem unidade base consistente (4px, 8px)

## Soluções implementadas

1. **Escala tipográfica modular** (ratio ~1.2)
   - Hero: 2.25–3.75rem | Display: 1.75–2.25rem | Title: 1.25–1.5rem | Lead: 1.06–1.12rem | Body: 0.94–1rem
   - Labels unificados em `text-xs` (12px)
   - Manifesto h2 usa `var(--text-display)` em vez de valores fixos

2. **Container unificado** (max-w-4xl = 896px para todo conteúdo)
   - Elimina salto visual entre seções text/grid/full

3. **Conteúdo visível por padrão**
   - Problem: removido GSAP + opacity-0
   - Pillars: removido GSAP + opacity-0
   - Transformation, FAQ, CTA: `animation="none"` no AnimatedSection

4. **Ritmo vertical consistente**
   - Todas as seções: `py-10 md:py-12`
   - Hero: `pt-14 pb-6 md:pt-16 md:pb-8`

5. **Transição Hero→Problem**
   - Problem visível imediatamente, sem void preto
   - `bg-surface-2` para quebra visual sutil
