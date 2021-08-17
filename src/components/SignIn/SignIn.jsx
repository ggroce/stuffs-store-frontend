import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./SignIn.styles.js";

import {
  googleSignInStart,
  emailSignInStart,
} from "redux/user/user.actions.js";

import FormInput from "components/FormInput/FormInput";
import CustomButton from "components/CustomButton/CustomButton";

const SignIn = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginCredentials;
    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  return (
    <S.SignInContainer>
      <h2>Have account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          value={loginCredentials.email}
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          value={loginCredentials.password}
          handleChange={handleChange}
        />
        <S.ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </S.ButtonsContainer>
      </form>
    </S.SignInContainer>
  );
};

export default SignIn;
