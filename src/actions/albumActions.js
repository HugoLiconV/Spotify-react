import AlbumService from '../services/http/album';
import { GET_ALBUM, GET_ALBUM_TRACKS } from './actionTypes';
import { dispatchError } from './errorActions';
import { errorHandler } from '../services/ErrorService';

const albumService = new AlbumService();

export const getAlbum = id => async dispatch => {
  const wrapper = errorHandler(albumService.getAlbum, dispatchError(dispatch));
  const album = await wrapper(id);
  album && dispatch({ type: GET_ALBUM, payload: album });
};

export const getAlbumsTracks = id => async dispatch => {
  const wrapper = errorHandler(albumService, dispatchError(dispatch));
  const tracks = await wrapper(id);
  tracks && dispatch({ type: GET_ALBUM_TRACKS, payload: tracks });
};
