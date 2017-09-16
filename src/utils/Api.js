const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'http://rank.shoryuken.com/api/';

export const searchPlayer = () => get(`search?type=player&query=daigo`);

const get = (uri) => fetch(`${proxyUrl}${apiUrl}${uri}`)
  .then((response) => response.json())
  .then((data) => data);
