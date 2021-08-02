import React from 'react'
import './CartDropdown.styles.scss'
import CustomButton from '../CustomButton/CustomButton.jsx'
import CartItem from '../CartItem/CartItem.jsx'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const CartDropdown = () => {
  const cart = useSelector((state) => state.cart.cartItems)
  const history = useHistory()

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
      <CustomButton onClick={() => history.push('/checkout')}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

export default withRouter(CartDropdown)
