import reducer from '../token';
import * as types from '../../actions/actionTypes';

describe('Token reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: ''
    });
  });

  it('should handle SAVE_TOKEN', () => {
    expect(
      reducer(
        {},
        {
          type: types.SAVE_TOKEN,
          token: '123ABC'
        }
      )
    ).toEqual({
      token: '123ABC'
    });
  });

  it('should handle DELETE_TOKEN', () => {
    expect(
      reducer(
        {},
        {
          type: types.DELETE_TOKEN,
          token: undefined
        }
      )
    ).toEqual({
      token: undefined
    });
  });
});
