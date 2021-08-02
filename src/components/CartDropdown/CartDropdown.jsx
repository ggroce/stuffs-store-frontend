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
        {cart.length
          ? cart.map((item) => {
              return <CartItem key={item.id} item={item} />
            })
          : 'No items in cart.'}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
