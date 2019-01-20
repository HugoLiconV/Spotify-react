import PlaylistService from '../services/http/playlist';
import { GET_PLAYLIST, GET_PLAYLIST_TRACKS } from './actionTypes';
import { dispatchError } from './notificationActions';
import { errorHandler } from '../services/ErrorService';

const playlistService = new PlaylistService();

export const getPlaylist = id => async dispatch => {
  const wrapper = errorHandler(
    playlistService.getPlaylist,
    dispatchError(dispatch)
  );
  const playlist = await wrapper(id);
  playlist && dispatch({ type: GET_PLAYLIST, payload: playlist });
};

export const getPlaylistsTracks = id => async dispatch => {
  const wrapper = errorHandler(
    playlistService.getPlaylistsTracks,
    dispatchError(dispatch)
  );
  const tracks = await wrapper(id);
  tracks && dispatch({ type: GET_PLAYLIST_TRACKS, payload: tracks });
};
