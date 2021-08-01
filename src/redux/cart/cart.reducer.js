import { CartActionTypes } from './cart.types.js'
import { refreshCart } from './cart.utils.js'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  numberOfCartItems: 0,
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: refreshCart(state.cartItems, action.payload),
        numberOfCartItems: state.numberOfCartItems + 1,
      }
    default:
      return state
  }
}

export default cartReducer
