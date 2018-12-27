import AlbumService from '../services/http/album';
import { GET_ALBUM, GET_ALBUM_TRACKS } from './actionTypes';

const albumService = new AlbumService();

export const getAlbum = id => dispatch => {
  albumService
    .getAlbum(id)
    .then(album => {
      dispatch({ type: GET_ALBUM, payload: album });
    })
    .catch(e => console.log(e));
};

export const getAlbumsTracks = id => dispatch => {
  albumService
    .getAlbumsTracks(id)
    .then(tracks => {
      dispatch({ type: GET_ALBUM_TRACKS, payload: tracks });
    })
    .catch(e => console.log(e));
};
