# Implementation Plan: Landing Page Farmacia Jiménez Rosales

**Branch**: `001-featurename-pharmacy-landing-page` | **Date**: 2026-05-26 | **Spec**: [specs/001-pharmacy-landing-page/spec.md](spec.md)

**Input**: Feature specification from `/specs/001-pharmacy-landing-page/spec.md`

## Summary

Desarrollar una landing page moderna y elegante para la "Farmacia Jiménez Rosales" utilizando una arquitectura estática (SSG) con React y Vite. El sitio estará optimizado para dispositivos móviles y se enfocará en la visibilidad inmediata de información de contacto, servicios profesionales y consulta de stock vía WhatsApp, cumpliendo con los estándares de accesibilidad y rendimiento definidos en la Constitución.

## Technical Context

**Language/Version**: TypeScript 5.x (Strict Mode)

**Primary Dependencies**: React 18/19, Vite (Build Tool), CSS Modules (Styling), Lucide React (Icons)

**Storage**: N/A (Mocked data in local constant files)

**Testing**: Vitest + React Testing Library (TDD Workflow)

**Target Platform**: Web (Static Hosting), Optimized for Mobile-First

**Project Type**: Web Application (Single Page Landing)

**Performance Goals**: < 1.2s LCP, > 90 Lighthouse score in all categories

**Constraints**: < 200ms interaction latency, WCAG 2.1 AA Compliance

**Scale/Scope**: 1 main page with 5-6 sections (Hero, Info, Services, Map, Contact)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Arquitectura Estática**: ✅ Vite generará un build estático optimizado.
- **Performance Crítico**: ✅ Enfoque en LCP < 1.2s mediante lazy loading de mapa y optimización de assets.
- **Accesibilidad Universal**: ✅ Uso de HTML semántico y validación ARIA.
- **TDD Obligatorio**: ✅ Vitest configurado para el ciclo Red-Green-Refactor.
- **Seguridad y Privacidad**: ✅ Sin trackers externos, solo integración segura de WhatsApp.

## Project Structure

### Documentation (this feature)

```text
specs/001-pharmacy-landing-page/
├── plan.md              # This file
├── research.md          # Phase 0: Logo strategy, Map integration, Color palette
├── data-model.md        # Phase 1: Mock data schemas (Local, Hours, Services)
├── quickstart.md        # Phase 1: Dev environment setup
├── contracts/           # UI Component contracts and Prop types
└── tasks.md             # Phase 2: Implementation tasks (Next step)
```

### Source Code (repository root)

```text
src/
├── assets/              # SVG Logo, optimized images
├── components/          # UI Components (Header, Hero, Services, Footer)
│   ├── ui/              # Reusable atoms (Buttons, Cards)
│   └── layout/          # Section containers
├── constants/           # Mock data (mockData.ts)
├── hooks/               # Custom hooks (useStatus, useMap)
├── styles/              # Global variables and resets
└── App.tsx              # Main entry point
```

**Structure Decision**: Option 1 (Single project) was selected as it is a pure frontend landing page without a backend.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | No violations identified | All standards strictly followed |
