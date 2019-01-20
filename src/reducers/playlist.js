import { GET_PLAYLIST, GET_PLAYLIST_TRACKS } from '../actions/actionTypes';

const initialState = {
  playlist: {},
  playlistsTracks: {}
};

const album = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYLIST:
      return {
        ...state,
        playlist: action.payload
      };
    case GET_PLAYLIST_TRACKS:
      return {
        ...state,
        playlistsTracks: action.payload
      };
    default:
      return state;
  }
};

export default album;
