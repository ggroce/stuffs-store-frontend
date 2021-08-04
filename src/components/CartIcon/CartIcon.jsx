import React from 'react'
import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleShowCart } from '../../redux/cart/cart.actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js'

const CartIcon = () => {
  const dispatch = useDispatch()

  const itemCount = useSelector(selectCartItemsCount)

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleShowCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartIcon
