const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'http://rank.shoryuken.com/api/';

const get = uri => fetch(`${proxyUrl}${apiUrl}${uri}`)
  .then(response => response.json())
  .then(data => data);

export const searchPlayer = query => get(`search?type=player&query=${query}`);
export const getPlayer = id => get(`player/id/${id}`);

export default {
  searchPlayer,
  getPlayer,
};
