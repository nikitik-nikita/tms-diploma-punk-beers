import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

// Actions
import { searchBeers } from 'actions';

const Search = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleSubmitClear = (event) => {
    event.preventDefault();

    setValue('');
  };

  const handleSearch = (event) => {
    event.preventDefault();

    dispatch(searchBeers(value));
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search for beer..." onChange={handleInput} value={value} />
        <button className="button__clear_search" type="button" onClick={handleSubmitClear}>&#8592;</button>
        <button className="button__search" type="submit">Search</button>
      </form>
    </>
  );
};


Search.displayName = 'Search';

export default Search;
