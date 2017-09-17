const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'http://rank.shoryuken.com/api/';

const get = uri => fetch(`${proxyUrl}${apiUrl}${uri}`)
  .then(response => response.json())
  .then(data => data);

export const searchPlayer = () => get('search?type=player&query=daigo');

export default {
  searchPlayer,
};
