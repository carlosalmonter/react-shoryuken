import { combineReducers } from 'redux';
import players from './players';
import ranking from './ranking';

export default combineReducers({
  players,
  ranking,
});
