import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { act, renderHook } from '@testing-library/react';

// Constants
import { KEY, TIME_STATUS } from '@/constants';

// Libs + stores
import { useUserStore } from '@/stores';
import { mockUser } from '@/mocks';

jest.mock('cookies-next', () => ({
  setCookie: jest.fn(),
  getCookie: jest.fn(),
  deleteCookie: jest.fn(),
}));

describe('useUserStore', () => {
  beforeEach(() => {
    (getCookie as jest.Mock).mockImplementation(() => null);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Original data without cookies', () => {
    const { result } = renderHook(() => useUserStore());
    expect(result.current.user).toBeNull();
  });

  test('Update data when call setUser', () => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.setUser(mockUser);
    });

    expect(result.current.user).toEqual(mockUser);
    expect(setCookie).toHaveBeenCalledWith(KEY.USER, JSON.stringify(mockUser), {
      maxAge: TIME_STATUS.COOKIE_TIME,
      path: '/',
    });
  });

  test('Delete data when call clearUser', () => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.setUser(mockUser);
    });
    act(() => {
      result.current.clearUser();
    });

    expect(result.current.user).toBeNull();
    expect(deleteCookie).toHaveBeenCalledWith(KEY.USER);
  });
});
