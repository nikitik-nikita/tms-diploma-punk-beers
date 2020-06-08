import React, { useState } from 'react';
import { array, func } from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { searchBeers } from 'actions';


const Search = ({ searchBeers, beers }) => {
  const [value, setValue] = useState('');

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    searchBeers({ beers, searchString: value });
  };

  const handleSubmitClear = (event) => {
    event.preventDefault();
    setValue('');
    searchBeers({ beers, searchString: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for beer..." onChange={handleInput} value={value} />
        <button className="button__clear_search" type="button" onClick={handleSubmitClear}>&#8592;</button>
        <button className="button__search" type="submit">Search</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  beers: state.beers.current,
});

const mapDispatchToProps = {
  searchBeers,
};

Search.displayName = 'Search';

Search.propTypes = {
  beers: array.isRequired,
  searchBeers: func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
