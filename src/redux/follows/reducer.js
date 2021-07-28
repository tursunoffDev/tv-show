import initialState from "./state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_FOLLOWS":
      return {
        ...state,
        follows: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "GET_FOLLOWS":
      return {
        ...state,
        follows: state.follows,
      };
    case "SET_FOLLOW":
      console.log(state.follows);
      return {
        ...state,
        error: null,
        follows: [action.payload, ...state.follows],
      };
    case "SET_FOLLOW_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "REMOVE_FOLLOW_SUCCESS":
      return {
        ...state,
        follows: state.follows.filter(
          (item) => item.followId !== action.followId
        ),
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
