import React from "react";
import * as S from "./SignUp.styles.js";

import { useDispatch } from "react-redux";
import { emailSignUpStart } from "redux/user/user.actions.js";

import FormInput from "components/FormInput/FormInput";
import CustomButton from "components/CustomButton/CustomButton";

const SignUp = () => {
  const dispatch = useDispatch();
  const [accountInfo, setaccountInfo] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (accountInfo.password !== accountInfo.confirmPassword) {
      return alert("Passwords do not match");
    }

    const { email, password, displayName } = accountInfo;
    dispatch(emailSignUpStart({ email, password, displayName }));

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     accountInfo.email,
    //     accountInfo.password
    //   );

    //   await createUserProfileDocument(user, {
    //     displayName: accountInfo.displayName,
    //   });
    //   setaccountInfo({
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //     displayName: "",
    //   });
    // } catch (error) {
    //   return alert(error);
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setaccountInfo({ ...accountInfo, [name]: value });
  };

  return (
    <S.SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with your email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          required
          value={accountInfo.displayName}
          handleChange={handleChange}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          value={accountInfo.email}
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          value={accountInfo.password}
          handleChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
          value={accountInfo.confirmPassword}
          handleChange={handleChange}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </S.SignUpContainer>
  );
};

export default SignUp;
