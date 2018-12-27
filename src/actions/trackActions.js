import TrackService from '../services/http/track';
import { GET_TRACKS, GET_TRACK } from './actionTypes';

const trackService = new TrackService();

export const getTracks = ids => dispatch => {
  trackService
    .getTracks(ids)
    .then(tracks => {
      dispatch({ type: GET_TRACKS, payload: tracks });
    })
    .catch(e => console.log(e));
};

export const getTrack = id => dispatch => {
  trackService
    .getTrack(id)
    .then(track => {
      dispatch({ type: GET_TRACK, payload: track });
    })
    .catch(e => console.log(e));
};
