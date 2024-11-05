import { QUERY } from "@/constants";
import { IWishlist } from "@/interfaces";
import { addWishList, deleteWishList } from "@/libs";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useAddToWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (item: IWishlist) => addWishList(item),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.WISHLIST] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });
};

export const useRemoveFromWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteWishList(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.WISHLIST] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });
};