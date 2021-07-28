import api from "@/api";

export const successMessage = (message) => {
  return (dispatch) => {
    dispatch({ type: "SET_MESSAGE", payload: message });
  };
};

export const clearMessage = () => {
  return (dispatch) => {
    dispatch({ type: "SET_MESSAGE", payload: null });
  };
};

export const setFollows = (followId) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    await api
      .get(`/shows/${followId}`)
      .then(({ data }) => {
        const firestore = getFirestore();
        firestore
          .collection("follows")
          .add({
            ...data,
          })
          .then((docRef) => {
            dispatch({
              type: "SET_FOLLOW",
              payload: { ...data, uniqId: docRef.id },
            });
            dispatch(successMessage("Follow added successfully)"));
          })
          .catch((err) => {
            dispatch({
              type: "SET_FOLLOW_ERROR",
              payload: `Error in adding follow to firestore ${err}`,
            });
          });
      })
      .catch((err) =>
        dispatch({ type: "SET_FOLLOW_ERROR", payload: err.message })
      );
  };
};

export const removeFollow = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    if (id !== undefined || id !== null) {
      firestore
        .collection("follows")
        .where("id", "==", id)
        .get()
        .then((doc) => {
          firestore.collection("follows").doc(doc.docs[0].id).delete();
          dispatch(successMessage("Follow removed successfully)"));
        });
    }
  };
};

export const setLoading = (value) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING", payload: value });
  };
};

export const removeFollowError = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_ERROR" });
  };
};
