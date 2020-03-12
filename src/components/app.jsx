import React from 'react';
import SearchContainer from '../containers/searchContainer';
import SearchResultsContainer from '../containers/searchResultsContainer';

const App = function () {
  return (
    <div>
      <div>Movie Night</div>
      <div>
        <SearchContainer />
        <SearchResultsContainer />
      </div>
    </div>
  )
}
export default App;