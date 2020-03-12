import { connect } from 'react-redux';
import Search from '../components/search.jsx';
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

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;