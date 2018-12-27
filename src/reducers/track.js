import { GET_TRACKS, GET_TRACK } from '../actions/actionTypes';

const initialState = {
  tracks: [],
  track: {}
};

const track = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state,
        tracks: action.payload
      };
    case GET_TRACK:
      return {
        ...state,
        track: action.payload
      };
    default:
      return state;
  }
};

export default track;
