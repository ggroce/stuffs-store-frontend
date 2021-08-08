import React from "react";

import "./CollectionItem.styles.scss";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions.js";

import CustomButton from "../CustomButton/CustomButton";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ background: `url(${imageUrl})  no-repeat` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        isInverted
        onClick={() => handleAddToCart(item)}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
