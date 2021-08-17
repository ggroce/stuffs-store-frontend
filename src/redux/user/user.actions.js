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

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutError = (error) => ({
  type: UserActionTypes.SIGN_OUT_ERROR,
  payload: error,
});

export const emailSignUpStart = (newAccountInfo) => ({
  type: UserActionTypes.EMAIL_SIGN_UP_START,
  payload: newAccountInfo,
});

export const emailSignUpSuccess = ({ user, displayName }) => ({
  type: UserActionTypes.EMAIL_SIGN_UP_SUCCESS,
  payload: { user, displayName },
});

export const emailSignUpError = (error) => ({
  type: UserActionTypes.EMAIL_SIGN_UP_ERROR,
  payload: error,
});
