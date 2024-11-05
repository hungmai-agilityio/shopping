import { END_POINT } from "@/constants";
import { IWishlist } from "@/interfaces";
import { deleteData, postData } from "@/libs/services/api";

export const addWishList = async (data: IWishlist) => {
  return await postData({
    endpoint: END_POINT.WISHLIST,
    data: data
  });
};

export const deleteWishList = async (id: string) => {
  return await deleteData({
    endpoint: END_POINT.WISHLIST,
    id
  })
}