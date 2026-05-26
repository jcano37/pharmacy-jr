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
  tagline: "Excelencia y compromiso en el cuidado de su salud",
  address: {
    street: "Av. Principal #123",
    neighborhood: "Barrio Centro",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167132768406!2d-58.3815704!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa054943f3e1c63%3A0x83209513b1aaec7c!2sObelisco!5e0!3m2!1ses-419!2sar!4v1620000000000!5m2!1ses-419!2sar"
  },
  contact: {
    phone: "011-4444-5555",
    whatsapp: "+5491122334455",
    whatsappMsg: "Hola Farmacia Jiménez Rosales, quisiera consultar el stock del siguiente producto: "
  }
});

export const HOURS_DATA: BusinessHours[] = Object.freeze([
  { weekday: "Lunes a Viernes", open: "08:00", close: "22:00", isNightShift: false },
  { weekday: "Sábados", open: "09:00", close: "20:00", isNightShift: false },
  { weekday: "Domingos y Feriados", open: "00:00", close: "00:00", isNightShift: true }
]);

export const SERVICES_DATA: ProfessionalService[] = Object.freeze([
  {
    id: "1",
    title: "Toma de Presión Arterial",
    description: "Control preciso con equipos digitales de última generación y seguimiento profesional.",
    iconName: "Activity"
  },
  {
    id: "2",
    title: "Aplicación de Inyectables",
    description: "Servicio realizado por personal matriculado garantizando higiene y seguridad.",
    iconName: "Syringe"
  },
  {
    id: "3",
    title: "Fórmulas Magistrales",
    description: "Preparaciones personalizadas según la prescripción de su médico de confianza.",
    iconName: "FlaskConical"
  },
  {
    id: "4",
    title: "Atención Farmacéutica",
    description: "Asesoramiento profesional sobre el uso correcto de sus medicamentos.",
    iconName: "ClipboardList"
  }
]);
