import React, { useState, useEffect } from 'react';
import { array, func } from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { searchBeers, addBeers } from 'actions';


const Search = ({ searchBeers, beers }) => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //
  //   searchBeers({ beers, searchString: value });
  // };

  const handleSubmitClear = (event) => {
    event.preventDefault();
    setValue('');
    searchBeers({ beers, searchString: '' });
  };

  const BEER_API_NAME = `https://api.punkapi.com/v2/beers?beer_name=${value}`;
  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(value);
    searchBeers({ beers, searchString: value });
  };

  useEffect(() => {
    if (!beers.length) {
      fetch(BEER_API_NAME)
        .then((response) => response.json())

        .then((beers) => {
          addBeers(beers);
          // console.log(beers);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [beers, query]);

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

const mapStateToProps = (state) => ({
  beers: state.beers.current,
});

const mapDispatchToProps = {
  searchBeers,
  addBeers,
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
