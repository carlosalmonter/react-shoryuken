import {
  FETCH_PLAYERS_DATA_STARTED,
  FETCH_PLAYERS_DATA_COMPLETED,
  FETCH_PLAYERS_DATA_FAILED,
  HOME_PLAYER_QUERY_UPDATED,
} from '../actions/players';
import config from '../config/config';

const initialState = {
  playerSearchQuery: config.EMPTY_STRING,
  playersData: [],
  isLoadingData: false,
};

const players = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS_DATA_STARTED:
      return {
        ...currentState,
        playersData: [],
        isLoadingData: true,
        playerSearchQuery: config.EMPTY_STRING,
      };
    case FETCH_PLAYERS_DATA_COMPLETED:
      return {
        isLoadingData: false,
        playersData: action.payload,
        playerSearchQuery: config.EMPTY_STRING,
      };
    case FETCH_PLAYERS_DATA_FAILED:
      return { isLoadingData: false, playersData: [], playerSearchQuery: config.EMPTY_STRING };
    case HOME_PLAYER_QUERY_UPDATED:
      return { ...currentState, playerSearchQuery: action.payload };
    default:
      return currentState;
  }
};

export default players;
