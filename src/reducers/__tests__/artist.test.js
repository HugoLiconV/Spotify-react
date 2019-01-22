import reducer from '../artist';
import * as types from '../../actions/actionTypes';

describe('Artist reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      artist: {},
      artistsAlbums: {},
      artistsTopTracks: [],
      artistRelatedArtists: {}
    });
  });

  it('should handle GET_ARTIST', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_ARTIST,
          payload: { id: 1, title: 'a' }
        }
      )
    ).toEqual({
      artist: { id: 1, title: 'a' }
    });
  });

  it('should handle GET_ARTISTS_ALBUM', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_ARTISTS_ALBUM,
          payload: {
            items: [{ id: 1, title: 'a' }, { id: 2, title: 'b' }]
          }
        }
      )
    ).toEqual({
      artistsAlbums: { items: [{ id: 1, title: 'a' }, { id: 2, title: 'b' }] }
    });
  });

  it('should handle GET_ARTISTS_TOP_TRACKS', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_ARTISTS_TOP_TRACKS,
          payload: { id: 1, title: 'a' }
        }
      )
    ).toEqual({
      artistsTopTracks: { id: 1, title: 'a' }
    });
  });

  it('should handle GET_ARTIST_RELATED_ARTISTS', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_ARTIST_RELATED_ARTISTS,
          payload: { artists: [{ id: 1, name: 'a' }, { id: 2, name: 'b' }] }
        }
      )
    ).toEqual({
      artistRelatedArtists: {
        artists: [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
      }
    });
  });
});
