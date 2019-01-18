import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../actions/actionTypes';

const initialState = {
  message: '',
  status: null,
  show: false,
  type: ''
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      const { message, status, type } = action.payload;
      return {
        ...state,
        message,
        status,
        type,
        show: true
      };
    case HIDE_NOTIFICATION:
      const { show } = action.payload;
      return {
        ...state,
        show,
        message: '',
        status: null
      };
    default:
      return state;
  }
};
export default error;
