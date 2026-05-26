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
    // Mock Monday 10:00 AM (8:00 - 17:00)
    const date = new Date(2026, 4, 25, 10, 0); // May 25, 2026 is Monday
    vi.setSystemTime(date);
    
    render(<BusinessHours />);
    expect(screen.getAllByText(/abierto/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/17:00/)).toBeInTheDocument();
  });

  it('displays "Cerrado" when outside business hours', () => {
    // Mock Monday 6:00 PM
    const date = new Date(2026, 4, 25, 18, 0);
    vi.setSystemTime(date);
    
    render(<BusinessHours />);
    expect(screen.getAllByText(/cerrado/i).length).toBeGreaterThan(0);
  });
});
