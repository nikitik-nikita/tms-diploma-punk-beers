import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { useParams } from 'react-router';
import { array, object } from 'prop-types';

// HOCs
import { connect } from 'react-redux';


// Styles (hooks)
import useStyles from 'styles/containers/Beers';

// Components
import BeersImage from './BeersImage';
import FavouritesButton from './FavouriteButton';

const CartBeer = ({ beers = [], ...props }) => {
  const classes = useStyles();
  const [beer = {}, setBeer] = useState({});

  const params = useParams();

  useEffect(() => {
    const { id } = params;

    if (beers.length && id) {
      const stateBeer = beers.find((item) => item.id === id);
      console.log(stateBeer);
      console.log(beers.length);
      setBeer(stateBeer);
    } else if (props.beer) {
      setBeer(props.beer);
    }
  }, []);

  return (
    <div className={classes.Beers__table__information}>
      <div className={classes.beer__cell}>
        <BeersImage
          src={beer.image_url}
          alt={beer.name}
          beer={beer}
        />
        <div className={classes.beer__text}>
          <p className={classes.beer__text__title}>{beer.name}</p>
          <p className={classes.beer__text__description}>{beer.description}</p>
        </div>
        <FavouritesButton beer={beer} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  beers: state.beers.current,
});

CartBeer.displayName = 'CartBeer';

CartBeer.propTypes = {
  beer: object,
  beers: array.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(CartBeer);
