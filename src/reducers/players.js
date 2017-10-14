import { combineReducers } from 'redux';

import {
  // PLAYERS_SEARCH_DATA_UPDATED,
  FETCH_PLAYERS_DATA_STARTED,
  FETCH_PLAYERS_DATA_COMPLETED,
  FETCH_PLAYERS_DATA_FAILED,
} from '../actions';

const initialState = { playerSearchQuery: null, playersData: [], isLoadingData: false };

const players = (currentState = initialState, action) => {
  switch (action.type) {
    // case PLAYERS_SEARCH_DATA_UPDATED:
    //
    case FETCH_PLAYERS_DATA_STARTED:
      return { ...currentState, playersData: [], isLoadingData: true };
    case FETCH_PLAYERS_DATA_COMPLETED:
      return { isLoadingData: false, playersData: action.payload };
    case FETCH_PLAYERS_DATA_FAILED:
      return { isLoadingData: false, playersData: [] };
    default:
      return currentState;
  }
};

export default players;
