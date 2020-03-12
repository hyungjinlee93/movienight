const searchResultsReducer = (state = [], action) => {
  if (action.type === 'UPDATE_RESULTS') {
    return action.results;
  } else {
    return state;
  }
}

export default searchResultsReducer;