import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PHARMACY_DATA } from '../../constants/mockData';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = PHARMACY_DATA.contact.whatsapp.replace(/\+/g, '');
  const message = encodeURIComponent(PHARMACY_DATA.contact.whatsappMsg);
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={waUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.button}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
      <span className={styles.tooltip}>¿En qué podemos ayudarte?</span>
    </a>
  );
};

export default WhatsAppButton;
