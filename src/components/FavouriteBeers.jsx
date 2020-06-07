import React from 'react';
import { Route } from 'react-router-dom';
import { compose } from 'redux';

import { array, object } from 'prop-types';


// HOCs
import { connect } from 'react-redux';

// Styles (hooks)
import useStyles from 'styles/containers/Beers';

// Components
import CartBeer from 'components/CartBeer';
import NoFavourites from 'components/NoFavourites';

const FavouriteBeers = ({ favourite, beers }) => {
  const classes = useStyles();

  const { beerIds } = favourite;
  const favouritesBeers = beers.filter((beer) => beerIds.includes(beer.id));
  console.log(favouritesBeers);

  return (
    <div className={classes.Root}>
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
    </div>
  );
};


FavouriteBeers.displayName = 'FavouriteBeers';

const mapStateToProps = (state) => ({
  beers: state.beers.current,
  favourite: state.favourite,
});


FavouriteBeers.propTypes = {
  // beerIds: array.isRequired,
  beers: array.isRequired,
  favourite: object.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(FavouriteBeers);
