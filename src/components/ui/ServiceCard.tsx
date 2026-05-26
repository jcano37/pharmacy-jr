import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        borderColor: "var(--color-accent)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
