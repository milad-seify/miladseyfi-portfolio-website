# Design System

The visual language is a dark infrastructure console refined for consulting: deep navy surfaces, cyan/blue signals, restrained glass, fine grid lines, and generous editorial spacing.

## Tokens

All tokens live in `src/styles/global.css` and are exposed to Tailwind through `@theme`:

- Color: page/surface/line, primary and muted text, cyan/blue/violet accents, success.
- Type: system sans for body/display and system monospace for labels/technical details.
- Layout: `--container`, section spacing, radii, shadows, and transition timings.

Use semantic token names. Components must not define a competing palette.

## Component rules

- One primary action per visual group; secondary actions use quieter treatments.
- Cards use borders and tonal separation before shadows.
- Uppercase monospace eyebrow labels establish rhythm; headings remain sentence case.
- Decorative SVGs are hidden from assistive technology. Meaningful icons require accessible text.
- Focus indicators must remain visible on every interactive element.
- Motion communicates entrance or state only. Keep it subtle, CSS-driven, and disabled under `prefers-reduced-motion`.

## Responsive behavior

Design mobile-first. Collapse navigation to an accessible native disclosure, stack grids, avoid horizontal scrolling, and keep touch targets at least 44px.
