const key = require('../keys/tmdbkey');
const fetch = require('node-fetch');

async function searchTMDb (query) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie/?query=${query}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  return (await response.json()).results.slice(0, 5);
}

module.exports = searchTMDb;