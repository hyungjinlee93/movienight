const searchTimeReducer = (state = 0, action) => {
  if (action.type === 'UPDATE_TIME') {
    return action.searchTime;
  } else {
    return state;
  }
}

export default searchTimeReducer;