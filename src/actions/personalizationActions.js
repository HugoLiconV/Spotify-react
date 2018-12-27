import PersonalizationService from '../services/http/personalization';
import { GET_USERS_TOP_ARTISTS, GET_USERS_TOP_TRACKS } from './actionTypes';

const personalizationService = new PersonalizationService();

export const getUsersTopArtists = () => dispatch => {
  personalizationService
    .getUsersTopArtists()
    .then(artists => {
      dispatch({ type: GET_USERS_TOP_ARTISTS, payload: artists });
    })
    .catch(e => console.log(e));
};
export const getUsersTopTracks = () => dispatch => {
  personalizationService
    .getUsersTopTracks()
    .then(tracks => {
      dispatch({ type: GET_USERS_TOP_TRACKS, payload: tracks });
    })
    .catch(e => console.log(e));
};
