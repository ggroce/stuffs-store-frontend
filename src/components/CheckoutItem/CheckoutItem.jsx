import React from 'react'
import './CheckoutItem.styles.scss'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/cart/cart.actions.js'

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch(removeFromCart(cartItem, cartItem.quantity))
  }

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item in cart" src={cartItem.imageUrl} />
      </div>
      <span className="name">{cartItem.name}</span>

      <span className="quantity">
        <div className="arrow">&#10094;</div>
        <div className="value">{cartItem.quantity}</div>
        <div className="arrow">&#10095;</div>
      </span>

      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={removeItem}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
