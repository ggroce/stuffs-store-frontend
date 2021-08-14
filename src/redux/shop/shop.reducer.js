import ShopActionTypes from "./shop.types.js";

const INITIAL_STATE = {
  collections: null,
  isPending: false,
  error: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.REQUEST_COLLECTIONS_START:
      return {
        ...state,
        isPending: true,
      };
    case ShopActionTypes.REQUEST_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isPending: false,
      };
    case ShopActionTypes.REQUEST_COLLECTIONS_ERROR:
      return {
        ...state,
        error: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
