import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { PHARMACY_DATA } from '../../constants/mockData';
import Logo from '../ui/Logo';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo className={styles.logo} width="auto" height={50} />
        
        <div className={styles.contactInfo}>
          <div className={styles.item}>
            <MapPin size={18} className={styles.icon} />
            <div className={styles.textGroup}>
              <span className={styles.label}>Ubicación</span>
              <span className={styles.value}>{PHARMACY_DATA.address.street}</span>
            </div>
          </div>
          
          <div className={styles.item}>
            <Phone size={18} className={styles.icon} />
            <div className={styles.textGroup}>
              <span className={styles.label}>Llámanos</span>
              <a href={`tel:${PHARMACY_DATA.contact.phone}`} className={styles.value}>
                {PHARMACY_DATA.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
