import ShopActionTypes from "./shop.types.js";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsError = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_ERROR,
  payload: error,
});
