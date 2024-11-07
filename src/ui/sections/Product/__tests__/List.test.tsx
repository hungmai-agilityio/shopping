import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { useQuery, useMutation } from '@tanstack/react-query';

//  Sections
import CardProductList from '@/ui/sections/Product/List';

// Mocks
import { mockProducts, mockUser, mockWishlist } from '@/mocks';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

jest.mock('@tanstack/react-query');

describe('CardProductList', () => {
  const mockPush = jest.fn();
  const mockAddToWishlist = jest.fn();
  const mockRemoveFromWishlist = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useQuery as jest.Mock).mockReturnValue({ data: mockWishlist });
    (useMutation as jest.Mock).mockImplementation((fn: any) => ({
      mutate:
        fn === mockAddToWishlist ? mockAddToWishlist : mockRemoveFromWishlist
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the correct number of products', () => {
    render(
      <CardProductList
        products={mockProducts}
        isShowMore={true}
        user={mockUser}
      />
    );

    const productCards = screen.getAllByRole('img');
    expect(productCards.length).toBe(productCards.length);
  });

  test('opens modal when trying to favorite without logging in', () => {
    render(
      <CardProductList products={mockProducts} isShowMore={true} user={null} />
    );

    const favoriteButton = screen.getAllByAltText('heart icon')[0];
    fireEvent.click(favoriteButton);

    expect(screen.getByText('Authentication request')).toBeInTheDocument();
  });

  test('navigates to the correct page when product is clicked', () => {
    render(
      <CardProductList
        products={mockProducts}
        isShowMore={true}
        user={mockUser}
      />
    );

    const product = screen.getByText(mockProducts[0].name);
    fireEvent.click(product);

    expect(mockPush).toHaveBeenCalledWith(`${mockProducts[0].id}`);
  });

  test('removes product from wishlist when favorite button is clicked again', () => {
    const updatedWishlist = [{ id: '1', productId: mockProducts[0].id }];

    (useQuery as jest.Mock).mockReturnValue({ data: updatedWishlist });

    render(
      <CardProductList
        products={mockProducts}
        isShowMore={true}
        user={mockUser}
      />
    );

    const favoriteButton = screen.getAllByAltText('heart icon')[0];
    fireEvent.click(favoriteButton);

    expect(mockRemoveFromWishlist).toHaveBeenCalledWith(updatedWishlist[0].id);
  });
});
