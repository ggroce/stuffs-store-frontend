export const refreshCart = (cartItems, newCartItem) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === newCartItem.id,
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  }
  return [...cartItems, { ...newCartItem, quantity: 1 }]
}
