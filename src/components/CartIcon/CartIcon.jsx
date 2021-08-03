import React, { useEffect, useState } from 'react'
import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleShowCart } from '../../redux/cart/cart.actions.js'
import { useDispatch, useSelector } from 'react-redux'

const CartIcon = () => {
  const dispatch = useDispatch()
  const [itemCount, setItemCount] = useState(0)

  const cartContents = useSelector((state) => state.cart.cartItems)

  useEffect(() => {
    setItemCount(
      cartContents.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
    )
  }, [cartContents])

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleShowCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartIcon
