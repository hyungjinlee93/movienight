const searchTMDb = require('../lib/searchTMDB');

async function updateSearch (q) {
  const results = await searchTMDb(q);
  console.log(results);
  return {
    type: 'UPDATE_RESULTS',
    results: results
  }
}

export default updateSearch;