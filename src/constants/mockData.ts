export interface PharmacyInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    neighborhood: string;
    mapUrl: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    whatsappMsg: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}

export interface BusinessHours {
  weekday: string;
  open: string;
  close: string;
  isNightShift: boolean;
}

export interface ProfessionalService {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const PHARMACY_DATA: PharmacyInfo = Object.freeze({
  name: "Farmacia Jiménez Rosales",
  tagline: "Tu salud en buenas manos",
  address: {
    street: "B° Camilo Chamorro",
    neighborhood: "Managua",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.379844930828!2d-86.2032565851863!3d12.1544430913956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fd780dba58cf%3A0x9c6b4234a7fe9b17!2sFarmacia%20Jim%C3%A9nez%20Rosales!5e0!3m2!1sen!2sni!4v1716746600000!5m2!1sen!2sni"
  },
  contact: {
    phone: "8172 1795",
    whatsapp: "81721795",
    whatsappMsg: "Hola Farmacia Jiménez Rosales, quisiera realizar un pedido: "
  },
  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=61584680801394",
    instagram: "https://instagram.com/farmaciajimenez.r?igsh=YnYzM3lncjE5YXh2",
    tiktok: "https://www.tiktok.com/@farmacia.jimenez.r"
  }
});

export const HOURS_DATA: readonly BusinessHours[] = Object.freeze([
  { weekday: "Lunes a Sábado", open: "08:00", close: "17:00", isNightShift: false },
  { weekday: "Domingos", open: "10:00", close: "17:00", isNightShift: false }
]);

export const SERVICES_DATA: readonly ProfessionalService[] = Object.freeze([
  {
    id: "1",
    title: "Medicamentos de calidad",
    description: "Amplio stock de medicamentos éticos y genéricos con garantía de origen.",
    iconName: "Activity"
  },
  {
    id: "2",
    title: "Vitaminas y bienestar",
    description: "Suplementos y productos de cuidado personal para toda la familia.",
    iconName: "FlaskConical"
  },
  {
    id: "3",
    title: "Entregas a domicilio",
    description: "Servicio de delivery rápido y seguro en toda la zona del B° Camilo Chamorro.",
    iconName: "ClipboardList"
  }
]);
