const searchTimeReducer = (state = Date.now(), action) => {
  if (action.type === 'UPDATE_TIME') {
    return action.searchTime;
  } else {
    return state;
  }
}

export default searchTimeReducer;