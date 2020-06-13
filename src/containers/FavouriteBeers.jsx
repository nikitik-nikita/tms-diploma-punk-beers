import React from 'react';
import { Route } from 'react-router-dom';
import { compose } from 'redux';

import { array, object } from 'prop-types';

// Hooks
import { connect } from 'react-redux';

// Components
import CartBeer from 'containers/CartBeer';
import NoFavourites from 'components/NoFavourites';

const FavouriteBeers = ({ favourite, beers }) => {
  const { beerIds } = favourite;
  const favouritesBeers = beers.filter((beer) => beerIds.includes(beer.id));
  // console.log(favouritesBeers);

  return (
    <Route path="/favourites">
      {favouritesBeers.length
        ? favouritesBeers.map((beer) => (
          <CartBeer
            key={beer.id}
            beer={beer}
          />
        ))
        : (<NoFavourites />)}
    </Route>
  );
};


FavouriteBeers.displayName = 'FavouriteBeers';

const mapStateToProps = (state) => ({
  beers: state.beers,
  favourite: state.favourite,
});

FavouriteBeers.propTypes = {
  beers: array.isRequired,
  favourite: object.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(FavouriteBeers);
