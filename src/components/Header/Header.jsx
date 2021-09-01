import React from "react";
import * as S from "./Header.styles.js";

import { ReactComponent as Logo } from "assets/coffeecup.svg";

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/user.selectors.js";
import { selectShowCart } from "redux/cart/cart.selectors.js";

import { signOutStart } from "redux/user/user.actions.js";

import CartIcon from "components/CartIcon/CartIcon.jsx";
import CartDropdownWrapper from "components/CartDropdownWrapper/CartDropdownWrapper.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const showCart = useSelector(selectShowCart);

  const logoutUser = () => {
    dispatch(signOutStart());
  };

  return (
    <S.HeaderContainer>
      <S.LogoContainer to="/">
        <Logo />
      </S.LogoContainer>

      <S.OptionsContainer>
        <S.OptionLink to="/shop">SHOP</S.OptionLink>
        <S.OptionLink to="/contact">CONTACT</S.OptionLink>

        {currentUser ? (
          <>
            <S.OptionDiv onClick={logoutUser}>LOGOUT</S.OptionDiv>
            <S.LoggedInAsContainer>
              LOGGED IN AS: {currentUser.displayName.substring(0, 14)}
              {currentUser.displayName.length > 15 && "..."}
            </S.LoggedInAsContainer>
          </>
        ) : (
          <S.OptionLink to="/auth">LOGIN</S.OptionLink>
        )}

        <CartIcon />
      </S.OptionsContainer>
      {!showCart ? <CartDropdownWrapper /> : null}
    </S.HeaderContainer>
  );
};

export default Header;
