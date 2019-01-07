import { SHOW_ERROR, HIDE_ERROR } from './actionTypes';
import { deleteToken } from './tokenActions';
export const showError = (status, message) => {
  return {
    type: SHOW_ERROR,
    payload: {
      status,
      message
    }
  };
};

export const hideError = () => {
  return {
    type: HIDE_ERROR,
    payload: { show: false }
  };
};

export function dispatchError(dispatch) {
  return ({ status, message }) => {
    if (status === 401) {
      dispatch(deleteToken());
      window.location.reload(true);
    }
    dispatch(showError(status, message));
  };
}
