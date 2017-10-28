import {
  FETCH_RANKING_DATA_STARTED,
  FETCH_RANKING_DATA_COMPLETED,
  FETCH_RANKING_DATA_FAILED,
} from '../actions/ranking';

const initialState = { cptRankingData: [], isLoadingData: false };

const ranking = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_RANKING_DATA_STARTED:
      return { cptRankingData: [], isLoadingData: true };
    case FETCH_RANKING_DATA_COMPLETED:
      return { isLoadingData: false, cptRankingData: action.payload };
    case FETCH_RANKING_DATA_FAILED:
      return { isLoadingData: false, cptRankingData: [] };
    default:
      return currentState;
  }
};

export default ranking;
