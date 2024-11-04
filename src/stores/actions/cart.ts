import { ICart, IProduct } from '@/interfaces';

// Function to add product to cart
export const addToCart = (state: any, item: ICart, product: IProduct) => {
  return {
    cart: [...state.cart, { ...item, quantity: item.quantity }],
    totalItems: state.totalItems + item.quantity,
    totalPrice: state.totalPrice + product.price * item.quantity,
  };
};

// Function to update the number of products in the shopping cart
export const updateQuantity = (
  state: any,
  id: string,
  newQuantity: number,
  products: IProduct[]
) => {
  const existingItem = state.cart.find((cartItem: ICart) => cartItem.id === id);

  if (!existingItem) return state;

  const product = products.find(
    (product: IProduct) => product.id === existingItem.productId
  );

  if (!product) return state;

  const updateQuantity = newQuantity - existingItem.quantity;
  const updatePrice = updateQuantity * product.price;

  return {
    cart: state.cart.map((cartItem: ICart) =>
      cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem
    ),
    totalItems: state.totalItems + updateQuantity,
    totalPrice: state.totalPrice + updatePrice,
  };
};

// Function to delete shopping cart
export const clearCart = () => {
  return {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
  };
};
