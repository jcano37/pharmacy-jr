import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WhatsAppButton from './WhatsAppButton';
import { PHARMACY_DATA } from '../../constants/mockData';

describe('WhatsAppButton Component', () => {
  it('renders correctly', () => {
    render(<WhatsAppButton />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('contains the correct WhatsApp URL', () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole('link');
    const expectedUrl = `https://wa.me/${PHARMACY_DATA.contact.whatsapp.replace(/\+/g, '')}`;
    expect(link.getAttribute('href')).toContain(expectedUrl);
    expect(link.getAttribute('href')).toContain(encodeURIComponent(PHARMACY_DATA.contact.whatsappMsg));
  });
});
