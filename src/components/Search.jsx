import React, { useState } from 'react';
import { object } from 'prop-types';

// Hooks
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { searchBeers } from 'actions';

const Search = ({ history }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleSubmitClear = (event) => {
    event.preventDefault();

    history.push('/');
    setValue('');
    return dispatch(searchBeers(() => value));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (value === '') {
      history.push('/');
      dispatch(searchBeers(value));
    } else if (value !== '') {
      history.push('/search');
      dispatch(searchBeers(value));
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" maxLength="35" placeholder="Search for beer..." onChange={handleInput} value={value} />
        <button className="button__clear_search" type="button" onClick={handleSubmitClear}>&#8592;</button>
        <button className="button__search" type="submit">Search</button>
      </form>
    </>
  );
};

Search.displayName = 'Search';

Search.propTypes = {
  history: object.isRequired,
};

export default withRouter(Search);
