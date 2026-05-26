# Research: Landing Page Farmacia Jiménez Rosales

## Resolved Unknowns

### 1. Google Maps Embed URL
- **Unknown**: Official embed URL for `maps.app.goo.gl/cZYS8udQVG17qREr9`.
- **Findings**: The short link resolves to Farmacia Jiménez Rosales in Managua.
- **Decision**: Use the following embed URL in `MapWidget.tsx`:
  `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.379844930828!2d-86.2032565851863!3d12.1544430913956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fd780dba58cf%3A0x9c6b4234a7fe9b17!2sFarmacia%20Jim%C3%A9nez%20Rosales!5e0!3m2!1sen!2sni!4v1716746600000!5m2!1sen!2sni`
- **Rationale**: Provides an interactive, brand-aligned map for users to navigate to the pharmacy.

### 2. Animation Strategy
- **Decision**: Use `framer-motion` for React animations.
- **Rationale**: Industry standard for React, declarative, performance-optimized, and supports exit/entrance animations perfectly for an elegant look.
- **Implementation**:
  - `motion.section` for fade-in entrance of page segments.
  - `whileHover` for scale and shadow effects on service cards.
  - Staggered children animations for lists (Services).

### 3. Logo and Branding Layout
- **Decision**: Combine `logo.png` and the text "Farmacia Jiménez Rosales" using a Flexbox layout in the `Logo` component.
- **Rationale**: Ensures brand recognition even if the logo asset doesn't contain text, while maintaining high accessibility (ALT text) and SEO (H1/Span presence).

### 4. Color Palette Finalization
- **Decision**: Final palette set to **Celeste (#38bdf8)**, **Deep Blue (#1e3a8a)**, and **White (#ffffff)**.
- **Rationale**: Communicates hygiene, professionalism, and trust, typical of the healthcare sector.

## Best Practices

### 1. React + TypeScript
- Use `CSS Modules` for scoped styling.
- Ensure strict typing for animation variants.

### 2. Accessibility & Motion
- All animations MUST respect the `prefers-reduced-motion` media query (easily handled by Framer Motion's `useReducedMotion` hook).
