import SearchService from '../services/http/search';
import { SEARCH } from './actionTypes';
import { dispatchError } from './errorActions';
import { errorHandler } from '../services/ErrorService';

const searchSercice = new SearchService();

export const search = (query, type, limit, offset) => async dispatch => {
  const wrapper = errorHandler(searchSercice.search, dispatchError(dispatch));
  const results = await wrapper(query, type, limit, offset);
  results && dispatch({ type: SEARCH, payload: results });
};
