import { create } from 'zustand';
import { ICart, IProduct } from '@/interfaces';

interface State {
  cart: ICart[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (item: ICart, product: IProduct) => void;
  updateQuantity: (id: string, newQuantity: number, products: IProduct[]) => void;
  clearCart: () => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create<State & Actions>((set) => ({
  ...INITIAL_STATE,

  addToCart: (item: ICart, product: IProduct) => {
    set((state) => {
      return {
        cart: [...state.cart, { ...item, quantity: item.quantity }],
        totalItems: state.totalItems + item.quantity,
        totalPrice: state.totalPrice + product.price * item.quantity,
      };
    });
  },

  updateQuantity: (id: string, newQuantity: number, products: IProduct[]) => {
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === id
      );

      if (!existingItem) return state;

      const product = products.find(
        (product) => product.id === existingItem.productId
      );

      if (!product) return state;

      const updateQuantity = newQuantity - existingItem.quantity;
      const updatePrice = updateQuantity * product.price;

      return {
        cart: state.cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        ),
        totalItems: state.totalItems + updateQuantity,
        totalPrice: state.totalPrice + updatePrice,
      };
    });
  },

  clearCart: () => {
    set(INITIAL_STATE);
  },
}));
