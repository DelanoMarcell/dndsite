# DnD Software Brand Guidelines

Version: 1.0  
Purpose: Single source of truth for brand consistency across website design, presentations, mockups, and future digital products.

## 1) Brand Foundations

### Brand Position
DnD Software is a practical, delivery-focused consulting and engineering brand.  
The visual language should communicate:
- Professional
- Detailed
- Clean
- Structured
- Outcome-oriented

### Brand Personality
- Confident, not loud
- Technical, not overly complex
- Modern, not trendy
- Clear, not decorative

## 2) Logo System

### Official Logo Assets (Current)
- Dark-on-light: `public/assets/logo_500px_500px_black.svg`
- Light-on-dark: `public/assets/logo_500px_500px_white.svg`
- Alternate: `public/assets/logo_500px_500px.svg`

### Placeholder Link (Replace This)
- Primary logo URL placeholder: [DnD Software Primary Logo](https://placeholder.example.com/dndsoftware-logo-primary.svg)

### Usage Rules
- Use black logo on light backgrounds.
- Use white logo on dark/navy backgrounds.
- Do not recolor logo to arbitrary colors.
- Do not add glows, shadows, gradients, or outlines.
- Do not stretch or distort proportions.

### Clear Space
- Minimum clear space around logo: `0.25x` logo width on all sides.
- Preferred clear space: `0.5x` logo width in presentations/hero areas.

### Minimum Size
- Digital minimum display size: `40px` width.
- Preferred navbar display size: aligned with current implementation proportions.

## 3) Color System

The brand currently uses a navy-and-orange core with neutral structural tones.

### Primary Colors
- Brand Navy: `#0F172A`
- Brand Orange: `#E76E50`
- Orange Hover/Dark: `#CF5D40`

### Core Neutrals
- Background: `#FFFFFF`
- Surface: `#FFFFFF`
- Main Text: `#1F2937`
- Muted Text: `#4B5563`
- Muted Text 2: `#667085`
- Border: `#D8DEE6`
- Soft Border: `#E5E7EB`

### Grid and Rule Tokens
- Major Rule: `rgba(207, 216, 227, 0.92)`
- Minor Rule: `rgba(216, 222, 230, 0.58)`
- Grid Line: `rgba(229, 231, 235, 0.58)`

### Recommended Color Balance
- 65% neutral/light backgrounds
- 25% navy structure and depth
- 10% orange accents and calls-to-action

Orange should be used intentionally for emphasis, not as a background theme color.

## 4) Typography System

### Font Stack (Current Implementation)
- Heading font: `Montserrat` (weights 500, 600, 700, 800)
- Body font: `Open Sans` (weights 400, 500, 600, 700)
- Accent/Eyebrow font: `Oswald` (weights 500, 600)

### Roles
- `Montserrat`: Headlines, section titles, key statements
- `Open Sans`: Body copy, navigation, labels, links
- `Oswald`: Eyebrow labels and high-level section markers

### Type Behavior
- Headings: tighter letter spacing and high clarity
- Body: readable line-height and moderate contrast
- Eyebrows: uppercase, spaced, compact

### Practical Hierarchy (Web)
- Hero H1: `clamp(1.84rem, 3.7vw, 2.78rem)` on home
- Standard H1: `clamp(2rem, 4.2vw, 3.15rem)`
- Section H2: `clamp(1.38rem, 2.5vw, 2rem)`
- Body: ~`0.9rem` to `1rem` equivalent with readable line-height
- Small utility/meta text: ~`0.74rem` to `0.83rem`

### Presentation Guidance
- Slide titles: Montserrat Bold
- Slide body: Open Sans Regular/Medium
- Labels/kickers: Oswald uppercase
- Avoid mixing additional font families.

## 5) Signature Background and Structure

### Signature Grid Aesthetic
DnD Software uses a subtle diagonal grid as a core visual signature.

### Implementation Standard (Performance First)
- Use static CSS gradient backgrounds (no JS, no scroll listeners).
- Base grid size: `100px`
- Mobile grid size: `72px`
- Pattern uses two diagonal linear gradients at `45deg` and `-45deg`.

This keeps rendering lightweight while preserving the visual identity.

### Horizontal Rule Language
Use soft horizontal rule gradients for section separation:
- Major rules for section boundaries
- Minor rules for internal lists/rows/tables

Avoid thick decorative separators.

## 6) Buttons and Interactive Elements

### Button Shape and Feel
- Rectangular geometry (no pill styling as default)
- Crisp 1px borders
- Strong text weight
- Compact but clear padding

### Primary CTA
- Background: brand orange
- Border: brand orange
- Text: white
- Hover: orange dark (`#CF5D40`)

### Secondary CTA
- Background: white
- Border: neutral border (`#D8DEE6`)
- Text: main text

### Mobile Behavior Rule
- Keep CTAs compact.
- If a constrained UI area exists (example: announcement banner), use text-link CTA treatment on mobile to reduce visual weight and height.

## 7) Layout Principles

### Spacing Rhythm
- Maintain consistent vertical flow between sections.
- Avoid accidental compression or oversized whitespace.
- Ensure content blocks clearly separate without appearing disconnected.

### Surfaces
- Primary pages use light surfaces with subtle borders.
- Dark navy is used strategically (footer, system messaging, emphasis zones).

### Grid Usage
- Favor clean, structured row systems for services/processes.
- Prefer readable content width over full-width dense text blocks.

## 8) Imagery Direction (Current State)

Current imagery is professional, business/operations-oriented stock photography.  
Direction to maintain:
- Real business contexts
- Team collaboration
- Operations and strategy environments
- Avoid overly abstract AI imagery and neon-styled visuals

## 9) Iconography (Current State)

Current icon usage is minimal (social icons and simple UI indicators).  
Until an icon system is defined:
- Use simple, clean, single-color icon styles
- Avoid mixed icon packs with conflicting visual styles

## 10) Motion and Interaction

### Motion Style
- Subtle, purposeful transitions
- No decorative/parallax-heavy effects
- Reveal motion should support hierarchy, not distract

### Current Standard
- Section reveal: soft fade + upward motion
- Keep timing restrained and professional

## 11) Accessibility and Quality Controls

### Minimum Standards
- Maintain readable contrast across all text/background combinations.
- Ensure interactive elements are keyboard focusable.
- Keep tap targets usable on mobile.
- Avoid text clipping and overflow in small viewports.

### Brand QA Checklist (Before Publish)
- Logo variant matches background
- Color tokens match brand palette
- Typography roles are respected
- Buttons follow rectangular DnD style
- Signature grid appears subtle and performant
- Section spacing is balanced
- Mobile layouts are compact and readable

## 12) Implementation Tokens (Reference)

These are the core tokens currently used in implementation:

```css
--color-primary: #e76e50;
--color-primary-dark: #cf5d40;
--color-navy: #0f172a;
--color-bg: #ffffff;
--color-text: #1f2937;
--color-muted: #4b5563;
--color-muted-2: #667085;
--color-border: #d8dee6;
--color-border-soft: #e5e7eb;
--rule-major: rgba(207, 216, 227, 0.92);
--rule-minor: rgba(216, 222, 230, 0.58);
--grid-pattern-size: 100px;
--grid-pattern-line: rgba(229, 231, 235, 0.58);
--font-heading: 'Montserrat', sans-serif;
--font-body: 'Open Sans', sans-serif;
--font-accent: 'Oswald', sans-serif;
```

## 13) Future Expansion (Planned)

To evolve this guideline later, add:
- Full iconography set and rules
- Photography art direction examples and rejection examples
- Presentation templates (title, section, case study, closing slides)
- Social media template system
- Printable CMYK equivalents and print-safe palette
- Co-branding and partner-lockup rules

