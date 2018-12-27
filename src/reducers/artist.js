import {
  GET_ARTIST,
  GET_ARTISTS_ALBUM,
  GET_ARTISTS_TOP_TRACKS,
  GET_ARTIST_RELATED_ARTISTS
} from '../actions/actionTypes';

const initialState = {
  artist: {},
  artistsAlbums: [],
  artistsTopTracks: [],
  artistRelatedArtists: []
};

const artist = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload
      };
    case GET_ARTISTS_ALBUM:
      return {
        ...state,
        artistsAlbums: action.payload
      };
    case GET_ARTISTS_TOP_TRACKS:
      return {
        ...state,
        artistsTopTracks: action.payload
      };
    case GET_ARTIST_RELATED_ARTISTS:
      return {
        ...state,
        artistRelatedArtists: action.payload
      };
    default:
      return state;
  }
};

export default artist;
