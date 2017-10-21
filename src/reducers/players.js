import {
  // PLAYERS_SEARCH_DATA_UPDATED,
  FETCH_PLAYERS_DATA_STARTED,
  FETCH_PLAYERS_DATA_COMPLETED,
  FETCH_PLAYERS_DATA_FAILED,
  HOME_PLAYER_QUERY_UPDATED,
} from '../actions/players';

const initialState = { playerSearchQuery: '', playersData: [], isLoadingData: false };

const players = (currentState = initialState, action) => {
  switch (action.type) {
    // case PLAYERS_SEARCH_DATA_UPDATED:
    //
    case FETCH_PLAYERS_DATA_STARTED:
      return { ...currentState, playersData: [], isLoadingData: true, playerSearchQuery: '' };
    case FETCH_PLAYERS_DATA_COMPLETED:
      return { isLoadingData: false, playersData: action.payload, playerSearchQuery: '' };
    case FETCH_PLAYERS_DATA_FAILED:
      return { isLoadingData: false, playersData: [], playerSearchQuery: '' };
    case HOME_PLAYER_QUERY_UPDATED:
      return { ...currentState, playerSearchQuery: action.payload };
    default:
      return currentState;
  }
};

export default players;
