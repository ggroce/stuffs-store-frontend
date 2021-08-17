import { all, call } from "redux-saga/effects";

import { userSagas } from "redux/user/user.sagas.js";
import { shopSagas } from "redux/shop/shop.sagas.js";
import { cartSagas } from "redux/cart/cart.sagas.js";

export default function* rootSaga() {
  yield all([call(userSagas), call(shopSagas), call(cartSagas)]);
}
