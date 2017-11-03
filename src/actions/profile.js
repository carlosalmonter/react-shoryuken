import { getPlayer } from '../utils/Api';

export const FETCHING_PROFILE = 'FETCHING_PROFILE';
export const PROFILE_FETCH_COMPLETED = 'PROFILE_FETCH_COMPLETED';
export const PROFILE_FETCH_FAILED = 'PROFILE_FETCH_FAILED';

const initProfileFetch = () => ({
  type: FETCHING_PROFILE,
  payload: {},
});

const fetchProfile = player => ({
  type: PROFILE_FETCH_COMPLETED,
  payload: player,
});

const profileFetchFailed = err => ({
  type: PROFILE_FETCH_FAILED,
  isError: true,
  payload: err,
});

export const profileActions = {
  fetchProfileData(dispatch, id) {
    dispatch(initProfileFetch());

    return getPlayer(id)
      .then(data => dispatch(fetchProfile(data)))
      .catch(err => dispatch(profileFetchFailed(err)));
  },
};
