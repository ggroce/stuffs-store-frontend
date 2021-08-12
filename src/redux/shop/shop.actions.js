import ShopActionTypes from "./shop.types.js";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "firebase/firebase.utils.js";

export const loadCollections = (collectionsMap) => ({
  type: ShopActionTypes.LOAD_COLLECTIONS,
  payload: collectionsMap,
});

export const requestCollectionsStart = () => ({
  type: ShopActionTypes.REQUEST_COLLECTIONS_START,
});

export const requestCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");

    dispatch(requestCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(requestCollectionsSuccess(collectionsMap));
      })
      .catch((error) => {
        dispatch(requestCollectionsFailure(error));
      });
  };
};

export const requestCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.REQUEST_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const requestCollectionsFailure = (error) => ({
  type: ShopActionTypes.REQUEST_COLLECTIONS_FAILURE,
  payload: error,
});
