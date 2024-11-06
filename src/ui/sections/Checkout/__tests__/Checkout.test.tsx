import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mocks
import { mockCart, mockProducts } from '@/mocks';

// Sections
import CheckoutSection from '@/ui/sections/Checkout';

// Mock functions
const mockOnDelete = jest.fn();
const mockOnSaveNote = jest.fn();
const mockOnCheckout = jest.fn();
const mockOnQuantityChange = jest.fn();

describe('CheckoutSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps = {
    title: 'Your Cart',
    carts: mockCart,
    products: mockProducts,
    onDelete: mockOnDelete,
    onSaveNote: mockOnSaveNote,
    onCheckout: mockOnCheckout,
    onQuantityChange: mockOnQuantityChange,
    total: 50,
    quantity: 1
  };

  test('renders title correctly', () => {
    render(<CheckoutSection {...defaultProps} />);

    const titleElement = screen.getByText('Your Cart');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('font-bold text-black text-4xl');
  });
});
