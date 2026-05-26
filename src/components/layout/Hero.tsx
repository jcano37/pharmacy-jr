import React from 'react';
import { PHARMACY_DATA } from '../../constants/mockData';
import BusinessHours from '../ui/BusinessHours';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Farmacia <br />
            <span className={styles.highlight}>Jiménez Rosales</span>
          </h1>
          <p className={styles.tagline}>{PHARMACY_DATA.tagline}</p>
          
          <div className={styles.ctaGroup}>
            <BusinessHours />
          </div>
        </div>
        
        <div className={styles.imagePlaceholder}>
          {/* Aquí iría una imagen elegante del local o personal médico */}
          <div className={styles.overlay}></div>
          <div className={styles.gradient}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
