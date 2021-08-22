import { takeLatest, put, call, all, delay } from "@redux-saga/core/effects";

import CartActionTypes from "./cart.types";
import { toggleShowCartSuccess } from "./cart.actions";

import UserActionTypes from "redux/user/user.types.js";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* handleToggleShowCartDebounce() {
  yield delay(100);
  yield put(toggleShowCartSuccess());
}

export function* watchSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* watchToggleCartStart() {
  yield takeLatest(
    CartActionTypes.TOGGLE_CART_START,
    handleToggleShowCartDebounce
  );
}

export function* cartSagas() {
  yield all([call(watchSignOutSuccess), call(watchToggleCartStart)]);
}
