import BrowseService from '../services/http/browse';
import { dispatchError } from './notificationActions';
import { errorHandler } from '../services/ErrorService';
import {
  GET_CATEGORY,
  GET_CATEGORYS_PLAYLISTS,
  GET_CATEGORIES,
  GET_FEATUREDPLAYLISTS,
  GET_NEW_RELEASES
} from './actionTypes';

const browseService = new BrowseService();

export const getCategory = id => async dispatch => {
  const wrapper = errorHandler(
    browseService.getCategory,
    dispatchError(dispatch)
  );
  const category = await wrapper(id);
  category && dispatch({ type: GET_CATEGORY, payload: category });
};
export const getCategorysPlaylists = id => async dispatch => {
  const wrapper = errorHandler(
    browseService.getCategorysPlaylists,
    dispatchError(dispatch)
  );
  const playlists = await wrapper(id);
  playlists && dispatch({ type: GET_CATEGORYS_PLAYLISTS, payload: playlists });
};
export const getCategories = () => async dispatch => {
  const wrapper = errorHandler(
    browseService.getCategories,
    dispatchError(dispatch)
  );
  const categories = await wrapper();
  categories && dispatch({ type: GET_CATEGORIES, payload: categories });
};
export const getFeaturedPlaylists = (
  limit = 20,
  offset = 0
) => async dispatch => {
  const wrapper = errorHandler(
    browseService.getFeaturedPlaylists,
    dispatchError(dispatch)
  );
  const playlists = await wrapper(limit, offset);
  playlists && dispatch({ type: GET_FEATUREDPLAYLISTS, payload: playlists });
};
export const getNewReleases = (limit = 20, offset = 0) => async dispatch => {
  const wrapper = errorHandler(
    browseService.getNewReleases,
    dispatchError(dispatch)
  );
  const albums = await wrapper(limit, offset);
  albums && dispatch({ type: GET_NEW_RELEASES, payload: albums });
};
