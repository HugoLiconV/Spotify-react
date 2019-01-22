import reducer from '../search';
import * as types from '../../actions/actionTypes';

describe('Search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      searchResults: {}
    });
  });

  it('should handle SEARCH', () => {
    expect(
      reducer(
        {},
        {
          type: types.SEARCH,
          payload: {
            tracks: [{ id: 1, name: 'a' }],
            artists: [{ id: 2, name: 'b' }],
            playlists: [{ id: 3, name: 'c' }],
            albums: [{ id: 4, name: 'd' }]
          }
        }
      )
    ).toEqual({
      searchResults: {
        tracks: [{ id: 1, name: 'a' }],
        artists: [{ id: 2, name: 'b' }],
        playlists: [{ id: 3, name: 'c' }],
        albums: [{ id: 4, name: 'd' }]
      }
    });
  });
});
