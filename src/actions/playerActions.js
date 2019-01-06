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

const playerService = new PlayerService();

export const getRecentlyPlayed = (limit, before, after) => dispatch => {
  playerService
    .getRecentlyPlayed(limit, before, after)
    .then(tracks => {
      dispatch({ type: GET_RECENTLY_PLAYED, payload: tracks });
    })
    .catch(e => console.log(e));
};

export const getPlayer = () => dispatch => {
  playerService
    .getPlayer()
    .then(currentPlayback => {
      dispatch({ type: GET_PLAYER, payload: currentPlayback });
    })
    .catch(e => console.log(e));
};

export const getDevices = () => dispatch => {
  playerService
    .getDevices()
    .then(devices => {
      dispatch({ type: GET_DEVICES, payload: devices });
    })
    .catch(e => console.log(e));
};

export const getCurrentlyPlaying = () => async dispatch => {
  const track = await playerService.getCurrentlyPlaying();
  dispatch({ type: GET_CURRENT_PLAYING, payload: track });
};

export const nextSong = () => async dispatch => {
  await playerService.next();
  dispatch({ type: NEXT_SONG });
  setTimeout(() => dispatch(getCurrentlyPlaying()), 400);
};

export const previousSong = () => async dispatch => {
  await playerService.previous();
  dispatch({ type: PREVIOUS_SONG });
  setTimeout(() => dispatch(getCurrentlyPlaying()), 400);
};

export const pause = () => dispatch => {
  playerService
    .pause()
    .then(_ => {
      dispatch({ type: PAUSE });
      setTimeout(() => dispatch(getCurrentlyPlaying()), 400);
    })
    .catch(e => console.log(e));
};

export const play = (contextUri, offset, position) => dispatch => {
  playerService
    .play(contextUri, offset, position)
    .then(_ => {
      dispatch({ type: PLAY });
      setTimeout(() => dispatch(getCurrentlyPlaying()), 500);
    })
    .catch(e => console.log(e));
};

export const setRepeat = state => dispatch => {
  playerService.setRepeat(state).then(() => {
    dispatch({ type: SET_REPEAT });
    setTimeout(() => dispatch(getPlayer()), 300);
  });
};

export const seek = position_ms => dispatch => {
  playerService
    .seek(position_ms)
    .then(_ => {
      dispatch({ type: SEEK });
    })
    .catch(e => console.log(e));
};

export const toggleShuffle = shuffle => async dispatch => {
  playerService.toggleShuffle(shuffle);

  dispatch({ type: TOGGLE_SHUFFLE });
  setTimeout(() => dispatch(getPlayer()), 200);
};

export const transferPlayback = deviceIds => dispatch => {
  playerService
    .transferPlayback(deviceIds)
    .then(_ => {
      dispatch({ type: TRANSFER_PLAYBACK });
    })
    .catch(e => console.log(e));
};

export const setVolume = volumePercent => dispatch => {
  playerService
    .setVolume(volumePercent)
    .then(_ => {
      dispatch({ type: SET_VOLUME });
    })
    .catch(e => console.log(e));
};
