import initialState from "./state";
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

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CLEAR_SEARCH_SHOWS:
      return {
        ...state,
        searchShows: [],
      };
    case SET_PERSON_CREDITS:
      return {
        ...state,
        castCredits: action.payload,
      };
    case SEARCH_SHOWS:
      return {
        ...state,
        searchShows: action.payload,
      };
    case SET_SELECTED_SHOW:
      return {
        ...state,
        selectedShow: action.payload,
      };
    case SET_SHOW_DEVELOPERS:
      return {
        ...state,
        showDevelopers: action.payload,
      };
    case SET_SHOW_EPISODES:
      return {
        ...state,
        showEpisodes: action.payload,
      };
    case SET_RELATED_EPISODE:
      return {
        ...state,
        relatedEpisode: action.payload,
      };
    case SET_SHOW_CASTS:
      return {
        ...state,
        showCasts: action.payload,
      };
    case SET_SHOWS:
      return {
        ...state,
        customShows: action.payload,
      };
    case SET_PERSON:
      return {
        ...state,
        castPerson: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default showsReducer;
