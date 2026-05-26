import React from 'react';
import { Clock } from 'lucide-react';
import { useBusinessStatus } from '../../hooks/useBusinessStatus';
import styles from './BusinessHours.module.css';

const BusinessHours: React.FC = () => {
  const { isOpen, message } = useBusinessStatus();

  return (
    <div className={styles.statusWrapper} data-testid="business-status">
      <div className={`${styles.indicator} ${isOpen ? styles.open : styles.closed}`}>
        <span className={styles.dot}></span>
        <span className={styles.label}>{isOpen ? 'Abierto' : 'Cerrado'}</span>
      </div>
      <div className={styles.detail}>
        <Clock size={16} className={styles.icon} />
        <span>{message}</span>
      </div>
    </div>
  );
};

export default BusinessHours;
