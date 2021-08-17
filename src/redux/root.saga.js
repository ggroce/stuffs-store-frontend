import { all, call } from "redux-saga/effects";

import { userSagas } from "redux/user/user.sagas.js";
import { shopSagas } from "redux/shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(shopSagas)]);
}
