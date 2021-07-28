import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../rootReducer";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

export default store;
