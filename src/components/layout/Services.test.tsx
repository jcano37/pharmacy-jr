import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Services from './Services';
import { SERVICES_DATA } from '../../constants/mockData';

describe('Services Section', () => {
  it('renders section title and subtitle', () => {
    render(<Services />);
    expect(screen.getByText(/nuestros servicios/i)).toBeInTheDocument();
  });

  it('renders all mock services', () => {
    render(<Services />);
    SERVICES_DATA.forEach(service => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });
});
