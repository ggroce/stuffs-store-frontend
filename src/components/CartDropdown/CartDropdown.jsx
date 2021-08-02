import React from 'react'
import './CartDropdown.styles.scss'
import CustomButton from '../CustomButton/CustomButton.jsx'
import CartItem from '../CartItem/CartItem.jsx'
import { useSelector } from 'react-redux'

const CartDropdown = () => {
  const cart = useSelector((state) => state.cart.cartItems)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length === 0
          ? 'No items in cart.'
          : cart.map((item) => {
              return <CartItem key={item.id} item={item} />
            })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
