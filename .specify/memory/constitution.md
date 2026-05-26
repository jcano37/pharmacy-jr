<!--
Sync Impact Report:
- Version change: Initial -> 1.0.0
- Modified principles: None (initial fill)
- Added sections: Core Principles (5), Requisitos Técnicos, Proceso de Desarrollo.
- Templates requiring updates:
    - .specify/templates/plan-template.md ✅ updated
    - .specify/templates/spec-template.md ✅ updated
    - .specify/templates/tasks-template.md ✅ updated
- Follow-up TODOs: None
-->

# Pharmacy Jr Constitution

## Core Principles

### I. Arquitectura Estática y Modular
Todo el sitio debe ser generado de forma estática (SSG) para maximizar la velocidad y seguridad. Los componentes deben ser autocontenidos, documentados y seguir el principio de responsabilidad única. Rationale: Garantiza un mantenimiento sencillo y un despliegue altamente eficiente.

### II. Performance Crítico
La velocidad es una característica, no un extra. Se requiere un tiempo de carga inicial (LCP) inferior a 1.2 segundos. Las imágenes deben ser optimizadas automáticamente y el código debe estar minificado y dividido (code-splitting). Rationale: El rendimiento es clave para la retención del usuario y el SEO.

### III. Accesibilidad Universal (A11y)
El sitio debe ser utilizable por todos. Se exige cumplimiento estricto de las pautas WCAG 2.1 Nivel AA. El uso de HTML semántico es obligatorio, asegurando una navegación fluida con lectores de pantalla y teclado. Rationale: La inclusión es un pilar fundamental de nuestra ética de desarrollo y amplia el alcance del producto.

### IV. Desarrollo Basado en Pruebas (TDD)
El ciclo Red-Green-Refactor es mandatorio. Ninguna lógica de negocio o componente crítico puede ser implementado sin antes contar con una prueba automatizada que valide su comportamiento. Rationale: Reduce la deuda técnica y garantiza la estabilidad del producto a largo plazo.

### V. Seguridad y Privacidad
Se deben implementar cabeceras de seguridad (CSP, HSTS) y minimizar el uso de scripts de terceros. La privacidad del usuario es prioritaria: no se debe recolectar información sensible sin consentimiento explícito. Rationale: Protege tanto al usuario como a la integridad técnica de la aplicación.

## Requisitos Técnicos

### Stack Tecnológico
- **Frontend**: React.js con TypeScript (Strict Mode).
- **Herramienta de Construcción**: Vite para un desarrollo rápido y builds optimizados.
- **Estilos**: CSS nativo o CSS Modules para evitar dependencias externas innecesarias.
- **Estado**: Hooks nativos de React (useState, useReducer, useContext) por defecto.

### Estándares de Calidad
- Puntuación mínima de 90 en todos los apartados de Google Lighthouse (Performance, Accessibility, Best Practices, SEO).
- Cobertura de pruebas unitarias superior al 80% en lógica de negocio.

## Proceso de Desarrollo

### Flujo de Trabajo
1. **Especificación**: Definir la funcionalidad en un Spec.
2. **TDD Red**: Escribir pruebas que fallen.
3. **TDD Green**: Implementación mínima para pasar las pruebas.
4. **Refactor**: Mejorar el código siguiendo principios SOLID y Clean Code.

## Governance
Esta Constitución es el documento supremo del proyecto y prevalece sobre cualquier otra práctica. Cualquier desviación de estos principios debe ser discutida, justificada en un Architecture Decision Record (ADR) y aprobada por el equipo, actualizando este documento mediante una nueva versión semántica.

**Version**: 1.0.0 | **Ratified**: 2026-05-26 | **Last Amended**: 2026-05-26
