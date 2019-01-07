import TrackService from '../services/http/track';
import { GET_TRACKS, GET_TRACK } from './actionTypes';
import { dispatchError } from './errorActions';
import { errorHandler } from '../services/ErrorService';

const trackService = new TrackService();

export const getTracks = ids => async dispatch => {
  const wrapper = errorHandler(trackService.getTracks, dispatchError(dispatch));
  const tracks = await wrapper(ids);
  tracks && dispatch({ type: GET_TRACKS, payload: tracks });
};

export const getTrack = id => async dispatch => {
  const wrapper = errorHandler(trackService.getTrack, dispatchError(dispatch));
  const track = await wrapper(id);
  track && dispatch({ type: GET_TRACK, payload: track });
};
