# Quickstart: Landing Page Pharmacy Jr

## Environment Setup
Para comenzar el desarrollo de la landing page, sigue estos pasos:

1. **Instalación de Dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en Desarrollo**:
   ```bash
   npm run dev
   ```

3. **Ejecutar Pruebas (TDD)**:
   ```bash
   npm run test
   ```

## Development Workflow
1. **Configuración de Datos**: Edita `src/constants/mockData.ts` para ajustar la información de la farmacia.
2. **Estilos**: Los estilos base están en `src/styles/variables.css`. Cada componente usa su propio archivo `.module.css`.
3. **Componentes**: Crea nuevos componentes en `src/components/` siguiendo los contratos definidos en `specs/001-pharmacy-landing-page/contracts/ui-contracts.md`.

## Quality Checks
Antes de finalizar, asegúrate de:
- Pasar el checklist de accesibilidad.
- Verificar que el LCP sea inferior a 1.2s en el build de producción.
- Validar el diseño en vistas móviles (iPhone SE / Pixel 5).
