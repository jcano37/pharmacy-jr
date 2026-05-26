import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Music2 } from 'lucide-react';
import styles from './Footer.module.css';
import Logo from '../ui/Logo';
import { PHARMACY_DATA } from '../../constants/mockData';

const Footer: React.FC = () => {
  const socialIconVariants = {
    hover: { 
      y: -5,
      color: "var(--color-accent)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Logo width="auto" height={60} variant="light" />
          <p className={styles.description}>
            Comprometidos con su bienestar desde hace más de 20 años.
            Profesionalismo y calidez en cada atención.
          </p>
          <div className={styles.social}>
            <motion.a 
              href={PHARMACY_DATA.socialMedia.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              whileHover="hover"
              variants={socialIconVariants}
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a 
              href={PHARMACY_DATA.socialMedia.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              whileHover="hover"
              variants={socialIconVariants}
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a 
              href={PHARMACY_DATA.socialMedia.tiktok} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok"
              whileHover="hover"
              variants={socialIconVariants}
            >
              <Music2 size={24} />
            </motion.a>
          </div>
        </div>
        
        <div className={styles.links}>
          <h3>Navegación</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#ubicacion">Ubicación</a></li>
          </ul>
        </div>
        
        <div className={styles.contact}>
          <h3>Contacto</h3>
          <p>{PHARMACY_DATA.address.street}</p>
          <p>WhatsApp: {PHARMACY_DATA.contact.phone}</p>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Farmacia Jiménez Rosales. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
