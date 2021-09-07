import React from "react";
import * as S from "./CollectionItem.styles.js";

import { useDispatch } from "react-redux";
import { addToCart } from "redux/cart/cart.actions.js";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <S.CollectionItemContainer>
      <S.CollectionItemImageContainer>
        <img src={imageUrl} alt={name} />
      </S.CollectionItemImageContainer>

      <S.CollectionFooterContainer>
        <S.ItemNameSpan>{name}</S.ItemNameSpan>
        <S.ItemPriceSpan>{price}</S.ItemPriceSpan>
      </S.CollectionFooterContainer>
      <S.CollectionItemAddButton
        isInverted
        onClick={() => handleAddToCart(item)}
      >
        ADD TO CART
      </S.CollectionItemAddButton>
    </S.CollectionItemContainer>
  );
};

export default CollectionItem;
