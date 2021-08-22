import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";

import * as S from "./CartDropdown.styles.js";

import CartItem from "components/CartItem/CartItem.jsx";

import { selectCartItems } from "redux/cart/cart.selectors.js";
import { toggleShowCartStart } from "redux/cart/cart.actions.js";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const history = useHistory();

  const handleGoToCheckout = () => {
    dispatch(toggleShowCartStart());
    history.push("/checkout");
  };

  return (
    <S.CartDropdownContainer>
      <S.CartItemsContainer>
        {cart.length ? (
          cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <S.EmptyMessageSpan>No items in cart</S.EmptyMessageSpan>
        )}
      </S.CartItemsContainer>
      <S.CheckoutButton onClick={handleGoToCheckout}>
        GO TO CHECKOUT
      </S.CheckoutButton>
    </S.CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
