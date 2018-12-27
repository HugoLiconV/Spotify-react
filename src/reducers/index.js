import { combineReducers } from 'redux';
import album from './album';
import artist from './artist';
import browse from './browse';
import personalization from './personalization';
import player from './player';
import search from './search';
import token from './token';
import track from './track';
import user from './user';

export default combineReducers({
  album,
  artist,
  browse,
  personalization,
  player,
  search,
  token,
  track,
  user
});
