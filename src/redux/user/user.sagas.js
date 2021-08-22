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

export function* handleSignInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    console.log(error);
    yield put(signInError(error));
  }
}

export function* handleSignInWithEmail({ payload: { email, password } }) {
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

export function* handleCheckUserSession() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInError(error));
  }
}

export function* handleSignOutStart() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutError(error));
  }
}

export function* handleEmailSignUpStart({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(emailSignUpSuccess({ user, displayName }));
  } catch (error) {
    yield put(emailSignUpError(error));
  }
}

export function* handleEmailLoginAfterSignUp({
  payload: { user, displayName },
}) {
  try {
    yield getSnapshotFromUserAuth(user, displayName);
  } catch (error) {
    yield put(signInError(error));
  }
}

export function* watchGoogleSignInStart() {
  yield takeLatest(
    UserActionTypes.GOOGLE_SIGN_IN_START,
    handleSignInWithGoogle
  );
}

export function* watchEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, handleSignInWithEmail);
}

export function* watchCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, handleCheckUserSession);
}

export function* watchSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, handleSignOutStart);
}

export function* watchEmailSignUpStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_START, handleEmailSignUpStart);
}

export function* watchEmailSignUpSuccess() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_UP_SUCCESS,
    handleEmailLoginAfterSignUp
  );
}

export function* userSagas() {
  yield all([
    call(watchGoogleSignInStart),
    call(watchEmailSignInStart),
    call(watchCheckUserSession),
    call(watchSignOutStart),
    call(watchEmailSignUpStart),
    call(watchEmailSignUpSuccess),
  ]);
}
