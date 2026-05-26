import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PHARMACY_DATA } from '../../constants/mockData';
import BusinessHours from '../ui/BusinessHours';
import localImage from '../../assets/local.png';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className={styles.content}>
          <motion.h1 className={styles.title} variants={itemVariants}>
            Farmacia <br />
            <span className={styles.highlight}>Jiménez Rosales</span>
          </motion.h1>
          <motion.p className={styles.tagline} variants={itemVariants}>
            {PHARMACY_DATA.tagline}
          </motion.p>
          
          <motion.div className={styles.ctaGroup} variants={itemVariants}>
            <BusinessHours />
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src={localImage} alt="Farmacia Jiménez Rosales - Local" className={styles.heroImage} />
          <div className={styles.overlay}></div>
          <div className={styles.gradient}></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
