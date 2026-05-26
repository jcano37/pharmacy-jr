# UI Contracts: Landing Page Farmacia Jiménez Rosales

## Components

### Hero (Layout)
Main entry section with the local image and core brand message. *Enhanced with Framer Motion entrance animations.*

**Props**:
- `info`: `PharmacyInfo`
- `hours`: `BusinessHours[]`

**Animations**:
- Fade-in and slide-up for title and tagline.
- Scale-up for hero image.

---

### Services (Layout)
Grid displaying the professional services.

**Props**:
- `services`: `ProfessionalService[]`

**Animations**:
- Staggered children entrance for ServiceCards.

---

### Location (Layout)
Section with contact details and the interactive map.

**Props**:
- `address`: `PharmacyInfo['address']`

---

### Footer (Layout)
Bottom section with the official logo, social media links, and copyright.

**Props**:
- `name`: `string`
- `socialMedia`: `PharmacyInfo['socialMedia']`

---

### Logo (UI)
Wrapper for the official logo image (`src/assets/logo.png`) combined with the text "Farmacia Jiménez Rosales".

**Props**:
- `className?`: `string`
- `showText?`: `boolean` (Default: true)
- `width?`: `number | string`
- `height?`: `number | string`

---

### ServiceCard (UI)
Display card for a single service. *Enhanced with hover animations.*

**Props**:
- `title`: `string`
- `description`: `string`
- `icon`: `ReactNode`

**Animations**:
- `whileHover`: Scale (1.05) and elevation shadow.

---

### MapWidget (UI)
Wrapper for the Google Maps iframe.

**Props**:
- `embedUrl`: `string`
- `className?`: `string`

---

### WhatsAppButton (UI)
Floating or prominent button for direct contact.

**Props**:
- `number`: `string`
- `message`: `string`
- `variant`: `'floating' | 'standard'`
