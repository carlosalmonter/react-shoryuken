import { getCPTRanking } from '../utils/Api';

export const FETCH_RANKING_DATA_STARTED = 'FETCH_RANKING_DATA_STARTED';
export const FETCH_RANKING_DATA_COMPLETED = 'FETCH_RANKING_DATA_COMPLETED';
export const FETCH_RANKING_DATA_FAILED = 'FETCH_RANKING_DATA_FAILED';

const initRankingSearch = () => ({
  type: FETCH_RANKING_DATA_STARTED,
  payload: [],
});

const CPTRankingSearch = ranking => ({
  type: FETCH_RANKING_DATA_COMPLETED,
  payload: ranking,
});

const CPTRankingSearchFailed = err => ({
  type: FETCH_RANKING_DATA_FAILED,
  isError: true,
  payload: err,
});

export const rankingActions = {
  fetchCPTRankingData(dispatch) {
    dispatch(initRankingSearch());

    return getCPTRanking()
      .then(data => dispatch(CPTRankingSearch(data)))
      .catch(err => dispatch(CPTRankingSearchFailed(err)));
  },
};
