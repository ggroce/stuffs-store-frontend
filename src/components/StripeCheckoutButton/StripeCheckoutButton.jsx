import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JLB5dJ9gDPe8p92vSirwbA1G3nLgC6XDYe5uvBGZT2f0eWE3WjeeSL58Aw4h2AHz6XU7kerDG1g4B5bTumF2hQS00aXrFgUgt";

  const onToken = (token) => {
    console.log(token);
    alert(
      "Success! Your payment was received.\n\nYou can view the token here:\n" +
        token.id
    );
  };

  return (
    <StripeCheckout
      stripeKey={publishableKey}
      amount={priceForStripe}
      name="Stuffs Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      label="Pay Now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
