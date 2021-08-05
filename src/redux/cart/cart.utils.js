export const addItemToCart = (cartItems, newCartItem) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === newCartItem.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...newCartItem, quantity: 1 }];
};

export const removeCartItem = (cartItems, { removeItem, quantityToRemove }) => {
  return cartItems.filter((cartItem) => {
    if (cartItem.id === removeItem.id) {
      if (cartItem.quantity === quantityToRemove) {
        return false;
      }
      cartItem.quantity = cartItem.quantity - quantityToRemove;
    }
    return cartItem;
  });
};
