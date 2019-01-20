import { combineReducers } from 'redux';
import album from './album';
import artist from './artist';
import browse from './browse';
import notification from './notification';
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
  notification,
  personalization,
  player,
  search,
  token,
  track,
  user
});
