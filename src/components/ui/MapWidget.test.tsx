import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MapWidget from './MapWidget';
import { PHARMACY_DATA } from '../../constants/mockData';

describe('MapWidget Component', () => {
  it('renders iframe with correct src', () => {
    render(<MapWidget />);
    const iframe = screen.getByTitle(/ubicación/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', PHARMACY_DATA.address.mapUrl);
  });
});
