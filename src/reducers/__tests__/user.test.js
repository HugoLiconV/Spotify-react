import reducer from '../user';
import * as types from '../../actions/actionTypes';

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      currentUser: {}
    });
  });

  it('should handle GET_CURRENT_USER', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_CURRENT_USER,
          payload: {
            user: { id: 1, name: 'Hugo' }
          }
        }
      )
    ).toEqual({
      currentUser: {
        user: { id: 1, name: 'Hugo' }
      }
    });
  });
});
