import { combineReducers } from 'redux';
import searchResultsReducer from './searchResults';
import searchTimeReducer from './searchTime';

const rootReducer = combineReducers({
  'searchResults': searchResultsReducer,
  'searchTime': searchTimeReducer
});

export default rootReducer;