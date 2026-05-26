import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import BusinessHours from './BusinessHours';

describe('BusinessHours Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders correctly', () => {
    render(<BusinessHours />);
    expect(screen.getByTestId('business-status')).toBeInTheDocument();
  });

  it('displays "Abierto" when within business hours', () => {
    // Mock Monday 10:00 AM (8:00 - 22:00)
    const date = new Date(2026, 4, 25, 10, 0); // May 25, 2026 is Monday
    vi.setSystemTime(date);
    
    render(<BusinessHours />);
    expect(screen.getAllByText(/abierto/i).length).toBeGreaterThan(0);
  });

  it('displays "Cerrado" when outside business hours', () => {
    // Mock Monday 11:00 PM
    const date = new Date(2026, 4, 25, 23, 0);
    vi.setSystemTime(date);
    
    render(<BusinessHours />);
    expect(screen.getAllByText(/cerrado/i).length).toBeGreaterThan(0);
  });
});
