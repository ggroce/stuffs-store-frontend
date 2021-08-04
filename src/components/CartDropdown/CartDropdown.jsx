import React from 'react'
import './CartDropdown.styles.scss'
import CustomButton from '../CustomButton/CustomButton.jsx'
import CartItem from '../CartItem/CartItem.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart.selectors.js'
import { toggleShowCart } from '../../redux/cart/cart.actions.js'

const CartDropdown = () => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCartItems)
  const history = useHistory()

  const handleGoToCheckout = () => {
    dispatch(toggleShowCart())
    history.push('/checkout')
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length ? (
          cart.map((item) => {
            return <CartItem key={item.id} item={item} />
          })
        ) : (
          <span className="empty-message">No items in cart</span>
        )}
      </div>
      <CustomButton onClick={handleGoToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default withRouter(CartDropdown)
