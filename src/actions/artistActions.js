import ArtistService from '../services/http/artist';
import { dispatchError } from './errorActions';
import { errorHandler } from '../services/ErrorService';
import {
  GET_ARTIST,
  GET_ARTISTS_ALBUM,
  GET_ARTISTS_TOP_TRACKS,
  GET_ARTIST_RELATED_ARTISTS
} from './actionTypes';

const artistService = new ArtistService();

export const getArtist = id => async dispatch => {
  const wrapper = errorHandler(
    artistService.getArtist,
    dispatchError(dispatch)
  );
  const artist = await wrapper(id);
  artist && dispatch({ type: GET_ARTIST, payload: artist });
};

export const getArtistsAlbums = id => async dispatch => {
  const wrapper = errorHandler(
    artistService.getArtistsAlbums,
    dispatchError(dispatch)
  );
  const albums = await wrapper(id);
  albums && dispatch({ type: GET_ARTISTS_ALBUM, payload: albums });
};

export const getArtistsTopTracks = id => async dispatch => {
  const wrapper = errorHandler(
    artistService.getArtistsTopTracks,
    dispatchError(dispatch)
  );
  const tracks = await wrapper(id);
  tracks && dispatch({ type: GET_ARTISTS_TOP_TRACKS, payload: tracks });
};

export const getArtistsRelatedArtists = id => async dispatch => {
  const wrapper = errorHandler(
    artistService.getArtistsRelatedArtists,
    dispatchError(dispatch)
  );
  const artists = await wrapper(id);
  artists && dispatch({ type: GET_ARTIST_RELATED_ARTISTS, payload: artists });
};
