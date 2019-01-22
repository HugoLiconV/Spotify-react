import reducer from '../notification';
import * as types from '../../actions/actionTypes';

describe('Notification reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      message: '',
      status: null,
      show: false,
      type: ''
    });
  });

  it('should handle SHOW_NOTIFICATION', () => {
    expect(
      reducer(
        {},
        {
          type: types.SHOW_NOTIFICATION,
          payload: {
            message: 'test',
            status: 501,
            type: 'error'
          }
        }
      )
    ).toEqual({
      message: 'test',
      status: 501,
      type: 'error',
      show: true
    });
  });

  it('should handle HIDE_NOTIFICATION', () => {
    expect(
      reducer(
        {
          message: 'test',
          status: 501,
          type: 'error',
          show: true
        },
        {
          type: types.HIDE_NOTIFICATION,
          payload: { show: false }
        }
      )
    ).toEqual({
      show: false,
      message: '',
      status: null,
      type: 'error'
    });
  });
});
