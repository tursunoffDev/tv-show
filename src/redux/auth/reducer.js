import initialState from "./state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: action.payload,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.payload,
      };
    case "SIGNOUT_SUCCESS":
      return state;
    case "USER_CHECK":
      return {
        ...state,
        authError: null,
        user: action.payload,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default reducer;
