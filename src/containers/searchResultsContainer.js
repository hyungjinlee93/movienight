import { connect } from 'react-redux';
import SearchResults from '../components/searchResults.jsx';
import updateSearch from '../actions/search';

const mapStateToProps = (state) => {
  return {
    results: state.searchResults
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateSearch: (q) => dispatch(updateSearch(q))
  };
};

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults);

export default SearchResultsContainer;