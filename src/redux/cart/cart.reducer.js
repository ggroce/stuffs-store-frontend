import CartActionTypes from "./cart.types.js";
import { addItemToCart, removeCartItem } from "./cart.utils.js";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_SUCCESS:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default cartReducer;
