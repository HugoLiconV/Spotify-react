import PlayerService from '../services/http/player';
import {
  GET_RECENTLY_PLAYED,
  GET_PLAYER,
  GET_DEVICES,
  GET_CURRENT_PLAYING,
  NEXT_SONG,
  PREVIOUS_SONG,
  PAUSE,
  PLAY,
  SET_REPEAT,
  SEEK,
  TOGGLE_SHUFFLE,
  TRANSFER_PLAYBACK,
  SET_VOLUME
} from './actionTypes';
import { errorHandler } from '../services/ErrorService';
import { dispatchError } from './errorActions';

const playerService = new PlayerService();

export const getRecentlyPlayed = (
  limit = 20,
  before = Date.now(),
  after = null
) => async dispatch => {
  const wrapper = errorHandler(
    playerService.getRecentlyPlayed,
    dispatchError(dispatch)
  );
  const tracks = await wrapper(limit, before, after);
  tracks && dispatch({ type: GET_RECENTLY_PLAYED, payload: tracks });
};

export const getPlayer = () => async dispatch => {
  const wrapper = errorHandler(
    playerService.getPlayer,
    dispatchError(dispatch)
  );
  const currentPlayback = await wrapper();
  currentPlayback && dispatch({ type: GET_PLAYER, payload: currentPlayback });
};

export const getDevices = () => async dispatch => {
  const wrapper = errorHandler(
    playerService.getDevices,
    dispatchError(dispatch)
  );
  const devices = await wrapper();
  devices && dispatch({ type: GET_DEVICES, payload: devices.devices });
};

export const getCurrentlyPlaying = () => async dispatch => {
  const wrapper = errorHandler(
    playerService.getCurrentlyPlaying,
    dispatchError(dispatch)
  );
  const track = await wrapper();
  track && dispatch({ type: GET_CURRENT_PLAYING, payload: track });
};

export const nextSong = () => async dispatch => {
  const wrapper = errorHandler(playerService.next, dispatchError(dispatch));
  const res = await wrapper();
  res && dispatch({ type: NEXT_SONG });
  setTimeout(() => dispatch(getCurrentlyPlaying()), 400);
};

export const previousSong = () => async dispatch => {
  const wrapper = errorHandler(playerService.previous, dispatchError(dispatch));
  const res = await wrapper();
  res && dispatch({ type: PREVIOUS_SONG });
  setTimeout(() => dispatch(getCurrentlyPlaying()), 400);
};

export const pause = () => async dispatch => {
  const wrapper = errorHandler(playerService.pause, dispatchError(dispatch));
  const res = await wrapper();
  res && dispatch({ type: PAUSE });
  setTimeout(() => dispatch(getCurrentlyPlaying()), 400);
};

export const play = config => async dispatch => {
  const wrapper = errorHandler(playerService.play, dispatchError(dispatch));
  const res = await wrapper(config);
  res && dispatch({ type: PLAY });
  setTimeout(() => dispatch(getCurrentlyPlaying()), 400);
};

export const setRepeat = state => async dispatch => {
  const wrapper = errorHandler(
    playerService.setRepeat,
    dispatchError(dispatch)
  );
  const res = await wrapper(state);
  res && dispatch({ type: SET_REPEAT });
  setTimeout(() => dispatch(getPlayer()), 400);
};

export const seek = position_ms => dispatch => {
  const wrapper = errorHandler(playerService.seek, dispatchError(dispatch));
  const res = wrapper(position_ms).seek(position_ms);
  res && dispatch({ type: SEEK });
};

export const toggleShuffle = shuffle => async dispatch => {
  const wrapper = errorHandler(
    playerService.toggleShuffle,
    dispatchError(dispatch)
  );
  const res = await wrapper(shuffle);
  res && dispatch({ type: TOGGLE_SHUFFLE });
  setTimeout(() => dispatch(getPlayer()), 400);
};

export const transferPlayback = deviceIds => async dispatch => {
  const wrapper = errorHandler(
    playerService.transferPlayback,
    dispatchError(dispatch)
  );
  await wrapper(deviceIds);
  dispatch({ type: TRANSFER_PLAYBACK });
  setTimeout(() => dispatch(getDevices()), 800);
};

export const setVolume = volumePercent => async dispatch => {
  const wrapper = errorHandler(
    playerService.setVolume,
    dispatchError(dispatch)
  );
  const res = await wrapper(volumePercent);
  res && dispatch({ type: SET_VOLUME });
  dispatch(getPlayer());
};

let timer;
export const pollingPlayerState = isPolling => dispatch => {
  if (isPolling) {
    timer = setInterval(() => {
      dispatch(getPlayer());
      dispatch(getCurrentlyPlaying());
      dispatch(getDevices());
      dispatch(getRecentlyPlayed());
    }, 1500);
  } else {
    clearInterval(timer);
  }
};
