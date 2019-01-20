import PersonalizationService from '../services/http/personalization';
import { GET_USERS_TOP_ARTISTS, GET_USERS_TOP_TRACKS } from './actionTypes';
import { dispatchError } from './notificationActions';
import { errorHandler } from '../services/ErrorService';

const personalizationService = new PersonalizationService();

export const getUsersTopArtists = (
  timeRange = 'medium_term',
  limit = 20,
  offset = 0
) => async dispatch => {
  const wrapper = errorHandler(
    personalizationService.getUsersTopArtists,
    dispatchError(dispatch)
  );
  const artists = await wrapper(timeRange, limit, offset);
  artists && dispatch({ type: GET_USERS_TOP_ARTISTS, payload: artists });
};
export const getUsersTopTracks = (
  timeRange = 'medium_term',
  limit = 20,
  offset = 0
) => async dispatch => {
  const wrapper = errorHandler(
    personalizationService.getUsersTopTracks,
    dispatchError(dispatch)
  );
  const tracks = await wrapper(timeRange, limit, offset);
  tracks && dispatch({ type: GET_USERS_TOP_TRACKS, payload: tracks });
};
