# Tasks: Landing Page Farmacia Jiménez Rosales

**Input**: Design documents from `/specs/001-pharmacy-landing-page/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-contracts.md

**Tests**: TDD is MANDATORY per the project Constitution. Tests must be written and FAIL before implementation.

**Organization**: Tasks are grouped by phase and user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Initialize React + TypeScript project with Vite in root
- [X] [P] T002 Configure Vitest and React Testing Library in package.json and vite.config.ts
- [X] [P] T003 Configure CSS Modules and global variables in src/styles/variables.css
- [X] [P] T004 Create base directory structure (src/components, src/hooks, src/constants, src/assets)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [X] T005 [P] Create mock data constants based on data-model.md in src/constants/mockData.ts
- [X] T006 [P] Implement base Section component with SectionProps in src/components/layout/Section.tsx
- [X] T007 [P] Create SVG Logo component as defined in research.md in src/components/ui/Logo.tsx
- [X] T008 [P] Implement custom hook useBusinessStatus to calculate open/closed state in src/hooks/useBusinessStatus.ts

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Información de Contacto y Ubicación (Priority: P1) 🎯 MVP

**Goal**: El usuario puede encontrar dirección, teléfono y horarios en menos de 5s.

**Independent Test**: Verificar que Header y Hero muestran los datos de mockData.ts correctamente y el botón de llamada funciona.

### Tests for User Story 1

- [X] T009 [P] [US1] Write test for Header component (contact visibility) in src/components/layout/Header.test.tsx
- [X] T010 [P] [US1] Write test for Business Hours component (open/closed logic) in src/components/ui/BusinessHours.test.tsx

### Implementation for User Story 1

- [X] T011 [P] [US1] Create Header component with contact links in src/components/layout/Header.tsx
- [X] T012 [P] [US1] Implement BusinessHours status indicator in src/components/ui/BusinessHours.tsx
- [X] T013 [US1] Create Hero section component in src/components/layout/Hero.tsx
- [X] T014 [US1] Integrate Header, Hero and BusinessHours in src/App.tsx

**Checkpoint**: User Story 1 (MVP) is fully functional and testable.

---

## Phase 4: User Story 2 - Catálogo de Servicios Profesionales (Priority: P2)

**Goal**: Mostrar los 4 servicios profesionales con una estética elegante.

**Independent Test**: La sección "Servicios" renderiza 4 tarjetas con iconos minimalistas.

### Tests for User Story 2

- [X] T015 [P] [US2] Write test for Services section (rendering mock services) in src/components/layout/Services.test.tsx
- [X] T016 [P] [US2] Write test for ServiceCard atom in src/components/ui/ServiceCard.test.tsx

### Implementation for User Story 2

- [X] T017 [P] [US2] Create ServiceCard atomic component in src/components/ui/ServiceCard.tsx
- [X] T018 [US2] Implement Services section container in src/components/layout/Services.tsx
- [X] T019 [US2] Add Services section to src/App.tsx

---

## Phase 5: User Story 3 - Consulta vía WhatsApp (Priority: P3)

**Goal**: Botón de contacto directo con mensaje predefinido.

**Independent Test**: El botón de WhatsApp redirige a wa.me con el número y mensaje correcto.

### Tests for User Story 3

- [X] T020 [P] [US3] Write test for WhatsAppButton (URL construction) in src/components/ui/WhatsAppButton.test.tsx

### Implementation for User Story 3

- [X] T021 [P] [US3] Create floating WhatsAppButton component in src/components/ui/WhatsAppButton.tsx
- [X] T022 [US3] Add WhatsAppButton to src/App.tsx

---

## Phase 6: Mapa y Ubicación Dinámica

**Purpose**: Integración de Google Maps con estilo elegante.

- [X] T023 [P] Write test for MapWidget (iframe filtering) in src/components/ui/MapWidget.test.tsx
- [X] T024 [P] Create MapWidget component with grayscale filter in src/components/ui/MapWidget.tsx
- [X] T025 Add MapWidget to a new Location section in src/components/layout/Location.tsx
- [X] T026 Integrate Location section in src/App.tsx

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Optimización móvil y cumplimiento constitucional.

- [X] T027 [P] Implement responsive media queries for all components in their .module.css
- [X] T028 Performance optimization: Ensure LCP < 1.2s using React.lazy for MapWidget in src/App.tsx
- [X] T029 Accessibility audit: Validate semantic HTML and ARIA labels across all components
- [X] T030 Final Lighthouse run and validation against SC-001, SC-002, SC-003

---

## Dependencies & Execution Order

### Phase Dependencies

1. **Setup (Phase 1)**: No dependencies.
2. **Foundational (Phase 2)**: Depends on Phase 1.
3. **User Story 1 (Phase 3)**: Depends on Phase 2 (Foundation).
4. **User Stories 2, 3 & Map**: Can proceed in parallel after Phase 3 is validated.
5. **Polish (Final)**: Depends on all implementation tasks being complete.

---

## Parallel Execution Examples

- **Logo and MockData**: T005 and T007 can be done at the same time.
- **Story Tests**: T009 and T010 can be written in parallel.
- **Component Styling**: All `.module.css` files can be worked on independently of other components.

---

## Implementation Strategy

### MVP First (User Story 1)
1. Complete Setup and Foundational.
2. Implement User Story 1 (Contact info + Hero).
3. **STOP and VALIDATE**: Ensure the core purpose (finding the pharmacy) is met.

### Incremental Delivery
- Add Services (US2).
- Add WhatsApp (US3).
- Add Map and Polish.
