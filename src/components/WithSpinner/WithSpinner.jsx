import React from "react";
import * as S from "./WithSpinner.styles.js";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoaded, ...otherProps }) => {
    return isLoaded ? (
      <WrappedComponent {...otherProps} />
    ) : (
      <S.SpinnerOverlay>
        <S.SpinnerContainer />
      </S.SpinnerOverlay>
    );
  };

export default WithSpinner;
