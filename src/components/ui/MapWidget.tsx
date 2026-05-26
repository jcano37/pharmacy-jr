import React from 'react';
import { PHARMACY_DATA } from '../../constants/mockData';
import styles from './MapWidget.module.css';

interface MapWidgetProps {
  className?: string;
}

const MapWidget: React.FC<MapWidgetProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.mapContainer} ${className}`}>
      <iframe
        src={PHARMACY_DATA.address.mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de la Farmacia"
        className={styles.iframe}
      ></iframe>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default MapWidget;
