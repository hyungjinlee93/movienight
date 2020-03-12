import { connect } from 'react-redux';
import Search from '../components/search.jsx';
import updateSearch from '../actions/search';
import updateSearchTime from '../actions/searchTime';

const mapStateToProps = (state) => {
  return {
    searchTime: state.searchTime
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateSearch: (q) => dispatch(updateSearch(q)),
    handleUpdateSearchTime: (time) => dispatch(updateSearchTime(time))
  };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;