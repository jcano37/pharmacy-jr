import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';
import { PHARMACY_DATA } from '../../constants/mockData';

describe('Footer Component', () => {
  it('renders social media links correctly', () => {
    render(<Footer />);
    
    const facebookLink = screen.getByLabelText(/facebook/i);
    const instagramLink = screen.getByLabelText(/instagram/i);
    const tiktokLink = screen.getByLabelText(/tiktok/i);

    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', PHARMACY_DATA.socialMedia.facebook);
    expect(facebookLink).toHaveAttribute('target', '_blank');
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer');

    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', PHARMACY_DATA.socialMedia.instagram);

    expect(tiktokLink).toBeInTheDocument();
    expect(tiktokLink).toHaveAttribute('href', PHARMACY_DATA.socialMedia.tiktok);
  });
});
