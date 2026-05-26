import React from 'react';
import logoPng from '../../assets/logo.png';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  width = 'auto', 
  height = 40,
  showText = true 
}) => {
  return (
    <div className={`${styles.logoContainer} ${className}`}>
      <img 
        src={logoPng} 
        alt="Logo Farmacia Jiménez Rosales" 
        style={{ width, height, objectFit: 'contain' }}
      />
      {showText && (
        <div className={styles.textContainer}>
          <span className={styles.brandName}>Farmacia</span>
          <span className={styles.ownerName}>Jiménez Rosales</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
