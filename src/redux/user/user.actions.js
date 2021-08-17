import UserActionTypes from "./user.types.js";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (credentials) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: credentials,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInError = (error) => ({
  type: UserActionTypes.SIGN_IN_ERROR,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});
