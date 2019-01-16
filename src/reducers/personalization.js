import {
  GET_USERS_TOP_ARTISTS,
  GET_USERS_TOP_TRACKS
} from '../actions/actionTypes';

const initialState = {
  topArtists: {},
  topTracks: {}
};

const personalization = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_TOP_ARTISTS:
      return {
        ...state,
        topArtists: action.payload
      };
    case GET_USERS_TOP_TRACKS:
      return {
        ...state,
        topTracks: action.payload
      };
    default:
      return state;
  }
};

export default personalization;
