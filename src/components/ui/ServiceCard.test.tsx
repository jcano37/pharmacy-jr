import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ServiceCard from './ServiceCard';
import { Activity } from 'lucide-react';

describe('ServiceCard Atom', () => {
  it('renders title, description and icon', () => {
    const props = {
      title: 'Test Service',
      description: 'Test Description',
      icon: <Activity data-testid="test-icon" />
    };
    
    render(<ServiceCard {...props} />);
    
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});
