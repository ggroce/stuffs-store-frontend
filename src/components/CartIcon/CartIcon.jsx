import React from "react";
import * as S from "./CartIcon.styles.js";

import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "redux/cart/cart.actions.js";
import { selectCartItemsCount } from "redux/cart/cart.selectors.js";

const CartIcon = () => {
  const dispatch = useDispatch();

  const itemCount = useSelector(selectCartItemsCount);

  return (
    <S.CartIcon onClick={() => dispatch(toggleShowCart())}>
      <S.ShoppingIconStyled className="shopping-icon" />
      <S.ItemCountSpan>{itemCount}</S.ItemCountSpan>
    </S.CartIcon>
  );
};

export default CartIcon;
