import { SAVE_TOKEN } from './actionTypes';

export const saveToken = token => ({
  type: SAVE_TOKEN,
  token
});
