import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './actionTypes';
import { deleteToken } from './tokenActions';
import { ERROR_NOTIFICATION } from '../constants';

export const showNotification = (status, message, type) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      status,
      message,
      type
    }
  };
};

export const hideNotification = () => {
  return {
    type: HIDE_NOTIFICATION,
    payload: { show: false }
  };
};

export function dispatchError(dispatch) {
  return ({ status, message, type }) => {
    if (type === ERROR_NOTIFICATION && status === 401) {
      dispatch(deleteToken());
      window.location.reload(true);
    }
    dispatch(showNotification(status, message, type));
  };
}
