import { getCPTRanking } from '../utils/Api';

export const FETCH_RANKING_DATA_STARTED = 'FETCH_RANKING_DATA_STARTED';
export const FETCH_RANKING_DATA_COMPLETED = 'FETCH_RANKING_DATA_COMPLETED';
export const FETCH_RANKING_DATA_FAILED = 'FETCH_RANKING_DATA_FAILED';

export const rankingActions = {
  fetchCPTRankingData(dispatch) {
    dispatch({
      type: FETCH_RANKING_DATA_STARTED,
      payload: [],
    });

    return getCPTRanking()
      .then(data => dispatch({
        type: FETCH_RANKING_DATA_COMPLETED,
        payload: data,
      }))
      .catch((err) => {
        console.error(err);

        dispatch({
          type: FETCH_RANKING_DATA_FAILED,
          isError: true,
          payload: err,
        });
      });
  },
};
