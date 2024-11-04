import { END_POINT } from '@/constants';
import { IUser } from '@/interfaces';
import {
  fetchData,
  fetchDataId,
  postData,
  updateData
} from '@/libs/services/api';

export const getUserId = async (id: string) => {
  return await fetchDataId({ endpoint: `${END_POINT.USERS}/`, id: id });
};

export const getUserCart = async (id: string) => {
  return await fetchDataId({ endpoint: `${END_POINT.CART}?userId=`, id: id });
};

export const getUserWishList = async (id: string) => {
  return await fetchDataId({
    endpoint: `${END_POINT.WISHLIST}?userId=`,
    id: id
  });
};

export const getUserEmail = async (email: string) => {
  return await fetchData({ endpoint: `${END_POINT.USERS}?email=${email}` });
};

export const addUser = async (data: IUser) => {
  return await postData({
    endpoint: END_POINT.USERS,
    data: data
  });
};

export const updateUser = async (id: string, data: IUser) => {
  return await updateData({
    endpoint: END_POINT.USERS,
    id: id,
    data: data
  });
};
