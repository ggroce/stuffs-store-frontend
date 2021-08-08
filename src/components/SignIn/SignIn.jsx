import React from "react";
import * as S from "./SignIn.styles.js";

import { auth, signInWithGoogle } from "firebase/firebase.utils.js";

import FormInput from "components/FormInput/FormInput";
import CustomButton from "components/CustomButton/CustomButton";

const SignIn = () => {
  const [loginCredentials, setLoginCredentials] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(
        loginCredentials.email,
        loginCredentials.password
      );
      setLoginCredentials({ email: "", password: "" });
    } catch (error) {
      console.log(
        "Error signing in with email and password in SignIn.jsx",
        error
      );
    }
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
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </S.ButtonsContainer>
      </form>
    </S.SignInContainer>
  );
};

export default SignIn;
