import { create } from 'zustand';

// Interfaces
import { ICart, IProduct } from '@/interfaces';

// Store action
import { addToCart, clearCart, updateQuantity } from '@/stores/actions/cart';

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

  addToCart: (item, product) => {
    set((state) => addToCart(state, item, product));
  },

  updateQuantity: (id, newQuantity, products) => {
    set((state) => updateQuantity(state, id, newQuantity, products));
  },

  clearCart: () => {
    set(clearCart());
  },
}));
