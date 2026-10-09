# Design System

The visual language is an editorial portfolio crossed with technical architecture: periwinkle-blue fields, warm cream surfaces, coral signals, large Persian-first typography, asymmetric composition, and thin structural rules. Infrastructure appears through relationships and diagrams, not dashboard styling.

## Tokens

All tokens live in `src/styles/global.css` and are exposed to Tailwind through `@theme`:

- Color: `#526594` blue, `#F3E8D6` cream, `#FF5A50` coral, and derived tones defined in `global.css`. Coral is the signature signal; cream and blue form the large page fields.
- Type: self-hosted Estedad for Persian, system sans for English, and system monospace for labels/technical details.
- Layout: `--container`, section spacing, radii, shadows, and transition timings.

Use semantic token names. Components must not define a competing palette.

## Component rules

- One primary action per visual group; secondary actions use quieter treatments.
- Prefer typography, rules, and spatial hierarchy over containers. Reserve bordered panels for a genuine interface or form boundary.
- Do not use glass, glow, gradient text, neon, or generic dark-dashboard treatments.
- Use coral for large display text, fields, rules, and states. Small text uses accessible cream, deep-blue, or `--coral-ink` rather than raw coral.
- Use borders, architectural lines, and coordinates sparingly; typography and color fields provide the hierarchy.
- Technical labels are small supporting details, not the dominant voice.
- Give each major section its own composition; do not repeat equal card grids or a single heading/layout formula.
- Treat the coral connector, topology object, oversized name, and project numbering as recurring authored details.
- Decorative SVGs are hidden from assistive technology. Meaningful icons require accessible text.
- Focus indicators must remain visible on every interactive element.
- Motion communicates entrance, topology state, or interaction feedback only. Keep it subtle, CSS-driven, and disabled under `prefers-reduced-motion`.
- Standard entrance motion should resolve in roughly 450–650ms. Scroll-linked reveals start partially visible and complete early in the viewport.
- Profile photography uses an editorial rectangular crop rather than an avatar. The component must retain the same composition when its fallback is replaced by a verified photograph.

## Responsive behavior

Design mobile-first. Collapse navigation to an accessible native disclosure, stack grids, avoid horizontal scrolling, and keep touch targets at least 44px.

The mobile Hero uses its concise summary and reduced topology composition; it is not a direct stack of the desktop layout.
