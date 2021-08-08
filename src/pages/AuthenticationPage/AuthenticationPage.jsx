import React from "react";
import * as S from "./AuthenticationPage.styles.js";

import SignIn from "components/SignIn/SignIn.jsx";
import SignUp from "components/SignUp/SignUp.jsx";

const AuthenticationPage = () => (
  <S.AuthenticationPageContainer>
    <SignIn />
    <SignUp />
  </S.AuthenticationPageContainer>
);

export default AuthenticationPage;
