import UserActionTypes from "./user.types.js";

const INITIAL_STATE = {
  currentUser: null,
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: "",
      };
    case UserActionTypes.SIGN_IN_ERROR:
    case UserActionTypes.SIGN_OUT_ERROR:
    case UserActionTypes.EMAIL_SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default userReducer;
