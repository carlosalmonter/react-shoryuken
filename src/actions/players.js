import { searchPlayer } from '../utils/Api';

export const FETCH_PLAYERS_DATA_STARTED = 'FETCH_PLAYERS_DATA_STARTED';
export const FETCH_PLAYERS_DATA_COMPLETED = 'FETCH_PLAYERS_DATA_COMPLETED';
export const FETCH_PLAYERS_DATA_FAILED = 'FETCH_PLAYERS_DATA_FAILED';
export const PLAYERS_SEARCH_DATA_UPDATED = 'PLAYERS_SEARCH_DATA_UPDATED';
export const HOME_PLAYER_QUERY_UPDATED = 'HOME_PLAYER_QUERY_UPDATED';

export const playersActions = {
  fetchData(dispatch, queryString) {
    dispatch({
      type: FETCH_PLAYERS_DATA_STARTED,
      payload: '',
    });

    return searchPlayer(queryString)
      .then(data => dispatch({
        type: FETCH_PLAYERS_DATA_COMPLETED,
        payload: data,
      }))
      .catch((err) => {
        console.error(err);

        dispatch({
          type: FETCH_PLAYERS_DATA_FAILED,
          isError: true,
          payload: err,
        });
      });
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
