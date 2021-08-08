import React from "react";
import * as S from "./CheckoutPage.styles.js";

import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "redux/cart/cart.selectors.js";

import CheckoutItem from "components/CheckoutItem/CheckoutItem.jsx";
import StripeCheckoutButton from "components/StripeCheckoutButton/StripeCheckoutButton.jsx";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <S.CheckoutPageContainer>
      <S.CheckoutHeaderContainer>
        <S.HeaderBlockContainer>
          <span>Product</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Description</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Quantity</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Price</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Remove</span>
        </S.HeaderBlockContainer>
      </S.CheckoutHeaderContainer>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <S.TotalContainer>
        <span>${cartTotal}</span>
      </S.TotalContainer>
      <StripeCheckoutButton price={cartTotal} />
    </S.CheckoutPageContainer>
  );
};

export default CheckoutPage;
