import { act, renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Hooks
import {
  useAddDataToCart,
  useClearUserCart,
  useRemoveFromCart,
  useSaveNote,
  useUpdateQuantity
} from '@/hooks';

// Constants
import { QUERY } from '@/constants';

// Mocks
import { mockCart } from '@/mocks';

(global.fetch as jest.Mock) = jest.fn();

describe('useCartActions Hook', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  test('Should call add data when useAddDataToCart is triggered', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useAddDataToCart(), {
      wrapper
    });

    await act(async () => {
      await result.current.mutate(mockCart[0]);
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(QUERY.CART),
      expect.objectContaining({ method: 'POST' })
    );
  });

  test('should call deleteCart when removeFromCart is triggered', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useRemoveFromCart(), {
      wrapper
    });

    await act(async () => {
      await result.current.mutate('5370g6022-55k087152-6438fh211');
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('5370g6022-55k087152-6438fh211'),
      expect.objectContaining({ method: 'DELETE' })
    );
    expect(queryClient.getQueryData([QUERY.CART])).toBeUndefined();
  });

  test('should call deleteCart for each item when clearUserCart is triggered', async () => {
    const cartData = [
      {
        id: '5391fk5-694225942-566783j',
        quantity: 1,
        userId: '1949kf-5894871d-6563l0s61a',
        productId: '59212e592-4f60i18-f2kc3411',
        color: 'Red'
      },
      {
        id: '5391fk5-694225942-14jve2580',
        quantity: 2,
        userId: '1949kf-5894871d-6563l0s61a',
        productId: '1949kf-5894871d-493u4hjg34',
        color: 'Blue'
      }
    ];
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useClearUserCart({ cartData }), {
      wrapper
    });

    await act(async () => {
      await result.current.mutate();
    });

    expect(fetch).toHaveBeenCalledTimes(cartData.length);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('5391fk5-694225942-566783j'),
      expect.objectContaining({ method: 'DELETE' })
    );
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('5391fk5-694225942-14jve2580'),
      expect.objectContaining({ method: 'DELETE' })
    );
    expect(queryClient.getQueryData([QUERY.CART])).toBeUndefined();
  });

  test('should call updateCart with correct data when saveNote is triggered', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useSaveNote(), {
      wrapper
    });

    await act(async () => {
      await result.current.mutate({
        id: '5370g6022-55k087152-6438fh211',
        note: 'Sample Note'
      });
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('5370g6022-55k087152-6438fh211'),
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ note: 'Sample Note' })
      })
    );
    expect(queryClient.getQueryData([QUERY.CART])).toBeUndefined();
  });

  test('should call updateCart with correct data when updateQuantity is triggered', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useUpdateQuantity(), {
      wrapper
    });

    await act(async () => {
      await result.current.mutate({
        id: '5370g6022-55k087152-6438fh211',
        newQuantity: 2
      });
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('5370g6022-55k087152-6438fh211'),
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ quantity: 2 })
      })
    );
    expect(queryClient.getQueryData([QUERY.CART])).toBeUndefined();
  });
});
