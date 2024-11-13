import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

// Sections
import ProductDetail from '@/ui/sections/ProductDetail';

// Mock
import { mockCart, mockProduct } from '@/mocks';

// Stores
import { useCartStore } from '@/stores';

// Hooks
import { useAddDataToCart, useModal } from '@/hooks';

jest.mock('next/navigation');

jest.mock('@tanstack/react-query');

jest.mock('uuid', () => ({
  v4: jest.fn()
}));

jest.mock('@/stores', () => ({
  useCartStore: jest.fn(),
  useUserStore: jest.fn(() => ({
    user: null
  }))
}));

jest.mock('@/hooks', () => ({
  useAddDataToCart: jest.fn(),
  useModal: jest.fn()
}));

describe('ProductDetail Component', () => {
  const mockPush = jest.fn();
  const mockAddToCart = jest.fn();
  const mockMutate = jest.fn();
  const mockOpenModal = jest.fn();
  const mockCloseModal = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useQuery as jest.Mock).mockReturnValue({ data: mockCart });
    (useAddDataToCart as jest.Mock).mockReturnValue({ mutate: mockMutate });
    (useModal as jest.Mock).mockReturnValue({
      isOpen: false,
      openModal: mockOpenModal,
      closeModal: mockCloseModal
    });
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders product name, description, and price', () => {
    render(<ProductDetail product={mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`$ ${mockProduct.price} USD`)).toBeInTheDocument();
  });

  test('opens modal if user is not logged in when trying to add to cart', () => {
    render(<ProductDetail product={mockProduct} />);

    const addToCartButton = screen.getByAltText('cart-button');
    fireEvent.click(addToCartButton);

    expect(mockOpenModal).toHaveBeenCalled();
  });

  test('updates quantity when Quantity component changes', () => {
    render(<ProductDetail product={mockProduct} />);

    const quantityButton = screen.getByAltText('plus icon');
    fireEvent.click(quantityButton);

    const quantityInput = screen.getByText('2');
    expect(quantityInput).toBeInTheDocument();
  });

  test('changes color when selecting a color', () => {
    render(<ProductDetail product={mockProduct} />);

    const colorOption = document.querySelector('button[id="Blue"]');
    fireEvent.click(colorOption!);

    expect(colorOption).toHaveClass(
      'h-4 w-4 rounded-full focus:border focus:border-green-800 ring-2 ring-green-800'
    );
  });
});
