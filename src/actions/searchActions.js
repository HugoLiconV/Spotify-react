import SearchService from '../services/http/search';
import { SEARCH } from './actionTypes';

const searchSercice = new SearchService();

export const search = (query, type, limit, offset) => dispatch => {
  searchSercice
    .search(query, type, limit, offset)
    .then(results => {
      dispatch({ type: SEARCH, payload: results });
    })
    .catch(e => console.log(e));
};
