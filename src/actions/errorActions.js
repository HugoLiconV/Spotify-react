import { SHOW_ERROR, HIDE_ERROR } from './actionTypes';

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
    dispatch(showError(status, message));
  };
}
