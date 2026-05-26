# UI Contracts: Landing Page Pharmacy Jr

## Component Interfaces

### 1. SectionProps (Generic)
Todos los componentes de sección siguen esta estructura para consistencia visual.

```typescript
interface SectionProps {
  id: string;          // Anchor ID para navegación
  className?: string;  // Para overrides de estilos
  title?: string;      // Título de la sección
  subtitle?: string;   // Subtítulo elegante
}
```

### 2. ServiceCardProps
Contrato para el componente de tarjeta de servicios.

```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;      // Para animaciones de entrada (Framer Motion o CSS)
}
```

### 3. MapWidgetProps
Contrato para la integración del mapa.

```typescript
interface MapWidgetProps {
  address: string;
  embedUrl: string;
  variant: 'elegant' | 'default'; // 'elegant' aplica el filtro grayscale
}
```

## Styling Contract (CSS Variables)
El tema se controla mediante variables globales en `src/styles/variables.css`.

```css
:root {
  --color-primary: #064E3B;
  --color-accent: #D4AF37;
  --color-bg: #F9FAFB;
  --color-text-main: #111827;
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Inter', sans-serif;
  --max-width: 1200px;
}
```
