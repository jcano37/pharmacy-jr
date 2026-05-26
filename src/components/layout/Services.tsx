import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Syringe, FlaskConical, ClipboardList } from 'lucide-react';
import { SERVICES_DATA } from '../../constants/mockData';
import Section from './Section';
import ServiceCard from '../ui/ServiceCard';
import styles from './Services.module.css';

const IconMap: Record<string, React.ReactNode> = {
  Activity: <Activity size={28} />,
  Syringe: <Syringe size={28} />,
  FlaskConical: <FlaskConical size={28} />,
  ClipboardList: <ClipboardList size={28} />,
};

const Services: React.FC = () => {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section 
      id="servicios" 
      title="Nuestros Servicios" 
      subtitle="Ofrecemos atención farmacéutica especializada con el compromiso y la excelencia que usted merece."
      className={styles.services}
    >
      <motion.div 
        className={styles.grid}
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {SERVICES_DATA.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={IconMap[service.iconName]}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Services;
