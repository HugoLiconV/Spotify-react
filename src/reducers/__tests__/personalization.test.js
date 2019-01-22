import reducer from '../personalization';
import * as types from '../../actions/actionTypes';

describe('Personalization reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      topArtists: {},
      topTracks: {}
    });
  });

  it('should handle GET_USERS_TOP_ARTISTS', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_USERS_TOP_ARTISTS,
          payload: { items: [{ id: 1, title: 'a' }, { id: 2, title: 'b' }] }
        }
      )
    ).toEqual({
      topArtists: {
        items: [{ id: 1, title: 'a' }, { id: 2, title: 'b' }]
      }
    });
  });

  it('should handle GET_USERS_TOP_TRACKS', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_USERS_TOP_TRACKS,
          payload: { items: [{ id: 1, title: 'a' }, { id: 2, title: 'b' }] }
        }
      )
    ).toEqual({
      topTracks: {
        items: [{ id: 1, title: 'a' }, { id: 2, title: 'b' }]
      }
    });
  });
});
