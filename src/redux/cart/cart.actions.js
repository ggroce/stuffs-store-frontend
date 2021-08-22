import CartActionTypes from "./cart.types.js";

export const toggleShowCartStart = () => ({
  type: CartActionTypes.TOGGLE_CART_START,
});

export const toggleShowCartSuccess = () => ({
  type: CartActionTypes.TOGGLE_CART_SUCCESS,
});

export const addToCart = (item) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (removeItem, quantity) => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: { removeItem: removeItem, quantityToRemove: quantity },
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
