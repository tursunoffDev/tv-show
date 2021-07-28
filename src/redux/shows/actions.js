import api from "@/api";
import { take, shuffle } from "lodash";

import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SELECTED_SHOW,
  SET_SHOWS,
  SET_SHOW_CASTS,
  CLEAR_SEARCH_SHOWS,
  SET_ERROR,
  SET_PERSON,
  SET_PERSON_CREDITS,
  SET_SHOW_DEVELOPERS,
  SET_SHOW_EPISODES,
  SET_RELATED_EPISODE,
} from "./types";

export const clearSearchShows = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_SEARCH_SHOWS });
  };
};

export const searchShows = (searchTerm) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });

    const endpoint = searchTerm && `/search/shows?q=${searchTerm}`;
    await api
      .get(endpoint)
      .then((res) => {
        dispatch({ type: SEARCH_SHOWS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
      });

    dispatch({ type: SET_LOADING, payload: false });
  };
};

export const fetchCustomShows = () => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    const endpoint = `/shows`;
    await api
      .get(endpoint)
      .then((res) => {
        const shows = take(shuffle(res.data), 20);
        dispatch({ type: SET_SHOWS, payload: shows });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
      });

    dispatch({ type: SET_LOADING, payload: false });
  };
};

export const fetchSelectedShow = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    const endpoint = `/shows/${id}`;

    await api
      .get(endpoint)
      .then(({ data }) => {
        dispatch({ type: SET_SELECTED_SHOW, payload: data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
      });

    dispatch({ type: SET_LOADING, payload: false });
  };
};

export const fetchShowCasts = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });

    const endpoint = `/shows/${id}/cast`;
    await api
      .get(endpoint)
      .then(({ data }) => {
        dispatch({ type: SET_SHOW_CASTS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
      });

    dispatch({ type: SET_LOADING, payload: false });
  };
};

export const fetchSelectedPerson = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });

    const endpoint = `/people/${id}?embed=castcredits`;
    await api
      .get(endpoint)
      .then(({ data }) => {
        dispatch({ type: SET_PERSON, payload: data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
      });

    dispatch({ type: SET_LOADING, payload: false });
  };
};

export const fetchPersonCrewCredits = (id) => {
  return async (dispatch) => {
    const endpoint = `/people/${id}/castcredits?embed=show`;
    await api
      .get(endpoint)
      .then(({ data }) => {
        dispatch({ type: SET_PERSON_CREDITS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
        console.error("fetchCustomShows", err);
      });
  };
};

export const fetchShowDevelopers = (id) => {
  return async (dispatch) => {
    const endpoint = `/shows/${id}/crew`;
    await api
      .get(endpoint)
      .then(({ data }) => {
        dispatch({ type: SET_SHOW_DEVELOPERS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err.message });
      });
  };
};

export const fetchEpisodes = (id) => {
  return async (dispatch) => {
    const endpoint = `/shows/${id}/episodes`;
    await api
      .get(endpoint)
      .then(({ data }) => {
        dispatch({ type: SET_SHOW_EPISODES, payload: data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err.message });
      });
  };
};

export const fetchRelatedEpisode = (id) => {
  return async (dispatch) => {
    const endpoint = `/episodes/${id}`;
    await api
      .get(endpoint)
      .then(({ data }) => {
        dispatch({ type: SET_RELATED_EPISODE, payload: data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err.message });
      });
  };
};

export const removeShowsError = () => {
  return (dispatch) => {
    dispatch({ type: SET_ERROR, payload: null });
  };
};
