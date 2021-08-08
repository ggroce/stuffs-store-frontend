import React from "react";
import * as S from "./Header.styles.js";

import { ReactComponent as Logo } from "assets/crown.svg";

import { auth } from "firebase/firebase.utils.js";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/user.selectors.js";
import { selectShowCart } from "redux/cart/cart.selectors.js";

import CartIcon from "components/CartIcon/CartIcon.jsx";
import CartDropdown from "components/CartDropdown/CartDropdown.jsx";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const showCart = useSelector(selectShowCart);

  const logoutUser = () => {
    auth.signOut();
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
      {!showCart && <CartDropdown />}
    </S.HeaderContainer>
  );
};

export default Header;
