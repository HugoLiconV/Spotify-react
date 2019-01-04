import {
  GET_RECENTLY_PLAYED,
  GET_PLAYER,
  GET_DEVICES,
  GET_CURRENT_PLAYING
} from '../actions/actionTypes';

const initialState = {
  recentlyPlayed: {},
  player: {},
  devices: [],
  currentlyPlaying: {}
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECENTLY_PLAYED:
      return {
        ...state,
        recentlyPlayed: action.payload
      };
    case GET_PLAYER:
      return {
        ...state,
        player: action.payload
      };
    case GET_DEVICES:
      return {
        ...state,
        devices: action.payload
      };
    case GET_CURRENT_PLAYING:
      return {
        ...state,
        currentlyPlaying: action.payload
      };
    default:
      return state;
  }
};

export default player;
