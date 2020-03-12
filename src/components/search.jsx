import React from 'react';

const Search = ({handleUpdateSearch}) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const query = e.target[0].value;
    handleUpdateSearch(query);
  }
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input className="search-input" type="text" placeholder="Search Movie Here"/>
        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default Search;