import {
  FETCHING_PROFILE,
  PROFILE_FETCH_COMPLETED,
  PROFILE_FETCH_FAILED,
} from '../actions/profile';

const initialState = {
  profileData: {},
  isLoadingData: true,
  isLoadingError: false,
};

const players = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCHING_PROFILE:
      return {
        ...currentState,
        profileData: {},
        isLoadingData: true,
        isLoadingError: false,
      };
    case PROFILE_FETCH_COMPLETED:
      return {
        ...currentState,
        isLoadingData: false,
        profileData: action.payload,
      };
    case PROFILE_FETCH_FAILED:
      return {
        isLoadingData: false,
        profileData: {},
        isLoadingError: action.isError,
      };
    default:
      return currentState;
  }
};

export default players;
