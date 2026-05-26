import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { PHARMACY_DATA } from '../../constants/mockData';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = PHARMACY_DATA.contact.whatsapp.replace(/\+/g, '');
  const message = encodeURIComponent(PHARMACY_DATA.contact.whatsappMsg);
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a 
      href={waUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.button}
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0 }}
      animate={{ 
        scale: [1, 1.1, 1],
      }}
      transition={{ 
        scale: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={32} />
      <span className={styles.tooltip}>¿En qué podemos ayudarte?</span>
    </motion.a>
  );
};

export default WhatsAppButton;
