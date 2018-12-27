import ArtistService from '../services/http/artist';
import {
  GET_ARTIST,
  GET_ARTISTS_ALBUM,
  GET_ARTISTS_TOP_TRACKS,
  GET_ARTIST_RELATED_ARTISTS
} from './actionTypes';

const artistService = new ArtistService();

export const getArtist = id => dispatch => {
  artistService
    .getArtist(id)
    .then(artist => {
      dispatch({ type: GET_ARTIST, payload: artist });
    })
    .catch(e => console.log(e));
};

export const getArtistsAlbums = id => dispatch => {
  artistService
    .getArtistsAlbums(id)
    .then(albums => {
      dispatch({ type: GET_ARTISTS_ALBUM, payload: albums });
    })
    .catch(e => console.log(e));
};

export const getArtistsTopTracks = id => dispatch => {
  artistService
    .getArtistsTopTracks(id)
    .then(tracks => {
      dispatch({ type: GET_ARTISTS_TOP_TRACKS, payload: tracks });
    })
    .catch(e => console.log(e));
};

export const getArtistsRelatedArtists = id => dispatch => {
  artistService
    .getArtistsRelatedArtists(id)
    .then(artists => {
      dispatch({ type: GET_ARTIST_RELATED_ARTISTS, payload: artists });
    })
    .catch(e => console.log(e));
};
