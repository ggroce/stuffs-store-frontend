import { CartActionTypes } from "./cart.types.js";

export const toggleShowCart = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addToCart = (item) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (removeItem, quantity) => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: { removeItem: removeItem, quantityToRemove: quantity },
});
