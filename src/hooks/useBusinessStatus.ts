import { useState, useEffect } from 'react';
import { HOURS_DATA, BusinessHours } from '../constants/mockData';

interface BusinessStatus {
  isOpen: boolean;
  message: string;
  nextStatusChange?: string;
}

export const useBusinessStatus = (): BusinessStatus => {
  const [status, setStatus] = useState<BusinessStatus>({ isOpen: false, message: 'Cerrado' });

  useEffect(() => {
    const calculateStatus = () => {
      const now = new Date();
      const currentDay = now.toLocaleDateString('es-AR', { weekday: 'long' }).toLowerCase();
      const currentTime = now.getHours() * 100 + now.getMinutes();

      // Find relevant schedule
      const todaySchedule = HOURS_DATA.find(h => {
        if (currentDay.includes('lunes') || currentDay.includes('martes') || 
            currentDay.includes('miércoles') || currentDay.includes('jueves') || 
            currentDay.includes('viernes')) {
          return h.weekday.toLowerCase().includes('lunes a viernes');
        }
        if (currentDay.includes('sábado')) {
          return h.weekday.toLowerCase().includes('sábados');
        }
        return h.weekday.toLowerCase().includes('domingos');
      });

      if (!todaySchedule) {
        setStatus({ isOpen: false, message: 'Cerrado' });
        return;
      }

      if (todaySchedule.isNightShift) {
        setStatus({ isOpen: true, message: 'De Guardia 24hs' });
        return;
      }

      const openTime = parseInt(todaySchedule.open.replace(':', ''));
      const closeTime = parseInt(todaySchedule.close.replace(':', ''));

      const isOpen = currentTime >= openTime && currentTime < closeTime;

      setStatus({
        isOpen,
        message: isOpen ? `Abierto hasta las ${todaySchedule.close}` : `Cerrado. Abre a las ${todaySchedule.open}`,
      });
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return status;
};
