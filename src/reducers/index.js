import { combineReducers } from 'redux';
import players from './players';
import ranking from './ranking';
import profile from './profile';

export default combineReducers({
  players,
  ranking,
  profile,
});
