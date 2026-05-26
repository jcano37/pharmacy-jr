# Data Model: Landing Page Farmacia Jiménez Rosales

## Entities

### PharmacyInfo
Represents the core information of the pharmacy.

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| `name` | string | Commercial name ("Farmacia Jiménez Rosales") | Required |
| `tagline` | string | Brand slogan | Required |
| `address` | object | Physical location details | Required |
| `address.street` | string | Street and building info | Required |
| `address.neighborhood` | string | Area/Neighborhood name | Required |
| `address.mapEmbedUrl` | string | Resolved Google Maps embed URL | URL format |
| `contact` | object | Communication channels | Required |
| `contact.phone` | string | Public phone number | Phone format |
| `contact.whatsapp` | string | WhatsApp number (digits only) | Numeric string |
| `contact.whatsappMsg` | string | Pre-filled message for WhatsApp | Required |
| `socialMedia` | object | Social media profile links | Optional |
| `socialMedia.facebook` | string | Facebook profile URL | URL format |
| `socialMedia.instagram` | string | Instagram profile URL | URL format |
| `socialMedia.tiktok` | string | TikTok profile URL | URL format |

*Note: The `email` field has been removed as per the business requirements.*

### VisualBranding
Defines the visual characteristics and assets.

| Field | Type | Description |
|-------|------|-------------|
| `primaryColor` | string | Deep Blue (#1e3a8a) |
| `accentColor` | string | Celeste (#38bdf8) |
| `backgroundColor` | string | White (#ffffff) |
| `logoPath` | string | Path to `logo.png` |
| `storefrontPath` | string | Path to `local.png` |

### BusinessHours
Represents the opening and closing times.

| Field | Type | Description |
|-------|------|-------------|
| `weekday` | string | Day range (e.g., "Lunes a Sábado") |
| `open` | string | Opening time (HH:mm) |
| `close` | string | Closing time (HH:mm) |

### ProfessionalService
Represents a service offered by the pharmacy.

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `title` | string | Service name |
| `description` | string | Brief explanation of the service |
| `iconName` | string | Key for Lucide React icon |
