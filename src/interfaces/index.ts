import { ISearchParams } from "@/types";

export interface IProduct {
  id: string;
  name: string;
  price: number
  description?: string
  category?: string
  colors: string[]
  sizes: string[]
  image: string
  imageDetail?: string[]
  rating?: string
  sell?: string
  stoct?: number
}

export interface ICategories {
  id: string;
  title: string;
  image: string;
}

export interface IComments {
  id: string
  comment: string
  name: string
  avatar: string
  role: string
}

export interface IWishlist {
  id: string;
  userId: string;
  productId: string;
  color: string;
}

export interface ICart extends IWishlist {
  quantity: number;
  note?: string;
}

export interface ISearchProps {
  searchParams?: ISearchParams;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm: string;
  avatar: string;
  gender: string;
  address: string;
  phone: string;
  street: string;
  created_at: string;
  updated_at: string;
}