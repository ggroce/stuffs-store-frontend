import React from "react";
import * as S from "./CartItem.styles.js";

const CartItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <S.CartItemContainer>
      <S.CartItemImg src={imageUrl} alt="item" />
      <S.ItemDetailsContainer>
        <S.NameSpan>{name}</S.NameSpan>
        <span>
          {quantity} x ${price}
        </span>
      </S.ItemDetailsContainer>
    </S.CartItemContainer>
  );
};

export default CartItem;
