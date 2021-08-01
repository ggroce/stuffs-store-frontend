import React from 'react'
import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleShowCart } from '../../redux/cart/cart.actions.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const CartIcon = () => {
  const dispatch = useDispatch()
  let itemCount = useSelector((state) => state.cart.numberOfCartItems)

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleShowCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartIcon
