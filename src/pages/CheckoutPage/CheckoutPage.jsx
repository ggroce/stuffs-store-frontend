import React from 'react'
import './CheckoutPage.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors.js'

const CheckoutPage = () => {
  const cartContents = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
