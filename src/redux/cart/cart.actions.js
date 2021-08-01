import { CartActionTypes } from './cart.types'

export const toggleShowCart = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
})
