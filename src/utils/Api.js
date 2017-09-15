const apiUrl = 'http://rank.shoryuken.com/api/';

export const searchPlayer = () => get(`search?type=player&query=daigo`);

const get = (uri) => fetch(`${apiUrl}${uri}`)
    .then((response) => response.json())
    .then((data) => data);
