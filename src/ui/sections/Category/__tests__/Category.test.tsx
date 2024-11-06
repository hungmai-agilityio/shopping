import { render, screen } from '@testing-library/react';

// Mock data
import { mockCategories } from '@/mocks';

// Sections
import CategorySection from '@/ui/sections/Category';

describe('Category section', () => {
  test('Should render category section', () => {
    render(<CategorySection categories={mockCategories} />);

    expect(screen.getByText('choose your category')).toBeInTheDocument();
  });
});
