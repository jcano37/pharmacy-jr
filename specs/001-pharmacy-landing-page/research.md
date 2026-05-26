# Research: Landing Page Pharmacy Jr

## Findings & Decisions

### 1. Logo Strategy (SVG Programmatic)
- **Decision**: Crear un logotipo minimalista utilizando tipografía elegante (Serif para el nombre, Sans-serif para el rubro) dentro de un componente React que renderice un `<svg>`.
- **Rationale**: Asegura escalabilidad perfecta y carga instantánea sin requerir peticiones de red adicionales para archivos de imagen.
- **Alternatives**: Cargar un PNG (rechazado por peso y falta de nitidez en retina displays).

### 2. Map Integration (Google Maps Embed vs Static)
- **Decision**: Utilizar un `<iframe>` de Google Maps Embed con la dirección física, aplicando filtros CSS de saturación y brillo para lograr el efecto "Muted/Grayscale" elegante.
- **Rationale**: No requiere API Keys complejas para una landing page simple y permite al usuario interactuar para ver la ruta.
- **Alternatives**: Google Static Maps API (rechazado porque no permite interacción táctil fluida).

### 3. Color Palette & Typography
- **Decision**: 
    - **Primary**: #064E3B (Emerald 900 - Profundo, médico, confiable).
    - **Accent**: #D4AF37 (Gold - Elegancia, calidad).
    - **Background**: #F9FAFB (White Smoke - Limpieza).
    - **Typography**: Playfair Display (Headers) + Inter (Body).
- **Rationale**: Alineado con el requerimiento de elegancia y modernidad para una farmacia premium.

### 4. WhatsApp Deep Linking
- **Decision**: Usar `https://wa.me/` con `encodeURIComponent` para el mensaje predefinido.
- **Rationale**: Es el estándar oficial que funciona tanto en móvil como en escritorio.

## Best Practices
- **CSS Modules**: Nombrar archivos como `[Component].module.css` para evitar colisiones de estilos globales.
- **Lazy Loading**: Implementar `React.lazy` para la sección del Mapa para mejorar el LCP inicial.
