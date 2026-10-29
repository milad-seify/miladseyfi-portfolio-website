# Design System

## Status: replaceable starter baseline

The repository ships with a complete visual baseline so the starter is usable and reviewable before a new owner's design brief exists. The current coral/cream/periwinkle editorial composition is **not** part of the reusable product contract.

When a new owner supplies UI references, palette, typography, or brand direction, that explicit brief supersedes the baseline visual language. Replace the system coherently; do not keep legacy visual motifs merely because they exist in the starter.

## Stable design contracts

These constraints should normally survive a redesign:

- design mobile-first and avoid horizontal overflow
- preserve visible keyboard focus and semantic interactive elements
- keep readable color contrast in both supported themes
- preserve `prefers-reduced-motion`
- maintain RTL/LTR parity when both locales remain enabled
- use shared tokens rather than scattered one-off values
- keep touch targets at least 44px where practical
- hide decorative SVGs from assistive technology and give meaningful media accessible text
- keep public pages static unless a new requirement truly needs client-side runtime code

## Baseline implementation

The current tokens live in `src/styles/global.css` and are exposed to Tailwind through `@theme`. The starter currently uses:

- color: periwinkle blue, warm cream, coral, and derived dark-theme tones
- type: self-hosted Estedad for Persian, system sans for English, and system monospace for supporting technical labels
- layout: shared container width, section spacing, radii, shadows, and transition timings

These values are starting points, not brand requirements.

## Rebrand contract

For a new portfolio:

1. define the new visual direction before editing individual components
2. replace global tokens and typography first
3. update section compositions and reusable primitives second
4. remove obsolete motifs/classes instead of accumulating overrides
5. validate focus states, contrast, mobile layouts, RTL/LTR, and reduced motion after the redesign

A redesign may use a completely different visual language as long as the stable accessibility and rendering contracts remain intact.
