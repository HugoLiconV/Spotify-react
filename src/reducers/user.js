import { GET_CURRENT_USER } from '../actions/actionTypes';

const initialState = {
  currentUser: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default user;
