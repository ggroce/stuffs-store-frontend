import React from "react";
import * as S from "./CustomButton.styles.js";

const CustomButton = ({ children, ...props }) => (
  <S.CustomButtonContainer {...props}>{children}</S.CustomButtonContainer>
);

export default CustomButton;
