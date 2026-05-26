import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';
import { PHARMACY_DATA } from '../../constants/mockData';

describe('Header Component', () => {
  it('renders pharmacy logo', () => {
    render(<Header />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument(); // Logo is SVG
  });

  it('displays contact phone number', () => {
    render(<Header />);
    expect(screen.getByText(PHARMACY_DATA.contact.phone)).toBeInTheDocument();
  });

  it('displays address street', () => {
    render(<Header />);
    expect(screen.getByText(new RegExp(PHARMACY_DATA.address.street, 'i'))).toBeInTheDocument();
  });
});
