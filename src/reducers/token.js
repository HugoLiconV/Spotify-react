import { SAVE_TOKEN } from '../actions/actionTypes';

const initialState = {
  token: ''
};
const token = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        token: action.token
      };

    default:
      return state;
  }
};

export default token;
