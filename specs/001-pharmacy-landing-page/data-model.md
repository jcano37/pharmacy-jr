# Data Model: Landing Page Pharmacy Jr

## Entities & Schemas

### 1. PharmacyInfo (Single Instance)
Representa los datos fundamentales de la farmacia.

```typescript
interface PharmacyInfo {
  name: string;        // "Farmacia Jiménez Rosales"
  tagline: string;     // "Cuidando tu salud con excelencia"
  address: {
    street: string;    // "Av. Principal #123"
    neighborhood: string; // "Barrio Centro"
    mapUrl: string;    // Google Maps Embed URL
  };
  contact: {
    phone: string;     // "011-4444-5555"
    whatsapp: string;  // "+5491122334455"
    whatsappMsg: string; // Mensaje predefinido
  };
}
```

### 2. BusinessHours
Horarios de atención estructurados para cálculos de estado (Abierto/Cerrado).

```typescript
interface BusinessHours {
  weekday: string;     // "Lunes a Viernes"
  open: string;        // "08:00"
  close: string;       // "22:00"
  isNightShift: boolean; // Indica si está de guardia
}
```

### 3. Service
Catálogo de servicios profesionales.

```typescript
interface ProfessionalService {
  id: string;
  title: string;
  description: string;
  iconName: string;    // Mapeado a Lucide Icon name
}
```

## Mock Data Strategy
- Los datos residirán en `src/constants/mockData.ts`.
- Se utilizarán constantes congeladas (`Object.freeze`) para asegurar la integridad durante el runtime.
- **Validación**: Aunque los datos son estáticos, se usarán tipos de TypeScript para asegurar que todos los componentes reciban las props correctas.
