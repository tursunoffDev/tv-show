import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import showsReducer from "@/redux/shows/reducer";
import followsReducer from "@/redux/follows/reducer";
import authReducer from "@/redux/auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  shows: showsReducer,
  follows: followsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
