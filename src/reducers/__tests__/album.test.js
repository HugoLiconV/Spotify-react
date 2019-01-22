import reducer from '../album';
import * as types from '../../actions/actionTypes';

describe('Album reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      album: {},
      albumsTracks: {}
    });
  });

  it('should handle GET_ALBUM', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_ALBUM,
          payload: { id: 1, title: 'a' }
        }
      )
    ).toEqual({
      album: { id: 1, title: 'a' }
    });

    expect(
      reducer(
        {
          album: { id: 1, title: 'a' }
        },
        {
          type: types.GET_ALBUM,
          payload: { id: 2, title: 'b' }
        }
      )
    ).toEqual({
      album: { id: 2, title: 'b' }
    });
  });
});
