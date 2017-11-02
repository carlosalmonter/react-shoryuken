import {
  FETCH_RANKING_DATA_STARTED,
  FETCH_RANKING_DATA_COMPLETED,
  FETCH_RANKING_DATA_FAILED,
} from '../actions/ranking';

const initialState = {
  cptRankingData: [],
  isLoadingData: false,
  isLoadingError: false,
};

const ranking = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_RANKING_DATA_STARTED:
      return { cptRankingData: [], isLoadingData: true, isLoadingError: false };
    case FETCH_RANKING_DATA_COMPLETED:
      return { ...currentState, isLoadingData: false, cptRankingData: action.payload };
    case FETCH_RANKING_DATA_FAILED:
      return { isLoadingData: false, cptRankingData: [], isLoadingError: action.isError };
    default:
      return currentState;
  }
};

export default ranking;
