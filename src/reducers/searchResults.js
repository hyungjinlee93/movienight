import Redux from 'redux';

const searchResultsReducer = (state = null, action) => {
  if (action.type === 'UPDATE_SEARCH') {
    return action.results;
  } else {
    return state;
  }
}

export default searchResultsReducer;