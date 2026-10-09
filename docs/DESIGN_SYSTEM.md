# Design System

The visual language combines restrained technical editorial composition with cloud control-plane cues: near-black graphite fields, cool slate surfaces, electric-cyan signals, faint violet ambience, topology lines, and confident asymmetry. The interface should feel calm and precise, never like a monitoring dashboard.

## Tokens

All tokens live in `src/styles/global.css` and are exposed to Tailwind through `@theme`:

- Color: graphite page/surface layers, cool slate lines and text, cyan as the dominant signal, and blue-violet only for ambient depth.
- Type: self-hosted Estedad for Persian, system sans for English, and system monospace for labels/technical details.
- Layout: `--container`, section spacing, radii, shadows, and transition timings.

Use semantic token names. Components must not define a competing palette.

## Component rules

- One primary action per visual group; secondary actions use quieter treatments.
- Prefer typography, rules, and spatial hierarchy over containers. Reserve bordered panels for a genuine interface or form boundary.
- Keep gradients and glow local to focal points. Do not use them as default section or card treatments.
- Use technical coordinates and grid lines sparingly; content hierarchy must remain the primary visual system.
- Uppercase monospace eyebrow labels establish rhythm; headings remain sentence case.
- Give each major section its own composition; do not repeat equal card grids or a single heading/layout formula.
- Treat the topology object, large display type, and sparse infrastructure metadata as recurring identity devices rather than dashboard decoration.
- Decorative SVGs are hidden from assistive technology. Meaningful icons require accessible text.
- Focus indicators must remain visible on every interactive element.
- Motion communicates entrance, topology state, or interaction feedback only. Keep it subtle, CSS-driven, and disabled under `prefers-reduced-motion`.

## Responsive behavior

Design mobile-first. Collapse navigation to an accessible native disclosure, stack grids, avoid horizontal scrolling, and keep touch targets at least 44px.
