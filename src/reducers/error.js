import { SHOW_ERROR, HIDE_ERROR } from '../actions/actionTypes';

const initialState = {
  message: '',
  status: null,
  show: false
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      const { message, status } = action.payload;
      return {
        ...state,
        message,
        status,
        show: true
      };
    case HIDE_ERROR:
      const { show } = action.payload;
      return {
        ...state,
        show,
        error: {}
      };
    default:
      return state;
  }
};
export default error;
