import { useMutation, useQueryClient } from '@tanstack/react-query';

// Services
import { deleteCart, updateCart } from '@/libs';

// Constants
import { QUERY } from '@/constants';

// Interfaces
import { ICart } from '@/interfaces';

interface UseCartActionsProps {
  cartData: ICart[];
}

export const useCartActions = ({ cartData }: UseCartActionsProps) => {
  const queryClient = useQueryClient();

  const removeFromCart = useMutation({
    mutationFn: (id: string) => deleteCart(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.CART] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });

  const clearUserCart = useMutation({
    mutationFn: async () => {
      await Promise.all(cartData.map((item) => deleteCart(item.id)));
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.CART] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });

  const saveNote = useMutation({
    mutationFn: ({ id, note }: { id: string; note: string }) =>
      updateCart(id, { note }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.CART] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });

  const updateQuantity = useMutation({
    mutationFn: ({ id, newQuantity }: { id: string; newQuantity: number }) =>
      updateCart(id, { quantity: newQuantity }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.CART] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });

  return {
    removeFromCart,
    clearUserCart,
    saveNote,
    updateQuantity
  };
};