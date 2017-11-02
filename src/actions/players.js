import { searchPlayer } from '../utils/Api';

export const FETCH_PLAYERS_DATA_STARTED = 'FETCH_PLAYERS_DATA_STARTED';
export const FETCH_PLAYERS_DATA_COMPLETED = 'FETCH_PLAYERS_DATA_COMPLETED';
export const FETCH_PLAYERS_DATA_FAILED = 'FETCH_PLAYERS_DATA_FAILED';
export const PLAYERS_SEARCH_DATA_UPDATED = 'PLAYERS_SEARCH_DATA_UPDATED';
export const HOME_PLAYER_QUERY_UPDATED = 'HOME_PLAYER_QUERY_UPDATED';

const initPlayersFetch = () => ({
  type: FETCH_PLAYERS_DATA_STARTED,
  payload: {},
});

const fetchPlayers = player => ({
  type: FETCH_PLAYERS_DATA_COMPLETED,
  payload: player,
});

const playerFetchFailed = err => ({
  type: FETCH_PLAYERS_DATA_FAILED,
  isError: true,
  payload: err,
});

export const playersActions = {
  fetchData(dispatch, queryString) {
    dispatch(initPlayersFetch());

    return searchPlayer(queryString)
      .then(data => dispatch(fetchPlayers(data)))
      .catch(err => dispatch(playerFetchFailed(err)));
  },
  searchDataUpdated: searchString => ({
    type: PLAYERS_SEARCH_DATA_UPDATED,
    payload: searchString,
  }),
  onSearchStringChanged(dispatch, queryString) {
    dispatch({
      type: HOME_PLAYER_QUERY_UPDATED,
      payload: queryString,
    });
  },
};
