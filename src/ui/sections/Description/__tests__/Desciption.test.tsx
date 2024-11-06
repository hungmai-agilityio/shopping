import { render, screen, fireEvent } from '@testing-library/react';

// Sections
import Description from '@/ui/sections/Description';

describe('Description Component', () => {
  it('renders the Description tab content by default', () => {
    render(<Description />);

    expect(screen.getByText('Detail Product')).toBeInTheDocument();
    expect(screen.queryByAltText('star')).not.toBeInTheDocument();
  });

  it('switches to Review tab and displays star rating image', () => {
    render(<Description />);

    const reviewTab = screen.getByRole('button', { name: /Review/i });
    fireEvent.click(reviewTab);

    expect(screen.getByAltText('star')).toBeInTheDocument();
    expect(screen.queryByText('Detail Product')).not.toBeInTheDocument();
  });
});
