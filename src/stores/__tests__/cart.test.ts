import { act, renderHook } from '@testing-library/react';

// Interfaces
import { ICart } from '@/interfaces';

// Libs + stores
import { useCartStore } from '@/stores';

// Mocks
import { mockProduct } from '@/mocks';

describe('useCartStore', () => {
  const cartItem: ICart = {
    id: '4jv05-d467958243tu87-37682100544',
    userId: 'i7g6i9i2-8f89-6h15-9i0e-6j2f7j33f9646',
    productId: 'i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6',
    color: 'White',
    quantity: 1,
    note: 'Sample note'
  }

  afterEach(() => {
    act(() => {
      useCartStore.getState().clearCart();
    });
  });

  it('Add new product to cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(cartItem, mockProduct);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.totalItems).toBe(1);
    expect(result.current.totalPrice).toBe(mockProduct.price);
  });

  it('Clear cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(cartItem, mockProduct);
    });

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.cart).toHaveLength(0);
    expect(result.current.totalItems).toBe(0);
    expect(result.current.totalPrice).toBe(0);
  });
});
