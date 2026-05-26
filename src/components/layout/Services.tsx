import React from 'react';
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
  return (
    <Section 
      id="servicios" 
      title="Nuestros Servicios" 
      subtitle="Ofrecemos atención farmacéutica especializada con el compromiso y la excelencia que usted merece."
      className={styles.services}
    >
      <div className={styles.grid}>
        {SERVICES_DATA.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={IconMap[service.iconName]}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
