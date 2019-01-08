import { SAVE_TOKEN, DELETE_TOKEN } from '../actions/actionTypes';

const initialState = {
  token: ''
};
const token = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...initialState,
        token: action.token
      };
    case DELETE_TOKEN:
      return {
        ...initialState,
        token: action.token
      };
    default:
      return state;
  }
};

export default token;
