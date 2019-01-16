import { SEARCH } from '../actions/actionTypes';

const initialState = {
  searchResults: {}
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        searchResults: action.payload
      };

    default:
      return state;
  }
};

export default search;
