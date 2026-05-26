---

description: "Task list for Landing Page Farmacia Jiménez Rosales implementation"
---

# Tasks: Landing Page Farmacia Jiménez Rosales

**Input**: Design documents from `/specs/001-pharmacy-landing-page/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: TDD approach is required by the Constitution. Tests MUST be written and fail before implementation.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 [P] Configure global CSS variables (Celeste/Blue palette) and resets in `src/styles/variables.css`
- [x] T002 Update `PHARMACY_DATA` (remove email, update map URL, add social links) in `src/constants/mockData.ts`
- [x] T003 [P] Setup Vitest and React Testing Library configuration in `src/test/setup.ts`
- [x] T004 Update Favicon to use `logo.png` in `index.html`
- [x] T005 Install `framer-motion` for animations: `npm install framer-motion`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T006 Create `Section` layout wrapper with semantic HTML in `src/components/layout/Section.tsx`
- [x] T007 [P] Implement `useBusinessStatus` hook for dynamic open/closed state in `src/hooks/useBusinessStatus.ts`
- [x] T008 [P] Update `Logo` component to use `logo.png` and display "Farmacia Jiménez Rosales" text in `src/components/ui/Logo.tsx`
- [x] T009 Define `PharmacyInfo` and related interfaces in `src/constants/mockData.ts`

---

## Phase 3: User Story 1 - Información de Contacto y Ubicación (Priority: P1) 🎯 MVP

**Goal**: Users can find address, Google Maps link, WhatsApp, and current status instantly.

**Independent Test**: Verify Hero and Location sections display correct address, clickable WhatsApp, and working Google Maps embed.

### Tests for User Story 1

- [x] T010 [P] [US1] Create unit test for `BusinessHours` component in `src/components/ui/BusinessHours.test.tsx`
- [x] T011 [P] [US1] Create unit test for `MapWidget` component in `src/components/ui/MapWidget.test.tsx`

### Implementation for User Story 1

- [x] T012 [P] [US1] Implement `MapWidget` with iframe embed in `src/components/ui/MapWidget.tsx`
- [x] T013 [US1] Implement `BusinessHours` component using `useBusinessStatus` in `src/components/ui/BusinessHours.tsx`
- [x] T014 [US1] Add entrance animations to `Hero` component (fade-in, slide-up) using Framer Motion in `src/components/layout/Hero.tsx`
- [x] T015 [P] [US1] Update `Hero` component to include the local image `src/assets/local.png` and `BusinessHours` in `src/components/layout/Hero.tsx`
- [x] T016 [US1] Update `Location` section to remove email in `src/components/layout/Location.tsx`

---

## Phase 4: User Story 2 - Catálogo de Servicios Esenciales (Priority: P2)

**Goal**: Display services elegantly with staggered entrance animations and hover effects.

**Independent Test**: Navigation to "Servicios" shows 3 cards with hover animations.

### Tests for User Story 2

- [x] T017 [P] [US2] Create unit test for `ServiceCard` component in `src/components/ui/ServiceCard.test.tsx`
- [x] T018 [P] [US2] Create unit test for `Services` layout component in `src/components/layout/Services.test.tsx`

### Implementation for User Story 2

- [x] T019 [P] [US2] Add hover scale animation to `ServiceCard` component in `src/components/ui/ServiceCard.tsx`
- [x] T020 [P] [US2] Implement `ServiceCard` UI component in `src/components/ui/ServiceCard.tsx`
- [x] T021 [US2] Add staggered children entrance animation to `Services` grid in `src/components/layout/Services.tsx`
- [x] T022 [US2] Implement `Services` layout section using `SERVICES_DATA` in `src/components/layout/Services.tsx`

---

## Phase 5: User Story 3 - Consulta y Pedidos vía WhatsApp (Priority: P3)

**Goal**: Direct conversion through a functional and animated WhatsApp button.

**Independent Test**: Button pulsates or has a subtle attention-grabbing animation.

### Tests for User Story 3

- [x] T023 [P] [US3] Create unit test for `WhatsAppButton` in `src/components/ui/WhatsAppButton.test.tsx`

### Implementation for User Story 3

- [x] T024 [US3] Add subtle pulse animation to `WhatsAppButton` using Framer Motion in `src/components/ui/WhatsAppButton.tsx`
- [x] T025 [US3] Implement `WhatsAppButton` component in `src/components/ui/WhatsAppButton.tsx`
- [x] T026 [US3] Integrate `WhatsAppButton` into the global `App.tsx`

---

## Phase 6: User Story 4 - Presencia en Redes Sociales (Priority: P4)

**Goal**: Connect users to social profiles via animated links in Footer.

**Independent Test**: Hovering social icons shows color transition and subtle lift.

### Tests for User Story 4

- [x] T027 [P] [US4] Create unit test for `Footer` social links in `src/components/layout/Footer.test.tsx`

### Implementation for User Story 4

- [x] T028 [US4] Update `Footer` to remove email contact info in `src/components/layout/Footer.tsx`
- [x] T029 [US4] Implement `Footer` with social media icons and hover animations in `src/components/layout/Footer.tsx`

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T030 [P] Ensure all images are responsive and optimized.
- [x] T031 [P] Ensure all animations respect `prefers-reduced-motion`.
- [ ] T032 Validate WCAG 2.1 AA compliance for the new Celeste/Blue palette contrast.
- [x] T033 Final code cleanup and removal of any green-themed legacy code.
- [x] T034 Run full test suite: `npm test`
- [x] T035 Run production build check: `npm run build`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: All infrastructure configured.
- **Foundational (Phase 2)**: Core UI elements ready.
- **User Stories (Phase 3-6)**: Fully implemented with animations.
- **Polish (Phase 7)**: Final validations completed.

### Parallel Opportunities

- All [P] tasks were executed concurrently when possible.
- Design updates and animations were integrated into each component.

---

## Implementation Strategy

### Premium Feel (Animations)

1. **Section Entrances**: Scroll-triggered fade-ins for all page sections.
2. **Interactive Elements**: Scale and shadow effects on cards and social links.
3. **Logo Branding**: Official logo paired with elegant typography.
