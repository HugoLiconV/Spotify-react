import BrowseService from '../services/http/browse';
import {
  GET_CATEGORY,
  GET_CATEGORYS_PLAYLISTS,
  GET_CATEGORIES,
  GET_FEATUREDPLAYLISTS,
  GET_NEW_RELEASES
} from './actionTypes';

const browseService = new BrowseService();

export const getCategory = id => dispatch => {
  browseService
    .getCategory(id)
    .then(category => {
      dispatch({ type: GET_CATEGORY, payload: category });
    })
    .catch(e => console.log(e));
};
export const getCategorysPlaylists = id => dispatch => {
  browseService
    .getCategorysPlaylists(id)
    .then(playlists => {
      dispatch({ type: GET_CATEGORYS_PLAYLISTS, payload: playlists });
    })
    .catch(e => console.log(e));
};
export const getCategories = () => dispatch => {
  browseService
    .getCategories()
    .then(categories => {
      dispatch({ type: GET_CATEGORIES, payload: categories });
    })
    .catch(e => console.log(e));
};
export const getFeaturedPlaylists = () => dispatch => {
  browseService
    .getFeaturedPlaylists()
    .then(playlists => {
      dispatch({ type: GET_FEATUREDPLAYLISTS, payload: playlists });
    })
    .catch(e => console.log(e));
};
export const getNewReleases = () => dispatch => {
  browseService
    .getNewReleases()
    .then(albums => {
      dispatch({ type: GET_NEW_RELEASES, payload: albums });
    })
    .catch(e => console.log(e));
};
