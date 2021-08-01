import React from 'react'
import './CartDropdown.styles.scss'
import CustomButton from '../CustomButton/CustomButton.jsx'
import { useSelector } from 'react-redux'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
