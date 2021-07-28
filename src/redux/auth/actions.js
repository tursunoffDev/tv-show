import { UseHistory } from "@/helpers/routes";

export const signIn = ({ email, password }) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const history = UseHistory();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
        history.push("/");
      })
      .catch(({ message }) => {
        dispatch({ type: "LOGIN_ERROR", payload: message });
      });
  };
};

export const signUp = ({ email, password, firstname, lastname }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const history = UseHistory();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            uid: res.user.uid,
            firstname,
            lastname,
            email,
            password,
            initials: firstname[0] + lastname[0],
          });
      })
      .then((res) => {
        dispatch({ type: "SIGNUP_SUCCESS" });
        console.log('sign up', res)
        // localStorage.setItem("user", res);
        history.push("/");
      })
      .catch(({ message }) => {
        dispatch({ type: "SIGNUP_ERROR", payload: message });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const setError = (message) => {
  return (dispatch) => {
    dispatch({ type: "SIGNUP_ERROR", payload: message });
  };
};

export const clearError = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_ERROR" });
  };
};
