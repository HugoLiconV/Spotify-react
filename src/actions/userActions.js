import ProfileService from '../services/http/profile';
import { GET_CURRENT_USER } from './actionTypes';
import { errorHandler } from '../services/ErrorService';
import { dispatchError } from './errorActions';

export const getCurrentUser = () => async dispatch => {
  const profileService = new ProfileService();
  const wrapper = errorHandler(
    profileService.getCurrentProfile,
    dispatchError(dispatch)
  );
  const user = await wrapper();
  user && dispatch({ type: GET_CURRENT_USER, payload: user });
};
