import {
  GET_CATEGORY,
  GET_CATEGORYS_PLAYLISTS,
  GET_CATEGORIES,
  GET_FEATUREDPLAYLISTS,
  GET_NEW_RELEASES
} from '../actions/actionTypes';

const initialState = {
  category: {},
  categorysPlaylists: [],
  categories: [],
  featuredPlaylists: {},
  newReleases: {}
};

const browse = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case GET_CATEGORYS_PLAYLISTS:
      return {
        ...state,
        categorysPlaylists: action.payload
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case GET_FEATUREDPLAYLISTS:
      return {
        ...state,
        featuredPlaylists: action.payload
      };
    case GET_NEW_RELEASES:
      return {
        ...state,
        newReleases: action.payload
      };
    default:
      return state;
  }
};

export default browse;
