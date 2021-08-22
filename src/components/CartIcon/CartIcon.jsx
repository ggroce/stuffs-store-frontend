import React from "react";
import * as S from "./CartIcon.styles.js";

import { useDispatch, useSelector } from "react-redux";
import { toggleShowCartStart } from "redux/cart/cart.actions.js";
import {
  selectCartItemsCount,
  selectShowCart,
} from "redux/cart/cart.selectors.js";

const CartIcon = () => {
  const dispatch = useDispatch();
  const showCart = useSelector(selectShowCart);

  const itemCount = useSelector(selectCartItemsCount);

  const toggleCart = () => {
    if (showCart) dispatch(toggleShowCartStart());
  };

  return (
    <S.CartIcon onClick={toggleCart}>
      <S.ShoppingIconStyled className="shopping-icon" />
      <S.ItemCountSpan>{itemCount}</S.ItemCountSpan>
    </S.CartIcon>
  );
};

export default CartIcon;
