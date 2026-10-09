# Design System

The visual language combines technical editorial composition with cloud control-plane cues: deep navy fields, cyan signals, topology lines, oversized type, asymmetry, and deliberate shifts in density.

## Tokens

All tokens live in `src/styles/global.css` and are exposed to Tailwind through `@theme`:

- Color: page/surface/line, primary and muted text, cyan/blue/violet accents, success.
- Type: self-hosted Estedad for Persian, system sans for English, and system monospace for labels/technical details.
- Layout: `--container`, section spacing, radii, shadows, and transition timings.

Use semantic token names. Components must not define a competing palette.

## Component rules

- One primary action per visual group; secondary actions use quieter treatments.
- Prefer typography, rules, and spatial hierarchy over containers. Reserve bordered panels for a genuine interface or form boundary.
- Uppercase monospace eyebrow labels establish rhythm; headings remain sentence case.
- Give each major section its own composition; do not repeat equal card grids or a single heading/layout formula.
- Treat the topology object, large display type, and sparse infrastructure metadata as recurring identity devices rather than dashboard decoration.
- Decorative SVGs are hidden from assistive technology. Meaningful icons require accessible text.
- Focus indicators must remain visible on every interactive element.
- Motion communicates entrance or state only. Keep it subtle, CSS-driven, and disabled under `prefers-reduced-motion`.

## Responsive behavior

Design mobile-first. Collapse navigation to an accessible native disclosure, stack grids, avoid horizontal scrolling, and keep touch targets at least 44px.
