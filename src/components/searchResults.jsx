import React from 'react';

const SearchResults = ({handleUpdateSearch, results}) => {
  if (results === undefined || results.length === 0) {
    return null;
  }
  let list = results.map(data => {
    return (
      <div id={`movie-id-${data.id}`} className="movie-result">
        {data.title}
        <img src={`https://image.tmdb.org/t/p/w45${data.poster_path}`} height="32" />
      </div>
    )
  });
  const handleClick = (e) => {
    debugger;
  }
  return (
    <div className="search-list" onClick={handleClick}>
      {list}
    </div>
  )
}

export default SearchResults;