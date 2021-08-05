import React from "react";
import "./CheckoutItem.styles.scss";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cart/cart.actions.js";
import { addToCart } from "../../redux/cart/cart.actions.js";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItem = (cartItem, quantity) => {
    dispatch(removeFromCart(cartItem, quantity));
  };

  const addItem = () => {
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item in cart" src={cartItem.imageUrl} />
      </div>
      <span className="name">{cartItem.name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem, 1)}>
          &#10094;
        </div>
        <div className="value">{cartItem.quantity}</div>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>

      <span className="price">{cartItem.price}</span>
      <div
        className="remove-button"
        onClick={() => removeItem(cartItem, cartItem.quantity)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
