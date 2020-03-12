import React from 'react';

const Search = ({handleUpdateSearch, handleUpdateSearchTime, searchTime}) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const query = e.target[0].value;
    handleUpdateSearch(query);
    handleUpdateSearchTime(Date.now());
  }
  const handleChange = (e) => {
    e.preventDefault();
    if (Date.now() > searchTime + 5000) {
      const query = e.target.value;
      handleUpdateSearch(query);
      handleUpdateSearchTime(Date.now());
    }
  }
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input className="search-input" type="text" placeholder="Search Movie Here" onChange={handleChange}/>
        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default Search;