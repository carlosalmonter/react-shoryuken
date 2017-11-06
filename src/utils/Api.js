import config from '../config/config';

const get = uri => fetch(`${config.PROXY_URL}${config.API_URL}${uri}`)
  .then(response => response.json())
  .then(data => data);

export const searchPlayer = query => get(`search?type=player&query=${query}`);
export const getPlayer = id => get(`player/id/${id}`);
export const getCPTRanking = () => get('top?cpt=true&size=30&format=json');

export default {
  searchPlayer,
  getPlayer,
  getCPTRanking,
};
