import React from 'react';
import styles from './Section.module.css';

export interface SectionProps {
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', title, subtitle, children }) => {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
