import reducer from '../track';
import * as types from '../../actions/actionTypes';

describe('Track reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      tracks: [],
      track: {}
    });
  });

  it('should handle GET_TRACKS', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_TRACKS,
          payload: { items: [{ id: 1, name: 'a' }] }
        }
      )
    ).toEqual({
      tracks: { items: [{ id: 1, name: 'a' }] }
    });
  });

  it('should handle GET_TRACK', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_TRACK,
          payload: { id: 1, name: 'a' }
        }
      )
    ).toEqual({
      track: { id: 1, name: 'a' }
    });
  });
});
