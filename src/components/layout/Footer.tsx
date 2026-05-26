import React from 'react';
import styles from './Footer.module.css';
import Logo from '../ui/Logo';
import { PHARMACY_DATA } from '../../constants/mockData';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Logo width={200} height={50} />
          <p className={styles.description}>
            Comprometidos con su bienestar desde hace más de 20 años.
            Profesionalismo y calidez en cada atención.
          </p>
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
          <p>{PHARMACY_DATA.contact.phone}</p>
          <p>{PHARMACY_DATA.contact.whatsapp}</p>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Farmacia Jiménez Rosales. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
