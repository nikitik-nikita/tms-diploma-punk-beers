import React from 'react';
import { array, func } from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { searchBeers } from 'actions';


const Search = ({ searchBeers, beers }) => {
  const handleInput = (event) => {
    searchBeers({ beers, searchString: event.target.value });
    console.log(beers);
  };


  return (
    <>
      <form>
        <input type="text" placeholder="Search for beer..." onChange={handleInput} />
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
