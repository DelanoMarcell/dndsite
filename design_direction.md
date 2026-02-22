# Design Direction: Structured Enterprise Grid

## What this style is called
The design direction used on this site is:

- `Structured Enterprise Grid`

It is a blend of:

- `Enterprise B2B Web Aesthetic`
- `Swiss / International Typographic Style` influence (grid, clarity, hierarchy)
- `Editorial Information Design` (content-first sections, disciplined spacing)

## Why this direction exists
This website is for `DnD Software`, so it must feel:

- detailed
- professional
- clean
- operationally credible

The UI should communicate delivery confidence, not startup hype. It should look like a serious technology consultancy and implementation partner.

## Core visual principles
1. `Grid-first composition`
- Layouts are built from clear columns and rows.
- Information should align to shared edges.
- Content flow should feel structured and deliberate.

2. `Divider-driven structure`
- Use thin lines (`1px`) and row separators to organize content.
- Prefer section dividers over card stacks.
- Visual rhythm comes from alignment and spacing, not decorative effects.

3. `Restrained accent usage`
- Accent color is used for emphasis and action, not as a background theme.
- Most surfaces remain neutral.

4. `Flat, professional surfaces`
- Minimal rounded corners.
- No glassmorphism.
- No loud gradients as a primary style.
- No playful shadows or inflated UI depth.

5. `Information hierarchy over decoration`
- Headlines, labels, tables, timelines, and rows do most of the design work.
- Typography and spacing carry the premium look.

## Brand tokens (source of truth)
Use the tokens in `src/style.css` as the canonical values.

### Colors
- `--color-primary: #e76e50`
- `--color-primary-dark: #cf5d40`
- `--color-navy: #0f172a`
- `--color-navy-soft: #1e293b`
- `--color-bg: #ffffff`
- `--color-surface: #ffffff`
- `--color-text: #1f2937`
- `--color-muted: #4b5563`
- `--color-muted-2: #667085`
- `--color-border: #d8dee6`
- `--color-border-soft: #e5e7eb`

### Typography
- Headings: `Montserrat`
- Body/UI text: `Open Sans`
- Eyebrow labels: `Oswald`

Use:
- strong, confident headings
- readable body copy
- uppercase eyebrow labels for section signaling

## Layout system
### Page container
- Main content width: `min(1200px, 92vw)`
- Header/footer shell width: `min(1240px, 95vw)`

### Vertical rhythm
- Section spacing is consistent and moderate.
- Prefer recurring spacing steps already in CSS (`0.35`, `0.5`, `0.75`, `1`, `1.25`, `2.1`, `2.35`).
- Avoid random one-off spacing values unless justified.

### Preferred section patterns
Use these primitives before creating new patterns:

- `home-hero` / `detail-hero`
- `proof-strip`
- `client-strip`
- `service-list` + `service-list-row`
- `execution-rows`
- `table-wrap` + `services-table`
- `phase-grid`
- `two-col-table`
- `contact-panel`
- `feature-split`

## Component direction
### Header and nav
- Crisp, utility-oriented header.
- Primary nav uses subtle active indicator (`border-color` accent).
- Mobile nav is a clean drawer panel, not an animated gimmick.

### Hero sections
- Strong statement headline.
- Supporting copy with practical business tone.
- One relevant image, not decorative collage.
- CTA pair: primary action + secondary fallback.

### Service and process content
- Use row/table patterns for enterprise clarity.
- Prefer comparative structures (service, focus, deliverables).
- Use numbered execution phases for trust and predictability.

### Footer
- Dark utility footer with clear columns.
- Include:
- brand statement
- services links
- company links
- direct contact
- legal links

Footer should feel like an enterprise information hub, not a marketing banner.

## Motion and interaction
- Motion is subtle and purposeful.
- Current pattern: `section-reveal` with soft fade/translate.
- No bouncy, playful, or overly kinetic animations.

## Content and tone rules
Use copy that is:

- direct
- specific
- operational
- outcome-focused

Avoid:

- vague hype language
- buzzword stuffing
- exaggerated claims

## Imagery rules
- Use professional business/technology photography.
- Favor architecture, teams, operations, workshops, command-center style visuals.
- Images support credibility; they should not dominate layout.

## Hard constraints (do not violate)
1. Do not revert to card-heavy UI as the default layout strategy.
2. Do not switch to gradient-dominant visual identity.
3. Do not replace typography with generic system stacks.
4. Do not add playful startup-style blobs/shapes/stickers/emoji UI.
5. Do not introduce rounded, soft consumer-app styling across the site.

## Expansion playbook for future features
When adding a new page/feature:

1. Start with existing layout primitives from `src/style.css`.
2. Reuse existing spacing and border rhythm.
3. Preserve heading/body/eyebrow type roles.
4. Organize new information into rows, strips, tables, or two-column structured sections.
5. Keep accent usage limited to actions and emphasis.
6. Validate mobile behavior with the same structural logic as existing sections.

If a new component feels "cardy", rewrite it into a row/table/divider pattern.

## Quick QA checklist
Before considering a new UI change complete:

1. Does it look enterprise and credible at first glance?
2. Is alignment/grid consistency maintained?
3. Are separators and spacing doing the structure work (instead of decorative boxes)?
4. Is accent color controlled and intentional?
5. Does mobile remain clean and readable?
6. Would this still fit next to the current header/footer without visual clash?

## Prompt seed for future models
Use this exact direction when prompting:

`Use the Structured Enterprise Grid direction from design_direction.md. Keep DnD Software brand colors and typography. Prefer divider- and row-based enterprise layouts over cards. Maintain a clean, detailed, professional B2B consultancy aesthetic with restrained accents and disciplined hierarchy.`

