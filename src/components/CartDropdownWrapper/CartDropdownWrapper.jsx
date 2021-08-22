import React from "react";
import * as S from "./CartDropdownWrapper.styles.js";

import { useDispatch } from "react-redux";
import { toggleShowCartStart } from "redux/cart/cart.actions.js";

import OutsideClickHandler from "react-outside-click-handler";

import CartDropdown from "components/CartDropdown/CartDropdown.jsx";

const CartDropdownWrapper = () => {
  const dispatch = useDispatch();

  return (
    <S.CartDropdownContainer>
      <OutsideClickHandler
        onOutsideClick={() => dispatch(toggleShowCartStart())}
      >
        <CartDropdown />
      </OutsideClickHandler>
    </S.CartDropdownContainer>
  );
};

export default CartDropdownWrapper;
