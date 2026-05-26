import React from 'react';
import Section from './Section';
import MapWidget from '../ui/MapWidget';
import { PHARMACY_DATA } from '../../constants/mockData';
import styles from './Location.module.css';

const Location: React.FC = () => {
  return (
    <Section 
      id="ubicacion" 
      title="Nuestra Ubicación" 
      subtitle={`Encuéntrenos en el corazón de ${PHARMACY_DATA.address.neighborhood}. Atendemos pedidos a domicilio.`}
    >
      <div className={styles.grid}>
        <div className={styles.info}>
          <div className={styles.card}>
            <h3>Dirección</h3>
            <p>{PHARMACY_DATA.address.street}</p>
            <p>{PHARMACY_DATA.address.neighborhood}</p>
          </div>
          <div className={styles.card}>
            <h3>Contacto</h3>
            <p>WhatsApp: {PHARMACY_DATA.contact.phone}</p>
          </div>
        </div>
        <div className={styles.map}>
          <MapWidget />
        </div>
      </div>
    </Section>
  );
};

export default Location;
