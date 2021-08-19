import { takeLatest, put, call, all } from "@redux-saga/core/effects";

import UserActionTypes from "./user.types.js";
import {
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
  emailSignUpSuccess,
  emailSignUpError,
} from "./user.actions.js";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "firebase/firebase.utils.js";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    console.log(error);
    yield put(signInError(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    console.log(error);
    yield put(signInError(error));
  }
}

export function* getSnapshotFromUserAuth(userAuth, displayName = null) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, {
      displayName,
    });
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    console.log(error);
    yield put(signInError(error));
  }
}

export function* checkUserSession() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInError(error));
  }
}

export function* signOutStart() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutError(error));
  }
}

export function* emailSignUpStart({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(emailSignUpSuccess({ user, displayName }));
  } catch (error) {
    yield put(emailSignUpError(error));
  }
}

export function* emailLoginAfterSignUp({ payload: { user, displayName } }) {
  try {
    yield getSnapshotFromUserAuth(user, displayName);
  } catch (error) {
    yield put(signInError(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutStart);
}

export function* onEmailSignUpStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_START, emailSignUpStart);
}

export function* onEmailSignUpSuccess() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_UP_SUCCESS,
    emailLoginAfterSignUp
  );
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onEmailSignUpStart),
    call(onEmailSignUpSuccess),
  ]);
}