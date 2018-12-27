import { GET_CURRENT_USER } from './actionTypes';
import ProfileService from '../services/http/profile';

export const getCurrentUser = () => dispatch => {
  const profileService = new ProfileService();
  profileService
    .getCurrentProfile()
    .then(user => {
      dispatch({ type: GET_CURRENT_USER, payload: user });
    })
    .catch(e => {
      console.log(e);
    });
};
