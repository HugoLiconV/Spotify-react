import PersonalizationService from '../services/http/personalization';
import { GET_USERS_TOP_ARTISTS, GET_USERS_TOP_TRACKS } from './actionTypes';
import { dispatchError } from './errorActions';
import { errorHandler } from '../services/ErrorService';

const personalizationService = new PersonalizationService();

export const getUsersTopArtists = () => async dispatch => {
  const wrapper = errorHandler(
    personalizationService.getUsersTopArtists,
    dispatchError(dispatch)
  );
  const artists = await wrapper();
  artists && dispatch({ type: GET_USERS_TOP_ARTISTS, payload: artists });
};
export const getUsersTopTracks = () => async dispatch => {
  const wrapper = errorHandler(
    personalizationService.getUsersTopTracks,
    dispatchError(dispatch)
  );
  const tracks = await wrapper();
  tracks && dispatch({ type: GET_USERS_TOP_TRACKS, payload: tracks });
};
