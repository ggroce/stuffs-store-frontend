import ShopActionTypes from "./shop.types.js";

export const loadCollections = (collectionsMap) => ({
  type: ShopActionTypes.LOAD_COLLECTIONS,
  payload: collectionsMap,
});
