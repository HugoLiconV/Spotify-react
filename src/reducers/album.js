import { GET_ALBUM, GET_ALBUM_TRACKS } from '../actions/actionTypes';

const initialState = {
  album: {},
  albumsTracks: []
};

const album = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        album: action.payload
      };
    case GET_ALBUM_TRACKS:
      return {
        ...state,
        albumsTracks: action.payload
      };
    default:
      return state;
  }
};

export default album;
