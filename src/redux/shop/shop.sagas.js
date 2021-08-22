import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "firebase/firebase.utils";

import ShopActionTypes from "./shop.types";

import {
  fetchCollectionsSuccess,
  fetchCollectionsError,
} from "./shop.actions.js";

export function* handleFetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error));
  }
}

export function* watchFetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    handleFetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(watchFetchCollectionsStart)]);
}
