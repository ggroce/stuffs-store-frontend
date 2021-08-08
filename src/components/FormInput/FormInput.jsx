import React from "react";
import * as S from "./FormInput.styles.js";

const FormInput = ({ handleChange, label, ...otherFormProps }) => {
  return (
    <S.FormInputGroupContainer>
      <S.FormInput maxLength="50" onChange={handleChange} {...otherFormProps} />
      {label ? (
        <S.FormInputLabel
          className={otherFormProps.value.length ? "shrink" : ""}
        >
          {label}
        </S.FormInputLabel>
      ) : null}
    </S.FormInputGroupContainer>
  );
};

export default FormInput;
