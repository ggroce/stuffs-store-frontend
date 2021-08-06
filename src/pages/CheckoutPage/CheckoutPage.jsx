import React, { useEffect } from "react";
import "./CheckoutPage.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors.js";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.jsx";
import StripeCheckoutButton from "../../components/StripeCheckoutButton/StripeCheckoutButton.jsx";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <div className="total">
        <span>${cartTotal}</span>
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

export default CheckoutPage;
