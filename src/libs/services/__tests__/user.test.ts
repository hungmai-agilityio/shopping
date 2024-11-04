import { END_POINT } from '@/constants';
import { getUserId, getUserCart, getUserWishList, getUserEmail } from '@/libs';

(global.fetch as jest.Mock) = jest.fn();

describe('API Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch user by ID', async () => {
    const mockUserData = { id: '34639f802f-43fh56021flu-3314656j', name: 'Test User' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUserData
    });

    const result = await getUserId('34639f802f-43fh56021flu-3314656j');

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.USERS}/34639f802f-43fh56021flu-3314656j`
    );
    expect(result).toEqual(mockUserData);
  });

  it('should fetch user cart by ID', async () => {
    const mockCartData = {
      userId: '34639f802f-43fh56021flu-3314656j',
      items: [{ id: 'item1', quantity: 2 }]
    };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCartData
    });

    const result = await getUserCart('34639f802f-43fh56021flu-3314656j');

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.CART}?userId=34639f802f-43fh56021flu-3314656j`
    );
    expect(result).toEqual(mockCartData);
  });

  it('should fetch user wishlist by ID', async () => {
    const mockWishListData = {
      userId: '34639f802f-43fh56021flu-3314656j',
      items: [{ id: 'item2', addedDate: '2023-01-01' }]
    };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockWishListData
    });

    const result = await getUserWishList('34639f802f-43fh56021flu-3314656j');

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.WISHLIST}?userId=34639f802f-43fh56021flu-3314656j`
    );
    expect(result).toEqual(mockWishListData);
  });

  it('should fetch user by email', async () => {
    const mockUserEmailData = [{ id: '34639f802f-43fh56021flu-3314656j', email: 'test@example.com' }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUserEmailData
    });

    const result = await getUserEmail('test@example.com');

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.USERS}?email=test@example.com`
    );
    expect(result).toEqual(
      { data: [{ email: 'test@example.com', id: '34639f802f-43fh56021flu-3314656j' }], error: null }
    );
  });
});
