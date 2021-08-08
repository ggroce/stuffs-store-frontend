import React from "react";
import * as S from "./CheckoutItem.styles.js";

import { useDispatch } from "react-redux";
import { removeFromCart } from "redux/cart/cart.actions.js";
import { addToCart } from "redux/cart/cart.actions.js";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItem = (cartItem, quantity) => {
    dispatch(removeFromCart(cartItem, quantity));
  };

  const addItem = () => {
    dispatch(addToCart(cartItem));
  };

  return (
    <S.CheckoutItemContainer>
      <S.CheckoutImageContainer>
        <img alt="item in cart" src={cartItem.imageUrl} />
      </S.CheckoutImageContainer>
      <S.ItemNameSpan>{cartItem.name}</S.ItemNameSpan>

      <S.ItemQuantitySpan>
        <S.QuantityArrowContainer onClick={() => removeItem(cartItem, 1)}>
          &#10094;
        </S.QuantityArrowContainer>
        <S.QuantityValueContainer>{cartItem.quantity}</S.QuantityValueContainer>
        <S.QuantityArrowContainer onClick={addItem}>
          &#10095;
        </S.QuantityArrowContainer>
      </S.ItemQuantitySpan>

      <S.ItemPriceSpan>{cartItem.price}</S.ItemPriceSpan>
      <S.RemoveItemButtonContainer
        onClick={() => removeItem(cartItem, cartItem.quantity)}
      >
        &#10005;
      </S.RemoveItemButtonContainer>
    </S.CheckoutItemContainer>
  );
};

export default CheckoutItem;
