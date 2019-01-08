import { SAVE_TOKEN, DELETE_TOKEN } from './actionTypes';

export const saveToken = token => ({
  type: SAVE_TOKEN,
  token
});

export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: undefined
});
