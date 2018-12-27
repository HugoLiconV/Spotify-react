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

export const getCurrentPlaying = () => dispatch => {
  playerService
    .getCurrentlyPlaying()
    .then(track => {
      dispatch({ type: GET_CURRENT_PLAYING, payload: track });
    })
    .catch(e => console.log(e));
};

export const nextSong = () => dispatch => {
  playerService
    .next()
    .then(_ => {
      dispatch({ type: NEXT_SONG });
    })
    .catch(e => console.log(e));
};

export const previousSong = () => dispatch => {
  playerService
    .previous()
    .then(_ => {
      dispatch({ type: PREVIOUS_SONG });
    })
    .catch(e => console.log(e));
};

export const pause = () => dispatch => {
  playerService
    .pause()
    .then(_ => {
      dispatch({ type: PAUSE });
    })
    .catch(e => console.log(e));
};

export const play = () => dispatch => {
  playerService
    .play()
    .then(_ => {
      dispatch({ type: PLAY });
    })
    .catch(e => console.log(e));
};

export const setRepeat = () => dispatch => {
  playerService
    .setRepeat()
    .then(_ => {
      dispatch({ type: SET_REPEAT });
    })
    .catch(e => console.log(e));
};

export const seek = position_ms => dispatch => {
  playerService
    .seek(position_ms)
    .then(_ => {
      dispatch({ type: SEEK });
    })
    .catch(e => console.log(e));
};

export const toggleShuffle = () => dispatch => {
  playerService
    .toggleShuffle()
    .then(_ => {
      dispatch({ type: TOGGLE_SHUFFLE });
    })
    .catch(e => console.log(e));
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
