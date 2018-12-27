import { GET_CURRENT_USER } from '../actions/actionTypes';

const initialState = {
  curretUser: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        curretUser: action.payload
      };

    default:
      return state;
  }
};

export default user;
