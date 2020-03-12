const searchTMDb = require('../lib/searchTMDB');

async function updateSearch (q) {
  const results = await searchTMDb(q);
  return {
    type: 'UPDATE_RESULTS',
    results
  }
}

export default updateSearch;