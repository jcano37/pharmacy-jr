# Implementation Plan: Landing Page Farmacia Jiménez Rosales

**Branch**: `001-featurename-pharmacy-landing-page` | **Date**: 2026-05-26 | **Spec**: [specs/001-pharmacy-landing-page/spec.md](spec.md)

**Input**: Feature specification from `/specs/001-pharmacy-landing-page/spec.md`

## Summary

Implement a modern and elegant landing page for "Farmacia Jiménez Rosales" with a refined visual identity and interactive elements. The page will use a Celeste, Blue, and White color palette, replacing the previous green theme. It will feature the official logo combined with the pharmacy name in the header, and the logo will also serve as the browser favicon. Contact methods are restricted to WhatsApp and Phone. Key sections include dynamic business hours, a service catalog with elegant hover effects, and a Google Maps location. Animations (via Framer Motion) will be integrated to provide a premium feel consistent with the medical sector.

## Technical Context

**Language/Version**: TypeScript 5.x, React 18.x

**Primary Dependencies**: React, Lucide React (Icons), Vite (Build tool), CSS Modules, Framer Motion (Animations)

**Storage**: N/A (Static Content)

**Testing**: Vitest, React Testing Library

**Target Platform**: Modern Web Browsers (Responsive)

**Project Type**: Web Landing Page

**Performance Goals**: LCP < 1.2s, 90+ Lighthouse score, smooth 60fps animations

**Constraints**: Accessible (WCAG 2.1 AA), Elegant/Professional Aesthetic, Strict Palette (Celeste/Blue/White)

**Scale/Scope**: Single-page application with scroll navigation and entrance animations

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Implementation Strategy |
|-----------|--------|--------------------------|
| I. Arquitectura Estática | ✅ Pass | Using Vite for static build and component-based modularity. |
| II. Performance Crítico | ✅ Pass | Optimized image loading and minimal third-party scripts; Framer Motion used sparingly for performance. |
| III. Accesibilidad | ✅ Pass | Semantic HTML, ARIA labels, and ensuring animations respect `prefers-reduced-motion`. |
| IV. TDD | ✅ Pass | Core components and logic (hours, map, services) will have unit tests. |
| V. Seguridad y Privacidad | ✅ Pass | No data collection; external links use `rel="noopener noreferrer"`. |

## Project Structure

### Documentation (this feature)

```text
specs/001-pharmacy-landing-page/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── checklists/
│   └── requirements.md  # Spec quality checklist
├── contracts/
│   └── ui-contracts.md  # UI component interfaces
└── tasks.md             # Phase 2 output (generated separately)
```

### Source Code (repository root)

```text
src/
├── assets/              # Static assets (local.png, logo.png)
├── components/
│   ├── layout/          # Page sections (Hero, Services, Location, Footer)
│   └── ui/              # Reusable components (Button, Map, ServiceCard, Logo)
├── constants/           # Mock data and configuration
├── hooks/               # Custom logic (useBusinessStatus)
├── styles/              # Global variables (Celeste/Blue Palette) and resets
└── App.tsx              # Main entry point
index.html               # Favicon configuration
```

**Structure Decision**: Single React project structure following a feature-based modularity within `components/`.

## Complexity Tracking

*No violations detected.*
